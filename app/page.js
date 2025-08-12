import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Layers, Globe, Code, ArrowRight, ExternalLink, Sparkles, Rocket, Shield, Clock, CheckCircle, Star } from "lucide-react";
import PageGeneratorForm from "@/components/PageGeneratorForm";
import ScrollToFormButton from "@/components/ScrollToFormButton";
import CodeBlock from "@/components/CodeBlock";
import CopyButton from "@/components/CopyButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
        <div className="w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
        <div className="w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="animate-in fade-in-50 duration-500">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              <Sparkles className="w-4 h-4 mr-2" />
              Bino.bot Campaign • Dynamic Page Builder
            </Badge>
          </div>

          <div className="animate-in fade-in-50 duration-700 delay-100">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              Showcase
              <br />
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Bino.bot
              </span>
            </h1>
          </div>

          <div className="animate-in fade-in-50 duration-700 delay-200">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the power of dynamic page creation built specifically for <span className="text-primary font-semibold">Bino.bot</span> the WhatsApp AI assistant.
              <br />
              Create stunning campaign pages instantly with our intelligent API system.
            </p>
          </div>

          <div className="animate-in fade-in-50 duration-700 delay-300">
            <div className="flex gap-4 justify-center flex-wrap pt-8">
              <ScrollToFormButton />

              <Button asChild variant="outline" size="lg" className="gap-2 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200">
                <Link href="/bino-bot-platform">
                  <Globe className="w-5 h-5" />
                  View Demo Pages
                </Link>
              </Button>

              <Button asChild variant="ghost" size="lg" className="gap-2 hover:bg-primary/5 transition-all duration-200">
                <a href="https://bino.bot" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                  Visit Bino.bot
                </a>
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="animate-in fade-in-50 duration-700 delay-500 pt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Components</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">0ms</div>
                <div className="text-sm text-muted-foreground">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Possibilities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Beautiful</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Built for the Bino.bot Awareness Campaign
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Why Choose Bino.bot
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Engage your audience and grow your reach with Bino.bot’s fast, intelligent, and easy-to-use WhatsApp-based AI assistant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Seamless WhatsApp Experience</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Get instant answers, recommendations, and leads without leaving WhatsApp.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Launch Campaigns Fast</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Promote products and services instantly through conversational AI flows.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Easy Integration</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Connect Bino.bot with your marketing stack, CRM, or product catalog effortlessly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Secure & Reliable</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Built with enterprise-grade security, uptime, and privacy in mind.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Real-Time Results</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Get live, relevant responses instantly with optimized performance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">AI That Understands You</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Natural language processing that understands your needs and adapts responses.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>


      {/* Page Generator Form */}
      <div id="page-generator" className="relative bg-gradient-to-br from-muted/30 to-muted/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 bg-background/50 backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2" />
                Interactive Builder
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Create Your Page Now
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Use our intuitive form to build beautiful pages instantly, or use the API for programmatic access.
                <br />
                <span className="text-primary font-medium">No coding required!</span>
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-3xl blur-3xl" />
              <div className="relative">
                <PageGeneratorForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* API Documentation */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            API Documentation
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* cURL Example */}
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  cURL Command
                </CardTitle>
                <CardDescription>
                  Use this command in your terminal or import into Postman
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <CodeBlock className="bg-background" language="bash">
                  {`curl -X POST https://bino-bot-assignment.vercel.app/api/pages \\
  -H "Content-Type: application/json" \\
  -d '{
    "slug": "my-page",
    "title": "My Awesome Page",
    "description": "Created via API",
    "components": [
      {
        "type": "TextSection",
        "props": {
          "heading": "Hello World!",
          "content": "This page was created instantly.",
          "alignment": "center"
        }
      }
    ]
  }'`}
                </CodeBlock>

                {/* Postman Import Instructions */}
                <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Import to Postman</h4>
                      <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                          <span>Open Postman</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                          <span>Click on <strong>Import</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                          <span>Paste the cURL command above</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                          <span>Press <strong>Enter</strong> to import</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
                          <span>Click <strong>Send</strong> to make the request</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Postman Guide */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-orange-50 to-orange-100 dark:from-orange-950 dark:via-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800 shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/20 dark:bg-orange-800/20 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-300/20 dark:bg-orange-700/20 rounded-full translate-y-12 -translate-x-12" />

              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zM6.874 18.146a6.573 6.573 0 01-1.301-2.246 10.954 10.954 0 002.963-1.119 6.573 6.573 0 01-1.662 3.365zm2.63 1.298a10.954 10.954 0 01-2.963-1.119 6.573 6.573 0 003.365-1.662 10.954 10.954 0 01-1.119 2.963 6.573 6.573 0 01.717-.182zm7.043-9.943a6.573 6.573 0 01-3.365 1.662 10.954 10.954 0 011.119-2.963 6.573 6.573 0 01-.182.717 10.954 10.954 0 012.963 1.119 6.573 6.573 0 01-.535-.535z" />
                    </svg>
                  </div>
                  <div>
                    <CardTitle className="text-xl text-orange-900 dark:text-orange-100">
                      Postman Setup Guide
                    </CardTitle>
                    <CardDescription className="text-orange-700 dark:text-orange-300">
                      Quick setup for Postman POST API
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                {/* Step 1 */}
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4 border border-orange-200/50 dark:border-orange-800/50">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      1
                    </div>
                    <div className="flex-1 space-y-3">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-100">Set Request Method</h4>
                      <div className="bg-orange-100 dark:bg-orange-900/50 rounded-md p-3 border border-orange-200 dark:border-orange-800">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-orange-700 dark:text-orange-300">Method:</span>
                            <code className="bg-orange-200 dark:bg-orange-800 px-3 py-1 rounded font-mono text-orange-900 dark:text-orange-100 select-all">POST</code>
                          </div>
                          <CopyButton
                            text="POST"
                            className="text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-800"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4 border border-orange-200/50 dark:border-orange-800/50">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      2
                    </div>
                    <div className="flex-1 space-y-3">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-100">Enter Request URL</h4>
                      <div className="bg-orange-100 dark:bg-orange-900/50 rounded-md p-3 border border-orange-200 dark:border-orange-800">
                        <div className="flex items-center justify-between gap-2">
                          <code className="bg-orange-200 dark:bg-orange-800 px-3 py-2 rounded font-mono text-sm text-orange-900 dark:text-orange-100 select-all flex-1 min-w-0 overflow-x-auto">
                            https://bino-bot-assignment.vercel.app/api/pages
                          </code>
                          <CopyButton
                            text="https://bino-bot-assignment.vercel.app/api/pages"
                            className="text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-800 flex-shrink-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4 border border-orange-200/50 dark:border-orange-800/50">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      3
                    </div>
                    <div className="flex-1 space-y-3">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-100">Configure Headers</h4>
                      <div className="space-y-3">
                        <div className="bg-orange-100 dark:bg-orange-900/50 rounded-md p-3 border border-orange-200 dark:border-orange-800">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-orange-700 dark:text-orange-300 font-medium">Key:</span>
                              <code className="bg-orange-200 dark:bg-orange-800 px-2 py-1 rounded font-mono text-orange-900 dark:text-orange-100 select-all">Content-Type</code>
                            </div>
                            <CopyButton
                              text="Content-Type"
                              className="text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-800"
                            />
                          </div>
                        </div>
                        <div className="bg-orange-100 dark:bg-orange-900/50 rounded-md p-3 border border-orange-200 dark:border-orange-800">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-orange-700 dark:text-orange-300 font-medium">Value:</span>
                              <code className="bg-orange-200 dark:bg-orange-800 px-2 py-1 rounded font-mono text-orange-900 dark:text-orange-100 select-all">application/json</code>
                            </div>
                            <CopyButton
                              text="application/json"
                              className="text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-800"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4 border border-orange-200/50 dark:border-orange-800/50">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      4
                    </div>
                    <div className="flex-1 space-y-3">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-100">Set Body Type</h4>
                      <div className="bg-orange-100 dark:bg-orange-900/50 rounded-md p-3 border border-orange-200 dark:border-orange-800">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-orange-700 dark:text-orange-300">Select:</span>
                            <code className="bg-orange-200 dark:bg-orange-800 px-2 py-1 rounded font-mono text-orange-900 dark:text-orange-100 select-all">raw</code>
                            <CopyButton
                              text="raw"
                              className="text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-800"
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-orange-700 dark:text-orange-300">and</span>
                            <code className="bg-orange-200 dark:bg-orange-800 px-2 py-1 rounded font-mono text-orange-900 dark:text-orange-100 select-all">JSON</code>
                            <CopyButton
                              text="JSON"
                              className="text-orange-600 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-800"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Tip */}
                <div className="bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-950/30 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-orange-900 dark:text-orange-100">Pro Tip</p>
                      <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">
                        Copy the JSON examples below and paste them into the Body section to test the API quickly!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* JSON Body Examples */}
          <div className="mt-12 space-y-8">
            <h3 className="text-2xl font-bold text-center">JSON Body Examples</h3>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Simple Example */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Simple Text Page</CardTitle>
                  <CardDescription>Basic page with text content</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock className="bg-muted" language="json">
                    {`{
  "slug": "simple-page",
  "title": "My Simple Page",
  "description": "A basic page example",
  "components": [
    {
      "type": "TextSection",
      "props": {
        "heading": "Welcome!",
        "content": "This is a simple page created via API.",
        "alignment": "center"
      }
    },
    {
      "type": "CTA",
      "props": {
        "text": "Get Started",
        "href": "https://bino.bot",
        "variant": "primary",
        "size": "large"
      }
    }
  ]
}`}
                  </CodeBlock>
                </CardContent>
              </Card>

              {/* Complex Example */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Rich Content Page</CardTitle>
                  <CardDescription>Page with multiple component types</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock className="bg-muted" language="json">
                    {`{
  "slug": "rich-page",
  "title": "Rich Content Page",
  "description": "A page with multiple components",
  "components": [
    {
      "type": "ImageBlock",
      "props": {
        "src": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        "alt": "Hero Image",
        "width": 800,
        "height": 400,
        "caption": "Beautiful hero image"
      }
    },
    {
      "type": "Card",
      "props": {
        "title": "Feature Card",
        "content": "This is a feature description.",
        "variant": "elevated"
      }
    },
    {
      "type": "StatsBox",
      "props": {
        "stats": [
          {
            "label": "Users",
            "value": "10K+",
            "icon": "users",
            "change": "+15%"
          }
        ]
      }
    }
  ]
}`}
                  </CodeBlock>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Response Examples */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">API Responses</h3>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Success Response */}
              <Card className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-green-200">✅ Success Response</CardTitle>
                  <CardDescription className="text-green-700 dark:text-green-300">When page is created successfully</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" language="json">
                    {`{
  "success": true,
  "url": "/my-page",
  "message": "Page created successfully",
  "data": {
    "slug": "my-page",
    "title": "My Awesome Page",
    "componentsCount": 2
  }
}`}
                  </CodeBlock>
                </CardContent>
              </Card>

              {/* Error Response */}
              <Card className="border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-red-800 dark:text-red-200">❌ Error Response</CardTitle>
                  <CardDescription className="text-red-700 dark:text-red-300">When validation fails</CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200" language="json">
                    {`{
  "success": false,
  "error": "VALIDATION_ERROR",
  "message": "Invalid request data",
  "details": [
    "Slug is required and must be a string",
    "Component 0: invalid component type"
  ]
}`}
                  </CodeBlock>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Links */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Globe className="w-4 h-4 mr-2" />
              Bino.bot in Action
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Experience Bino.bot Live
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore interactive demos to see how Bino.bot transforms conversations into instant results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Demo 1 */}
            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-500 rounded-lg flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Bino.bot Campaign Page</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  A fully designed landing page to promote Bino.bot’s AI-powered WhatsApp assistant with engaging visuals and key benefits.
                </CardDescription>
                <div className="flex gap-2 mt-4">
                  <Badge variant="secondary" className="text-xs">Campaign</Badge>
                  <Badge variant="secondary" className="text-xs">AI Assistant</Badge>
                  <Badge variant="secondary" className="text-xs">Marketing</Badge>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <Button asChild className="w-full gap-2 group-hover:bg-primary/90 transition-colors">
                  <Link href="/bino-bot-platform">
                    View Live Demo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Demo 2 */}
            <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Bino.bot Feature Showcase</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Discover Bino.bot’s intelligent features, integrations, and AI-driven capabilities in this interactive showcase.
                </CardDescription>
                <div className="flex gap-2 mt-4">
                  <Badge variant="secondary" className="text-xs">AI Features</Badge>
                  <Badge variant="secondary" className="text-xs">Integrations</Badge>
                  <Badge variant="secondary" className="text-xs">Productivity</Badge>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <Button asChild className="w-full gap-2 group-hover:bg-primary/90 transition-colors">
                  <Link href="/bino-bot-features">
                    View Live Demo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">Live Demos</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Layers className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Custom Components</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-primary">&lt;1s</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <footer className="relative border-t bg-gradient-to-br from-muted/50 to-muted/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))] dark:bg-grid-slate-700/25" />
        <div className="relative container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Dynamic Page Generator
                </span>
              </div>

              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Built with Next.js 15, shadcn/ui, and Tailwind CSS for the modern web.
                <br />
                Empowering developers to create beautiful pages instantly.
              </p>

              <div className="flex items-center justify-center gap-6 text-sm">
                <a
                  href="https://bino.bot"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Powered by Bino.bot
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
