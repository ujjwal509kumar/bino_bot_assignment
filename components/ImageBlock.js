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
    <div className={cn("space-y-4 flex flex-col items-center", className)} {...props}>
      <div
        className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="object-cover transition-transform duration-300 hover:scale-105"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      {caption && (
        <p className="text-sm text-muted-foreground text-center italic leading-relaxed max-w-lg">
          {caption}
        </p>
      )}
    </div>
  );
}