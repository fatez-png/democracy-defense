export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-foreground/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} Democracy Defense. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a className="hover:underline underline-offset-4" href="/about">
            About
          </a>
          <a className="hover:underline underline-offset-4" href="/press">
            Press Room
          </a>
        </div>
      </div>
    </footer>
  );
}

