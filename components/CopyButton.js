'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

export default function CopyButton({ text, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant="ghost"
      size="sm"
      className={`h-8 w-8 p-0 hover:bg-background/80 ${className}`}
      title={copied ? "Copied!" : "Copy to clipboard"}
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-600" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </Button>
  );
}