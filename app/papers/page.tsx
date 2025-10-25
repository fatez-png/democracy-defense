import { papers } from "@/lib/papers";
import PapersSearch from "@/components/PapersSearch";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Papers | Democracy Defense",
};

export default function PapersPage() {
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Reveal>
            <h1 className="text-3xl font-semibold tracking-tight">Papers</h1>
            <p className="mt-2 text-foreground/70 max-w-2xl">
              A selection of recent research from the Democracy Defense initiative.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Reveal>
            <PapersSearch papers={papers} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
