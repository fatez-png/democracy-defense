import Link from "next/link";
import Image from "next/image";
import { papers } from "@/lib/papers";
import NewsletterPop from "@/components/NewsletterPop";
import SubscribeForm from "@/components/SubscribeForm";
import Reveal from "@/components/Reveal";

export default function Home() {
  const featured = papers[0];
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(800px 800px at 0% 0%, #dcdee6 0%, transparent 60%), " +
              "radial-gradient(600px 600px at 95% 10%, #37505c26 0%, transparent 60%), " +
              "radial-gradient(700px 700px at 50% 110%, #1c29301f 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div>
            <Reveal className="relative max-w-3xl mx-auto text-center">
              
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight hero-title text-transparent bg-clip-text">
                Democracy Defense
              </h1>
              <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary/30 via-primary to-primary/30" />
              <p className="mt-4 text-lg text-foreground/80">
                Research on influence operations, platform dynamics, and civic
                resilience. Media-friendly, practitioner-ready.
              </p>
              <p className="mt-3 text-base text-foreground/70">
                Democracy Defense is a research line within the Jinesis AI Lab,
                advancing rigorous, public-interest evaluations of AI systems in
                democratic contexts.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/papers"
                  className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-sm hover:shadow md:hover:shadow-md hover:opacity-95 transition-shadow"
                >
                  Explore Papers
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/press"
                  className="inline-flex items-center justify-center rounded-md border border-primary/30 text-primary px-5 py-2.5 text-sm font-medium hover:bg-primary/10"
                >
                  Press Room
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M4 19h16" />
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 7h8" />
                    <path d="M8 11h8" />
                  </svg>
                </Link>
              </div>
              <div className="mt-8 mx-auto max-w-xl rounded-lg border border-black/10 dark:border-white/10 bg-background/80 backdrop-blur p-4 sm:p-5 hover-lift">
                <h3 className="text-base font-semibold">Subscribe to our newsletter</h3>
                <SubscribeForm className="mt-3" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="border-t border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
              {/* briefcase icon */}
              <svg
                className="h-5 w-5 animate-bounce"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <path d="M3 12h18" />
              </svg>
            </span>
            <h2 className="text-2xl font-semibold tracking-tight">Opportunities</h2>
          </div>
          <p className="mt-2 text-foreground/70 max-w-2xl">
            Join the lab. We welcome curious builders and careful thinkers across
            research, engineering, policy, and design.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-black/10 dark:border-white/10 p-4 bg-background">
              <div className="text-sm uppercase tracking-wide text-foreground/60">Fellowship</div>
              <div className="mt-1 font-medium">Research Fellow (LLM Safety)</div>
              <p className="mt-1 text-sm text-foreground/70">
                Lead evaluations, red-teaming, and benchmark design for socio-political safety.
              </p>
              <div className="mt-3 text-sm">
                <a href="#" className="inline-flex items-center gap-2 rounded-md border border-primary/30 text-primary px-3 py-1.5 hover:bg-primary/10">
                  Learn more
                </a>
              </div>
            </div>
            <div className="rounded-lg border border-black/10 dark:border-white/10 p-4 bg-background">
              <div className="text-sm uppercase tracking-wide text-foreground/60">Internship</div>
              <div className="mt-1 font-medium">Student Researcher (NLP)</div>
              <p className="mt-1 text-sm text-foreground/70">
                Help build datasets, run multilingual audits, and prototype explainability tools.
              </p>
              <div className="mt-3 text-sm">
                <a href="#" className="inline-flex items-center gap-2 rounded-md border border-primary/30 text-primary px-3 py-1.5 hover:bg-primary/10">
                  Learn more
                </a>
              </div>
            </div>
            <div className="rounded-lg border border-black/10 dark:border-white/10 p-4 bg-background">
              <div className="text-sm uppercase tracking-wide text-foreground/60">Visiting</div>
              <div className="mt-1 font-medium">Visiting Scholar (Policy)</div>
              <p className="mt-1 text-sm text-foreground/70">
                Collaborate on platform accountability and evidence-based recommendations.
              </p>
              <div className="mt-3 text-sm">
                <a href="#" className="inline-flex items-center gap-2 rounded-md border border-primary/30 text-primary px-3 py-1.5 hover:bg-primary/10">
                  Learn more
                </a>
              </div>
            </div>
            <div className="rounded-lg border border-black/10 dark:border-white/10 p-4 bg-background">
              <div className="text-sm uppercase tracking-wide text-foreground/60">Volunteer</div>
              <div className="mt-1 font-medium">Open Source Contributor</div>
              <p className="mt-1 text-sm text-foreground/70">
                Contribute to datasets, audits, and tooling. Great for early-career collaborators.
              </p>
              <div className="mt-3 text-sm">
                <a href="#" className="inline-flex items-center gap-2 rounded-md border border-primary/30 text-primary px-3 py-1.5 hover:bg-primary/10">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Paper + Video */}
      {featured && (
        <section className="border-t border-black/10 dark:border-white/10 bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Featured Paper</h2>
                <Reveal className="mt-4">
                  <article className="rounded-lg border border-black/10 dark:border-white/10 p-6 bg-background hover-lift">
                    <h3 className="text-xl font-medium">
                      <Link className="hover:underline underline-offset-4" href={`/papers/${featured.slug}`}>
                        {featured.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-foreground/70 line-clamp-4">
                      {featured.slug === "socialharmbench-llm-vulnerabilities"
                        ? "Large language models (LLMs) are increasingly used in sensitive sociopolitical contexts, yet existing safety benchmarks overlook evaluating risks like assisting surveillance, political manipulation, and generating disinformation. To counter this, we introduce SocialHarmBench – the first sociopolitical adversarial evaluation benchmark, with 585 prompts across 7 domains and 34 countries. Results show open-weight models are highly vulnerable, exhibiting 97-98% attack success rates in areas such as historical revisionism, propaganda, and political manipulation. Vulnerabilities are greatest in 21st-and pre-20th-century contexts and regions like Latin America, the USA, and the UK, revealing that current LLM safeguards fail to generalize in sociopolitical settings and may endanger democratic values and human rights."
                        : featured.summary}
                    </p>
                    <p className="mt-3 text-sm text-foreground/60">{featured.authors.join(", ")}</p>
                    {featured.tags && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {featured.tags.slice(0, 5).map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/70">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-4 flex gap-2">
                      <Link
                        href={`/papers/${featured.slug}`}
                        className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/10 px-3 py-2 text-sm hover:bg-foreground/5"
                      >
                        Read details
                      </Link>
                      {featured.url && (
                        <a
                          href={featured.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-3 py-2 text-sm hover:opacity-90"
                        >
                          Read paper 
                        </a>
                      )}
                    </div>
                  </article>
                </Reveal>
              </div>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Featured Video</h2>
                <Reveal className="mt-4">
                  <div
                    className="overflow-hidden rounded-lg border border-black/10 dark:border-white/10"
                    style={{ aspectRatio: "16 / 9", maxWidth: "720px" }}
                  >
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/azianl2rR4U?start=81"
                      title="AI, Safety, and Democratic Resilience"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-base font-medium">AI, Safety, and Democratic Resilience</h3>
                    <p className="mt-1 text-sm text-foreground/70">
                      A concise overview connecting AI safety, platform accountability, and
                      information integrity. Highlights practical approaches for evaluating
                      model risks and building civic-minded safeguards.
                    </p>
                    <a
                      href="https://www.youtube.com/watch?v=azianl2rR4U&t=81s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-md border border-primary/30 text-primary px-3 py-2 text-sm hover:bg-primary/10"
                    >
                      Watch on YouTube <span aria-hidden>↗</span>
                    </a>
                  </div>
                </Reveal>
                </div>
              </div>
          </div>
        </section>
      )}

            
      {/* Features and News */}
      <section className="border-t border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight">Events</h2>
              <ul className="mt-4 space-y-3">
                <li className="rounded-lg border border-black/10 dark:border-white/10 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-foreground/60">Nov 18, 2025 ? Online</div>
                      <div className="font-medium">Democracy Defense: Launch Briefing</div>
                      <div className="text-sm text-foreground/70">Overview of our research agenda and 2025 roadmap.</div>
                    </div>
                    <a href="#" className="shrink-0 inline-flex items-center gap-2 rounded-md border border-primary/30 text-primary px-3 py-1.5 text-xs hover:bg-primary/10">Register</a>
                  </div>
                </li>
                <li className="rounded-lg border border-black/10 dark:border-white/10 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-foreground/60">Dec 05, 2025 ? Hybrid</div>
                      <div className="font-medium">Workshop: Measuring LLM Political Safety</div>
                      <div className="text-sm text-foreground/70">Hands-on with SocialHarmBench and evaluation tips.</div>
                    </div>
                    <a href="#" className="shrink-0 inline-flex items-center gap-2 rounded-md border border-primary/30 text-primary px-3 py-1.5 text-xs hover:bg-primary/10">Register</a>
                  </div>
                </li>
                <li className="rounded-lg border border-black/10 dark:border-white/10 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-foreground/60">Jan 23, 2026 ? Virtual</div>
                      <div className="font-medium">Roundtable: Platforms, Policy, and 2026 Elections</div>
                      <div className="text-sm text-foreground/70">A cross-sector conversation on risk mitigation.</div>
                    </div>
                    <a href="#" className="shrink-0 inline-flex items-center gap-2 rounded-md border border-primary/30 text-primary px-3 py-1.5 text-xs hover:bg-primary/10">RSVP</a>
                  </div>
                </li>
              </ul>
            </Reveal>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">News</h2>
              <ul className="mt-4 space-y-3">
                <Reveal>
                <li className="rounded-lg border border-black/10 dark:border-white/10 p-4 hover-lift">
                  <img src="https://picsum.photos/seed/news1/600/300" alt="News thumbnail" className="w-full h-32 object-cover rounded mb-2" />
                  New paper: SocialHarmBench preprint released - <a className="underline" href="/papers/socialharmbench-llm-vulnerabilities">read more</a>
                </li>
                </Reveal>
                <Reveal delayMs={100}>
                <li className="rounded-lg border border-black/10 dark:border-white/10 p-4 hover-lift">
                  <img src="https://picsum.photos/seed/news2/600/300" alt="News thumbnail" className="w-full h-32 object-cover rounded mb-2" />
                  Updated: Cross-Country Moderation analysis with expanded explanations - <a className="underline" href="/papers/cross-country-content-moderation-nlp">details</a>
                </li>
                </Reveal>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter pop-up */}
      <NewsletterPop />
    </>
  );
}

