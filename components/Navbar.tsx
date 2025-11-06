"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b border-black/10 dark:border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" aria-label="Democracy Defense home">
            <Image
              src="/jinesis-logo.png"
              alt="Jinesis AI Lab logo"
              width={40}
              height={40}
              className="rounded-full border border-black/10 dark:border-white/10"
              priority
            />
            <span className="text-xl font-semibold tracking-tight group-hover:opacity-90">
              Jinesis AI Lab - Democracy Defense
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link className="hover:underline underline-offset-4" href="/papers">
              Papers
            </Link>
            <Link className="hover:underline underline-offset-4" href="/press">
              Press Room
            </Link>
            <Link className="hover:underline underline-offset-4" href="/about">
              About / Disclosure
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

