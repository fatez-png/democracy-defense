"use client";

import { useState } from "react";

type Props = {
  className?: string;
};

export default function SubscribeForm({ className }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = /.+@.+\..+/.test(email);
    if (!isValid) {
      setStatus("error");
      return;
    }
    // Placeholder success state. Wire to your email service later.
    setStatus("success");
  };

  return (
    <form onSubmit={onSubmit} className={className} noValidate>
      <div className="flex flex-col sm:flex-row gap-2">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="you@example.com"
          className="w-full sm:flex-1 rounded-md border border-black/10 dark:border-white/10 bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/30"
          required
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90"
        >
          Subscribe
        </button>
      </div>
      <p className="mt-2 text-xs text-foreground/60">
        We’ll send occasional updates about research, datasets, and events.
      </p>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-600">Please enter a valid email.</p>
      )}
      {status === "success" && (
        <p className="mt-2 text-xs text-green-600">
          Thanks! You’re on the list.
        </p>
      )}
    </form>
  );
}
