import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ImageBlock({ 
  src, 
  alt, 
  width = 800, 
  height = 400, 
  caption, 
  className,
  priority = false,
  ...props 
}) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      {caption && (
        <p className="text-sm text-muted-foreground text-center italic leading-relaxed">
          {caption}
        </p>
      )}
    </div>
  );
}