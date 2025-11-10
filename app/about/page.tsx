import Image from "next/image";
import SubscribeForm from "@/components/SubscribeForm";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About Jinesis AI Lab",
};

export default function AboutPage() {
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
          <Reveal className="flex items-start gap-4">
            <Image
              src="/uoft.png"
              alt="Jinesis AI Lab logo"
              width={72}
              height={72}
              className="object-contain drop-shadow"
              priority
            />
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">Jinesis AI Lab</h1>
              <p className="mt-2 text-foreground/70 max-w-3xl">
                We investigate how AI interacts with democracy: measuring model bias and safety, mapping influence
                operations, and building transparent benchmarks that help platforms, journalists, and policymakers make
                better decisions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-medium">Mission & Focus</h2>
          <p className="mt-2 text-foreground/80">
            Jinesis advances empirically grounded, public-interest AI research. We prioritize work that improves
            platform accountability, strengthens civic resilience, and safeguards information integrity.
          </p>
          <ul className="mt-3 text-sm list-disc pl-5 leading-7 text-foreground/80">
            <li>LLM safety in socio-political contexts</li>
            <li>Disinformation and influence operations</li>
            <li>Human rights and multilingual alignment</li>
            <li>Transparent benchmarks and open datasets</li>
          </ul>
        </div>
            {/* Methods & Values commented out
            <div>
          <h2 className="text-xl font-medium">Methods & Values</h2>
          <ul className="mt-2 text-sm leading-7 text-foreground/80 space-y-1">
            <li><span className="font-medium">Rigorous evaluation:</span> reproducible protocols, stress tests, and audits.</li>
            <li><span className="font-medium">Transparency:</span> open methods, clear caveats, and ethical disclosures.</li>
            <li><span className="font-medium">Safety first:</span> minimize harm, center affected communities.</li>
            <li><span className="font-medium">Collaboration:</span> with academics, journalists, and civil society.</li>
          </ul>
            </div>
            */}
            <div>
              <h2 className="text-xl font-medium">Partners & Press</h2>
              <p className="mt-2 text-foreground/80">
                We work with universities, newsrooms, and civil-society organizations
                to turn research into impact. For media inquiries, see the Press Room
                or contact us directly.
              </p>
              <div className="mt-3 text-sm">
                <a href="/press" className="inline-flex items-center gap-2 rounded-md border border-primary/30 text-primary px-3 py-2 hover:bg-primary/10">
                  Visit Press Room 
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/*
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium">Projects & Benchmarks</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/papers/socialharmbench-llm-vulnerabilities" className="block rounded-lg bg-muted p-4 hover:shadow-sm transition-colors hover-lift">
            <h3 className="font-medium">SocialHarmBench</h3>
            <p className="mt-1 text-sm text-foreground/70">Stress-testing LLMs under political safety pressures.</p>
          </a>
          <a href="/papers/preserving-historical-truth-revisionism-llms" className="block rounded-lg bg-muted p-4 hover:shadow-sm transition-colors hover-lift">
            <h3 className="font-medium">Historical Revisionism</h3>
            <p className="mt-1 text-sm text-foreground/70">Detecting revisionism across high-risk scenarios.</p>
          </a>
          <a href="/papers/democratic-or-authoritarian-bias-in-llms" className="block rounded-lg bg-muted p-4 hover:shadow-sm transition-colors hover-lift">
            <h3 className="font-medium">Democracy vs. Authoritarianism</h3>
            <p className="mt-1 text-sm text-foreground/70">Probing political bias across contexts.</p>
          </a>
          <a href="/papers/cross-country-content-moderation-nlp" className="block rounded-lg bg-muted p-4 hover:shadow-sm transition-colors hover-lift">
            <h3 className="font-medium">Cross-Country Moderation</h3>
            <p className="mt-1 text-sm text-foreground/70">Reverse-engineering moderation patterns and rationales.</p>
          </a>
          </div>
        </div>
      </section>
      */}

      {/* Partners & Press moved up next to Mission & Focus */}

      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium">Lab Members</h2>
          <p className="mt-2 text-foreground/70 text-sm">A small snapshot of our growing, interdisciplinary team.</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              // Feature members first
              { name: "Punya Syon Pandey", seed: "punya", src: "/punya.jpg", href: "https://vesaterra.github.io/" },
              { name: "David Guzman", seed: "david", src: "/david.jpeg", href: "https://scholar.google.com/citations?user=2VxJWs4AAAAJ&hl=en" },
              // Single placeholder (kept as is)
              { name: "Alex Kim", role: "", seed: "alex" },
            ].map((m, i) => (
              <Reveal key={m.seed} delayMs={i * 60}>
                <div className="text-center">
                  <a href={m.href ?? ""} aria-label={m.name}>
                    <img
                      src={m.src ?? `https://picsum.photos/seed/${m.seed}/160/160`}
                      alt={m.name}
                      className="mx-auto h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover ring-1 ring-black/10 dark:ring-white/10"
                    />
                  </a>
                  <a href={m.href ?? ""} className="mt-2 block font-medium hover:underline">
                    {m.name}
                  </a>
                  {m.role && (
                    <div className="text-sm text-foreground/70">{m.role}</div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium">Contact</h2>
          <p className="mt-2 text-foreground/80 text-sm">
            For collaborations, datasets, or briefings: zjin.admin@cs.toronto.edu
          </p>
        </div>
      </section>
    </>
  );
}
