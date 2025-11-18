"use client";

import { useEffect, useState } from "react";
import SubscribeForm from "@/components/SubscribeForm";

const STORAGE_KEY = "dd_newsletter_dismissed_at";
const HIDE_FOR_DAYS = 7;

function shouldShow(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return true;
    const at = new Date(raw).getTime();
    const now = Date.now();
    const ms = HIDE_FOR_DAYS * 24 * 60 * 60 * 1000;
    return now - at > ms;
  } catch {
    return true;
  }
}

export default function NewsletterPop() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Small delay for nicer entrance
    const t = setTimeout(() => {
      if (typeof window !== "undefined" && shouldShow()) setOpen(true);
    }, 400);
    return () => clearTimeout(t);
  }, []);

  const dismiss = (persist = true) => {
    setOpen(false);
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, new Date().toISOString());
      } catch {}
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-3xl rounded-xl border border-black/10 dark:border-white/10 bg-background/95 backdrop-blur p-4 sm:p-5 shadow-lg">
        <div className="flex items-start gap-3">
      
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold">Subscribe to our newsletter <span className="text-red-500 ml-2" style={{ fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive' }}>coming soon</span></h3>
            <p className="mt-1 text-sm text-foreground/70">
              Occasional updates on research, datasets, and events. No spam.
            </p>
            <SubscribeForm className="mt-3" />
          </div>
          <button
            onClick={() => dismiss(true)}
            aria-label="Close"
            className="ml-2 text-foreground/60 hover:text-foreground/90 text-lg leading-none"
          >
            X
          </button>
        </div>
        <div className="mt-2 text-xs text-foreground/60">
          <button
            onClick={() => dismiss(false)}
            className="underline underline-offset-2 hover:opacity-80"
          >
            Hide for this session only
          </button>
        </div>
      </div>
    </div>
  );
}


