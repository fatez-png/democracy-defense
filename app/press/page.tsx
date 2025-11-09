export const metadata = {
  title: "Press Room | Democracy Defense",
};

import Reveal from "@/components/Reveal";

export default function PressPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface">
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(700px 700px at 5% 10%, #dcdee6 0%, transparent 60%), " +
              "radial-gradient(600px 600px at 95% 0%, #37505c26 0%, transparent 60%), " +
              "radial-gradient(700px 700px at 50% 110%, #1c29301f 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Reveal>
            <h1 className="text-3xl font-semibold tracking-tight">Press Room</h1>
            <p className="mt-2 text-foreground/70 max-w-2xl">
              Media resources, statements, and contact information for press inquiries.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-medium">Media Contact</h2>
            <div className="mt-3 flex items-center gap-3">
              <a href="https://zhijing-jin.com/home/" target="_blank" rel="noopener noreferrer" className="shrink-0">
                <img src="/zhijing_pic.jpg" alt="Zhijing Jin" className="h-10 w-10 rounded-full object-cover ring-1 ring-black/10 dark:ring-white/10" />
              </a>
              <div className="text-sm">
                <a href="https://zhijing-jin.com/home/" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">Zhijing Jin</a>
                <div className="text-foreground/70">Founder & Head, Jinesis AI Lab</div>
                <div><a href="mailto:zjin.admin@cs.toronto.edu" className="hover:underline">zjin.admin@cs.toronto.edu</a></div>
              </div>
            </div>
            <div className="mt-3 text-sm text-foreground/80">
              <p>press@democracydefense.org</p>
              <p className="mt-1">+1 (555) 123-4567</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-medium">Press Materials</h2>
            <ul className="mt-2 text-sm list-disc pl-5 leading-7">
              <li>Organization overview (PDF) — coming soon</li>
              <li>Leadership bios — coming soon</li>
              <li>Brand assets and usage — coming soon</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <Reveal>
          <h2 className="text-xl font-medium">Recent Coverage</h2>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="border border-black/10 dark:border-white/10 rounded p-4 hover-lift">
              Placeholder headline about a Democracy Defense report — Publication Name (2024)
            </li>
            <li className="border border-black/10 dark:border-white/10 rounded p-4 hover-lift">
              Placeholder interview on platform accountability — Outlet (2024)
            </li>
          </ul>
        </Reveal>
      </section>
    </>
  );
}
