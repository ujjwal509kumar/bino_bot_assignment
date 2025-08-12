import { notFound } from 'next/navigation';
import { loadPage } from '@/lib/pageStorage';
import ComponentRenderer from '@/components/ComponentRenderer';

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  try {
    const pageData = await loadPage(slug);

    if (!pageData) {
      return {
        title: 'Page Not Found',
        description: 'The requested page could not be found.'
      };
    }

    return {
      title: pageData.title,
      description: pageData.description,
      openGraph: {
        title: pageData.title,
        description: pageData.description,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: pageData.title,
        description: pageData.description,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    };
  }
}

export default async function DynamicPage({ params }) {
  const { slug } = await params;
  
  try {
    const pageData = await loadPage(slug);

    // If page doesn't exist, show 404
    if (!pageData) {
      notFound();
    }

    // Ensure components is an array
    const components = Array.isArray(pageData.components) ? pageData.components : [];

    return (
      <div className="min-h-screen bg-background">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-b">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                {pageData.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {pageData.description}
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <span>Created on</span>
                <time dateTime={pageData.createdAt}>
                  {new Date(pageData.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {components.length > 0 ? (
              <ComponentRenderer 
                components={components}
                className="space-y-16"
              />
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  This page has no components yet.
                </p>
              </div>
            )}
          </div>
        </main>

        {/* Page Footer */}
        <footer className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-sm text-muted-foreground">
              <p>
                This page was dynamically generated • {components.length} components
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  } catch (error) {
    console.error('Error loading page:', error);
    // Log the error for debugging but still show 404
    if (process.env.NODE_ENV === 'development') {
      console.error('Page loading error details:', {
        slug,
        error: error.message,
        stack: error.stack
      });
    }
    notFound();
  }
}