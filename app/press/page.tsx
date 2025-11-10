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
            <h2 className="text-2xl font-semibold">Media Contact</h2>
            <div className="mt-4 flex items-center gap-4">
              <a href="https://zhijing-jin.com/home/" target="_blank" rel="noopener noreferrer" className="shrink-0">
                <img src="/zhijing_pic.jpg" alt="Zhijing Jin" className="h-12 w-12 rounded-full object-cover ring-1 ring-black/10 dark:ring-white/10" />
              </a>
              <div className="text-base">
                <a href="https://zhijing-jin.com/home/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">Zhijing Jin</a>
                <div className="text-foreground/80">Founder & Head, Jinesis AI Lab</div>
                <div><a href="mailto:zjin.admin@cs.toronto.edu" className="hover:underline">zjin.admin@cs.toronto.edu</a></div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium">Press Materials</h2>
            <p className="mt-2 text-sm text-foreground/70">
              We’re a new lab — full press materials are in progress. Available now: founder information below. More
              lab assets are coming soon.
            </p>
            <ul className="mt-3 text-sm list-disc pl-5 leading-7">
              <li>
                Founder bio:{" "}
                <a
                  href="https://zhijing-jin.com/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:opacity-90"
                >
                  Zhijing Jin
                </a>
              </li>
              <li>
                Founder photos:
                <div className="mt-1 ml-5 space-x-3">
                  <a href="/zhijing_pic.jpg" className="underline underline-offset-2 hover:opacity-90">Profile photo</a>
                  <span className="text-foreground/60">Talk photo — placeholder</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <Reveal>
          <h2 className="text-xl font-medium">Founder Bio</h2>
          <p className="mt-2 text-sm leading-7 text-foreground/80">
            Zhijing Jin (she/her) is an incoming Assistant Professor in Computer Science at the University of Toronto, and currently a postdoctoral research scientist at Max Planck Institute in Germany. She is a faculty member at the Vector Institute, a CIFAR AI Chair, an ELLIS advisor, and faculty affiliate at the Schwartz Reisman Institute in Toronto. She co-chairs the ACL Ethics Committee, and the ACL Year-Round Mentorship. Her research focuses on Causal Reasoning with LLMs, and AI Safety in Multi-Agent LLMs. She has received three Rising Star awards, two Best Paper awards at NeurIPS 2024 Workshops, two PhD Fellowships, and a postdoc fellowship. She has authored over 80 papers, many of which appear at top AI conferences (e.g., ACL, EMNLP, NAACL, NeurIPS, ICLR, AAAI), and her work have been featured in CHIP Magazine, WIRED, and MIT News. She co-organizes many workshops (e.g., several NLP for Positive Impact Workshops at ACL and EMNLP, and Causal Representation Learning Workshop at NeurIPS 2024), and leads the Tutorial on Causality for LLMs at NeurIPS 2024, and Tutorial on CausalNLP at EMNLP 2022. See more info at
            <a href="https://zhijing-jin.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2"> zhijing-jin.com</a>.
          </p>
        </Reveal>
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
