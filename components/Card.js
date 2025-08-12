import { Card as ShadcnCard, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const cardVariants = cva(
  "transition-all duration-200 hover:shadow-lg",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground shadow-sm",
        outlined: "border-2 border-primary/20 bg-background hover:border-primary/40",
        elevated: "shadow-xl bg-gradient-to-br from-card to-card/80 hover:shadow-2xl transform hover:-translate-y-1"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export default function Card({ title, content, variant = "default", className, ...props }) {
  return (
    <ShadcnCard className={cn(cardVariants({ variant }), className)} {...props}>
      {title && (
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-semibold leading-tight">
            {title}
          </CardTitle>
        </CardHeader>
      )}
      {content && (
        <CardContent className="pt-0">
          <CardDescription className="text-base text-muted-foreground leading-relaxed">
            {content}
          </CardDescription>
        </CardContent>
      )}
    </ShadcnCard>
  );
}