'use client';

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function ScrollToFormButton() {
  const scrollToForm = () => {
    document.getElementById('page-generator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button 
      size="lg" 
      className="gap-2"
      onClick={scrollToForm}
    >
      <Plus className="w-5 h-5" />
      Create Page Now
    </Button>
  );
}