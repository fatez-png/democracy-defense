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
              // Photo-available members first
              { name: "Punya Syon Pandey", src: "/punya.jpg", href: "https://vesaterra.github.io/" },
              { name: "David Guzman", src: "/david.jpeg", href: "https://scholar.google.com/citations?user=2VxJWs4AAAAJ&hl=en" },
              { name: "Keenan Samway", src: "/Keenan%20Samway.jpg", href: "https://www.linkedin.com/in/keenansamway" },
              { name: "Neemesh Yadav", src: "/Neemesh%20photo.jpg" },
              { name: "Terrence Zhang", src: "/Terrence.png" },
              { name: "Francesco Ortu", src: "/francesco.png" },
              { name: "Irene Strauss", src: "/irene.jpg" },
              { name: "Joeun Yook", src: "/joeun.png" },
              // Then the rest (no photos yet)
              { name: "David F. Jenny" },
              { name: "Devansh Bhardwaj" },
              { name: "Yann Billeter" },
            ].map((m, i) => (
              <Reveal key={m.name} delayMs={i * 60}>
                <div className="text-center">
                  <a href={m.href ?? "#"} aria-label={m.name}>
                    {m.src ? (
                      <img
                        src={m.src}
                        alt={m.name}
                        className="mx-auto h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover ring-1 ring-black/10 dark:ring-white/10"
                      />
                    ) : (
                      (() => {
                        const parts = m.name.split(/\s+/).filter(Boolean);
                        const initials = (parts[0]?.[0] ?? "").concat(parts[1]?.[0] ?? "").toUpperCase();
                        return (
                          <div className="mx-auto h-20 w-20 sm:h-24 sm:w-24 rounded-full ring-1 ring-black/10 dark:ring-white/10 bg-foreground/10 text-foreground/70 flex items-center justify-center text-base sm:text-lg">
                            {initials}
                          </div>
                        );
                      })()
                    )}
                  </a>
                  <a href={m.href ?? "#"} className="mt-2 block font-medium hover:underline">
                    {m.name}
                  </a>
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
            For collaborations, datasets, or briefings: <strong><a className="hover:underline" href="mailto:zjin.admin@cs.toronto.edu">zjin.admin@cs.toronto.edu</a></strong>
          </p>
          <div className="mt-3 flex items-center gap-4 text-sm">
            <a href="https://bsky.app/profile/zhijingjin.bsky.social" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:opacity-90" aria-label="Bluesky">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                <path d="M12 2.042c2.454 2.264 4.907 4.528 7.36 6.791 1.594 1.468 2.646 1.992 3.333 1.992 1.478 0-.319 3.548-.783 4.2-1.101 1.542-3.042 3.334-4.446 4.382-1.451 1.088-2.404 1.382-3.463.47-.375-.32-.703-.71-1.001-.983-.298.273-.626.664-1.001.983-1.059.912-2.012.618-3.463-.47-1.404-1.048-3.345-2.84-4.446-4.382-.464-.652-2.261-4.2-.783-4.2.687 0 1.739-.524 3.333-1.992C7.093 6.57 9.546 4.306 12 2.042Z"/>
              </svg>
              Bluesky
            </a>
            <a href="https://x.com/ZhijingJin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:opacity-90" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                <path d="M17.5 3h3.2l-7 8.1L22 21h-6.9l-5.4-6.5L3.5 21H.3l7.5-8.6L0 3h7l5 6 5.5-6zM5.2 5l11.8 14h1.8L7 5H5.2z"/>
              </svg>
              X
            </a>
            <a href="https://youtube.com/@Zhijing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:opacity-90" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                <path d="M23.5 6.2s-.2-1.7-.9-2.4c-.8-.9-1.7-.9-2.1-1C17.1 2.5 12 2.5 12 2.5h0s-5.1 0-8.5.3c-.4 0-1.3.1-2.1 1-.7.7-.9 2.4-.9 2.4S0 8.3 0 10.4v1.9c0 2.1.2 4.2.2 4.2s.2 1.7.9 2.4c.8.9 1.9.9 2.4 1 1.8.2 7.5.3 7.5.3s5.1 0 8.5-.3c.4 0 1.3-.1 2.1-1 .7-.7.9-2.4.9-2.4s.2-2.1.2-4.2v-1.9c0-2.1-.2-4.2-.2-4.2zM9.5 14.8V7.9l6.2 3.5-6.2 3.4z"/>
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

