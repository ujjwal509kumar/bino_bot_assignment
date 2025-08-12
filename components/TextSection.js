import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const textSectionVariants = cva(
  "space-y-4",
  {
    variants: {
      alignment: {
        left: "text-left",
        center: "text-center",
        right: "text-right"
      }
    },
    defaultVariants: {
      alignment: "left"
    }
  }
);

export default function TextSection({ 
  heading, 
  content, 
  alignment = "left", 
  className,
  ...props 
}) {
  return (
    <div className={cn(textSectionVariants({ alignment }), className)} {...props}>
      {heading && (
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
          {heading}
        </h2>
      )}
      {content && (
        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
          {typeof content === 'string' ? (
            <p className="text-base leading-7">{content}</p>
          ) : (
            content
          )}
        </div>
      )}
    </div>
  );
}