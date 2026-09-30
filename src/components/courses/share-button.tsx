"use client";

import { Share2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ShareButtonProps = {
  title: string;
  className?: string;
};

export function ShareButton({ title, className }: ShareButtonProps) {
  async function share() {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // Dismissing the native share sheet rejects; nothing to report.
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied", { description: "Paste it anywhere to share this course." });
    } catch {
      toast.error("Couldn't copy the link", { description: url });
    }
  }

  return (
    <Button type="button" onClick={share} className={cn("h-10 gap-2 px-6 label-m leading-6", className)}>
      <Share2 aria-hidden="true" className="size-6" />
      Share
    </Button>
  );
}
