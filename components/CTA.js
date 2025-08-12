import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function CTA({ 
  text, 
  href, 
  variant = "primary", 
  size = "medium",
  external = false,
  showIcon = true,
  className,
  ...props 
}) {
  const buttonVariants = {
    primary: "default",
    secondary: "secondary", 
    outline: "outline"
  };

  const buttonSizes = {
    small: "sm",
    medium: "default",
    large: "lg"
  };

  const ButtonComponent = (
    <Button
      variant={buttonVariants[variant]}
      size={buttonSizes[size]}
      className={cn(
        "group transition-all duration-200 hover:scale-105 active:scale-95",
        size === "large" && "text-lg px-8 py-6",
        className
      )}
      {...props}
    >
      <span>{text}</span>
      {showIcon && (
        <div className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
          {external ? (
            <ExternalLink className="w-4 h-4" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
        </div>
      )}
    </Button>
  );

  if (external || href.startsWith('http')) {
    return (
      <a 
        href={href} 
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="inline-block"
      >
        {ButtonComponent}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {ButtonComponent}
    </Link>
  );
}