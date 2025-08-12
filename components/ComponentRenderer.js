import { getComponent } from '@/lib/componentRegistry';
import { cn } from '@/lib/utils';
import ErrorBoundary from './ErrorBoundary';

export default function ComponentRenderer({ components, className }) {
  if (!components || !Array.isArray(components)) {
    return null;
  }

  return (
    <div className={cn("space-y-12", className)}>
      {components.map((componentData, index) => {
        const { type, props } = componentData;
        const Component = getComponent(type);

        if (!Component) {
          console.warn(`Unknown component type: ${type}`);
          return (
            <div key={index} className="p-4 border border-destructive/20 bg-destructive/5 rounded-lg">
              <p className="text-sm text-destructive">
                Unknown component type: <code className="font-mono">{type}</code>
              </p>
            </div>
          );
        }

        return (
          <ErrorBoundary 
            key={index}
            fallbackMessage={`Failed to render ${type} component`}
          >
            <div className="animate-in fade-in-50 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
              <Component {...props} />
            </div>
          </ErrorBoundary>
        );
      })}
    </div>
  );
}