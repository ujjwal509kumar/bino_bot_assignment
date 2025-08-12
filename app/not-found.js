import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Search, Plus, Zap } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
                <div className="w-72 h-72 bg-destructive/10 rounded-full blur-3xl" />
            </div>
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
                <div className="w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
            </div>

            <div className="relative container mx-auto px-4 py-20 lg:py-32">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* 404 Badge */}
                    <div className="animate-in fade-in-50 duration-500">
                        <Badge variant="destructive" className="mb-6 px-4 py-2 text-sm font-medium">
                            <Search className="w-4 h-4 mr-2" />
                            404 Error • Page Not Found
                        </Badge>
                    </div>

                    {/* Main Heading */}
                    <div className="animate-in fade-in-50 duration-700 delay-100">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                            <span className="bg-gradient-to-r from-foreground to-destructive bg-clip-text text-transparent">
                                Oops!
                            </span>
                        </h1>
                        <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-4">
                            Page Not Found
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="animate-in fade-in-50 duration-700 delay-200">
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                            The page you&#39;re looking for doesn&#39;t exist or may have been moved.
                            <br />
                            <span className="text-primary font-medium">Let&#39;s get you back on track!</span>
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="animate-in fade-in-50 duration-700 delay-300">
                        <div className="flex gap-4 justify-center flex-wrap mb-12">
                            <Button asChild size="lg" className="gap-2">
                                <Link href="/">
                                    <Home className="w-5 h-5" />
                                    Go Home
                                </Link>
                            </Button>

                            <Button asChild variant="outline" size="lg" className="gap-2">
                                <Link href="/#page-generator">
                                    <Plus className="w-5 h-5" />
                                    Create New Page
                                </Link>
                            </Button>

                            <Button asChild variant="ghost" size="lg" className="gap-2">
                                <Link href="/bino-bot-platform">
                                    <Zap className="w-5 h-5" />
                                    View Demo
                                </Link>
                            </Button>
                        </div>
                    </div>


                </div>
            </div>

            {/* Footer */}
            <footer className="relative border-t bg-gradient-to-br from-muted/50 to-muted/20 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center text-sm text-muted-foreground">
                        <p>
                            Lost? No worries! Our Dynamic Page Generator is here to help.
                            <br />
                            <Link href="/" className="text-primary hover:underline font-medium">
                                Return to homepage
                            </Link>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}