'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Eye, Loader2, CheckCircle, AlertCircle, Check, X } from "lucide-react";
import { useSlugValidation } from "@/lib/useSlugValidation";

const COMPONENT_TYPES = [
    { value: 'TextSection', label: 'Text Section', description: 'Rich text with heading and alignment' },
    { value: 'Card', label: 'Card', description: 'Content in a beautiful card layout' },
    { value: 'ImageBlock', label: 'Image Block', description: 'Images with captions and optimization' },
    { value: 'StatsBox', label: 'Stats Box', description: 'Display statistics and metrics' },
    { value: 'CTA', label: 'Call to Action', description: 'Beautiful buttons with variants' }
];

export default function PageGeneratorForm() {
    const [formData, setFormData] = useState({
        slug: '',
        title: '',
        description: '',
        components: []
    });
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(null);
    const { slugStatus, checkSlug, resetSlugStatus } = useSlugValidation();

    const handleSlugChange = (value) => {
        setFormData(prev => ({ ...prev, slug: value }));
        if (value) {
            checkSlug(value);
        } else {
            resetSlugStatus();
        }
    };

    const addComponent = () => {
        setFormData(prev => ({
            ...prev,
            components: [...prev.components, {
                type: 'TextSection',
                props: {}
            }]
        }));
    };

    const removeComponent = (index) => {
        setFormData(prev => ({
            ...prev,
            components: prev.components.filter((_, i) => i !== index)
        }));
    };

    const updateComponent = (index, field, value) => {
        setFormData(prev => ({
            ...prev,
            components: prev.components.map((comp, i) =>
                i === index ? { ...comp, [field]: value } : comp
            )
        }));
    };

    const updateComponentProp = (index, propKey, propValue) => {
        setFormData(prev => ({
            ...prev,
            components: prev.components.map((comp, i) =>
                i === index ? {
                    ...comp,
                    props: { ...comp.props, [propKey]: propValue }
                } : comp
            )
        }));
    };

    const getComponentFields = (type) => {
        switch (type) {
            case 'TextSection':
                return [
                    { key: 'heading', label: 'Heading', type: 'text', placeholder: 'Section heading' },
                    { key: 'content', label: 'Content', type: 'textarea', placeholder: 'Your text content here' },
                    { key: 'alignment', label: 'Alignment', type: 'select', options: ['left', 'center', 'right'] }
                ];
            case 'Card':
                return [
                    { key: 'title', label: 'Title', type: 'text', placeholder: 'Card title' },
                    { key: 'content', label: 'Content', type: 'textarea', placeholder: 'Card content' },
                    { key: 'variant', label: 'Variant', type: 'select', options: ['default', 'outlined', 'elevated'] }
                ];
            case 'ImageBlock':
                return [
                    { key: 'src', label: 'Image URL (use only unsplash.com)', type: 'text', placeholder: 'https://example.com/image.jpg' },
                    { key: 'alt', label: 'Alt Text', type: 'text', placeholder: 'Image description' },
                    { key: 'width', label: 'Width', type: 'number', placeholder: '800' },
                    { key: 'height', label: 'Height', type: 'number', placeholder: '400' },
                    { key: 'caption', label: 'Caption', type: 'text', placeholder: 'Optional image caption' }
                ];
            case 'CTA':
                return [
                    { key: 'text', label: 'Button Text', type: 'text', placeholder: 'Click Me' },
                    { key: 'href', label: 'Link URL', type: 'text', placeholder: 'https://example.com' },
                    { key: 'variant', label: 'Variant', type: 'select', options: ['primary', 'secondary', 'outline'] },
                    { key: 'size', label: 'Size', type: 'select', options: ['small', 'medium', 'large'] }
                ];
            case 'StatsBox':
                return [
                    { key: 'stats', label: 'Stats (JSON)', type: 'textarea', placeholder: '[{"label": "Users", "value": "10K+", "icon": "users"}]' }
                ];
            default:
                return [];
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setResult(null);

        // Check if slug is available before submitting
        if (slugStatus.isAvailable === false) {
            setResult({
                type: 'error',
                message: 'Please choose a different slug',
                details: [slugStatus.message]
            });
            setIsLoading(false);
            return;
        }

        // Check if slug validation is still in progress
        if (slugStatus.isChecking) {
            setResult({
                type: 'error',
                message: 'Please wait for slug validation to complete',
                details: ['Slug availability is being checked...']
            });
            setIsLoading(false);
            return;
        }

        try {
            // Process stats JSON if present
            const processedComponents = formData.components.map(comp => {
                if (comp.type === 'StatsBox' && comp.props.stats) {
                    try {
                        return {
                            ...comp,
                            props: {
                                ...comp.props,
                                stats: JSON.parse(comp.props.stats)
                            }
                        };
                    } catch (e) {
                        return comp;
                    }
                }
                return comp;
            });

            const response = await fetch('/api/pages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    components: processedComponents
                }),
            });

            const data = await response.json();

            if (data.success) {
                setResult({
                    type: 'success',
                    message: 'Page created successfully!',
                    url: data.url
                });
                // Reset form
                setFormData({
                    slug: '',
                    title: '',
                    description: '',
                    components: []
                });
            } else {
                // Handle specific error types
                let errorMessage = data.message || 'Failed to create page';
                let errorDetails = data.details;

                if (data.error === 'SLUG_EXISTS') {
                    errorMessage = `Slug '${formData.slug}' is already taken`;
                    errorDetails = [
                        data.message,
                        ...(data.suggestion ? [`Suggestions: ${data.suggestion}`] : [])
                    ];
                    // Reset slug validation to force recheck
                    resetSlugStatus();
                }

                setResult({
                    type: 'error',
                    message: errorMessage,
                    details: errorDetails
                });
            }
        } catch (error) {
            setResult({
                type: 'error',
                message: 'Network error occurred',
                details: [error.message]
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Create New Page
                </CardTitle>
                <CardDescription>
                    Use this form to create a new page with custom components
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Page Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="slug">Page Slug</Label>
                            <div className="relative">
                                <Input
                                    id="slug"
                                    value={formData.slug}
                                    onChange={(e) => handleSlugChange(e.target.value)}
                                    placeholder="my-awesome-page"
                                    required
                                    className={`pr-10 ${
                                        slugStatus.isAvailable === false ? 'border-red-500 focus:border-red-500' :
                                        slugStatus.isAvailable === true ? 'border-green-500 focus:border-green-500' : ''
                                    }`}
                                />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    {slugStatus.isChecking && (
                                        <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                                    )}
                                    {!slugStatus.isChecking && slugStatus.isAvailable === true && (
                                        <Check className="w-4 h-4 text-green-600" />
                                    )}
                                    {!slugStatus.isChecking && slugStatus.isAvailable === false && (
                                        <X className="w-4 h-4 text-red-600" />
                                    )}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">
                                    Will be available at /{formData.slug || 'your-slug'}
                                </p>
                                {slugStatus.message && (
                                    <p className={`text-xs ${
                                        slugStatus.isAvailable === false ? 'text-red-600' :
                                        slugStatus.isAvailable === true ? 'text-green-600' : 'text-muted-foreground'
                                    }`}>
                                        {slugStatus.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="title">Page Title</Label>
                            <Input
                                id="title"
                                value={formData.title}
                                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                placeholder="My Awesome Page"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Page Description</Label>
                        <Textarea
                            id="description"
                            value={formData.description}
                            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                            placeholder="A brief description of your page"
                            required
                        />
                    </div>

                    {/* Components Section */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">Page Components</h3>
                            <Button type="button" onClick={addComponent} variant="outline" size="sm">
                                <Plus className="w-4 h-4 mr-2" />
                                Add Component
                            </Button>
                        </div>

                        {formData.components.length === 0 && (
                            <Card className="border-dashed">
                                <CardContent className="flex items-center justify-center py-8">
                                    <p className="text-muted-foreground">No components added yet. Click &quot;Add Component&quot; to get started.</p>
                                </CardContent>
                            </Card>
                        )}

                        {formData.components.map((component, index) => (
                            <Card key={index} className="relative">
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Badge variant="secondary">Component {index + 1}</Badge>
                                            <Select
                                                value={component.type}
                                                onValueChange={(value) => updateComponent(index, 'type', value)}
                                            >
                                                <SelectTrigger className="w-48">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {COMPONENT_TYPES.map(type => (
                                                        <SelectItem key={type.value} value={type.value}>
                                                            <div>
                                                                <div className="font-medium">{type.label}</div>
                                                                <div className="text-xs text-muted-foreground">{type.description}</div>
                                                            </div>
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <Button
                                            type="button"
                                            onClick={() => removeComponent(index)}
                                            variant="ghost"
                                            size="sm"
                                            className="text-destructive hover:text-destructive"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {getComponentFields(component.type).map(field => (
                                        <div key={field.key} className="space-y-2">
                                            <Label>{field.label}</Label>
                                            {field.type === 'textarea' ? (
                                                <Textarea
                                                    value={component.props[field.key] || ''}
                                                    onChange={(e) => updateComponentProp(index, field.key, e.target.value)}
                                                    placeholder={field.placeholder}
                                                />
                                            ) : field.type === 'select' ? (
                                                <Select
                                                    value={component.props[field.key] || field.options[0]}
                                                    onValueChange={(value) => updateComponentProp(index, field.key, value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {field.options.map(option => (
                                                            <SelectItem key={option} value={option}>
                                                                {option}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            ) : (
                                                <Input
                                                    type={field.type}
                                                    value={component.props[field.key] || ''}
                                                    onChange={(e) => updateComponentProp(index, field.key, e.target.value)}
                                                    placeholder={field.placeholder}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Result Display */}
                    {result && (
                        <Card className={result.type === 'success' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
                            <CardContent className="pt-6">
                                <div className="flex items-start gap-3">
                                    {result.type === 'success' ? (
                                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                                    )}
                                    <div className="flex-1">
                                        <p className={result.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                                            {result.message}
                                        </p>
                                        {result.url && (
                                            <div className="mt-2 flex gap-2">
                                                <Button asChild size="sm" variant="outline">
                                                    <a href={result.url} target="_blank" rel="noopener noreferrer">
                                                        <Eye className="w-4 h-4 mr-2" />
                                                        View Page
                                                    </a>
                                                </Button>
                                            </div>
                                        )}
                                        {result.details && (
                                            <ul className="mt-2 text-sm text-red-700">
                                                {result.details.map((detail, i) => (
                                                    <li key={i}>• {detail}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <Button 
                            type="submit" 
                            disabled={
                                isLoading || 
                                formData.components.length === 0 || 
                                slugStatus.isAvailable === false ||
                                slugStatus.isChecking ||
                                !formData.slug
                            }
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Creating Page...
                                </>
                            ) : slugStatus.isChecking ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Checking Slug...
                                </>
                            ) : (
                                <>
                                    <Plus className="w-4 h-4 mr-2" />
                                    Create Page
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}