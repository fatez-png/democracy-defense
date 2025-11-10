import Link from "next/link";
import Reveal from "@/components/Reveal";
import NewsletterPop from "@/components/NewsletterPop";
import { papers } from "@/lib/papers";
import PartnersCarousel from "@/components/PartnersCarousel";
import SubscribeForm from "@/components/SubscribeForm";
// reverted: no homepage hero/search imports

export const metadata = {
  title: "Democracy Defense | Jinesis AI Lab",
};

export default function HomePage() {
  const featured =
    papers.find((p) => p.slug === "socialharmbench-llm-vulnerabilities") ||
    papers[0];

  return (
    <>
      {/* Hero */}
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Democracy Defense</h1>
          <div
            className="mx-auto mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-transparent via-foreground/40 to-transparent"
          />
          <p className="mt-6 text-lg sm:text-xl text-foreground/80">
            Research on influence operations, platform dynamics, and civic resilience. Media-friendly,
            practitioner-ready.
          </p>
          <p className="mt-4 text-foreground/70">
            Democracy Defense is a research line within the Jinesis AI Lab, advancing rigorous, public-interest
            evaluations of AI systems in democratic contexts.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/papers"
              className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90"
            >
              Explore Papers →
            </Link>
            <Link
              href="/press"
              className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/10 px-5 py-3 text-sm hover:bg-foreground/5"
            >
              Press Room
            </Link>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-black/10 dark:border-white/10 bg-background p-4 sm:p-6 shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold">Subscribe to our newsletter</h3>
            <SubscribeForm className="mt-3" />
          </div>
        </div>
      </section>

      {/* Partners & Funders (commented out old carousel)
      <section className="border-t border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-semibold tracking-tight">Our Partners & Funders</h2>
          <p className="mt-2 text-foreground/70 max-w-3xl">
            We are grateful to our partners and funders for supporting research that strengthens democratic resilience and accountability.
          </p>
          <div className="mt-6">
            <PartnersCarousel items={[]} />
          </div>
        </div>
      </section>
      */}

      {/* Partners + News side-by-side */}
      <section className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">News</h2>
              <ul className="mt-4 grid grid-cols-1 gap-3">
                <Reveal>
                  <li className="rounded-lg border border-black/10 p-4 hover-lift">
                    <img src="/social-harm.jpg" alt="SocialHarmBench figure" className="w-full h-32 object-cover rounded mb-2" />
                    New paper: SocialHarmBench preprint released - <a className="underline" href="/papers/socialharmbench-llm-vulnerabilities">read more</a>
                  </li>
                </Reveal>
                <Reveal delayMs={100}>
                  <li className="rounded-lg border border-black/10 p-4 hover-lift">
                    <img src="/ccmoderation.png" alt="Cross-Country Moderation figure" className="w-full h-32 object-cover rounded mb-2" />
                    Updated: Cross-Country Moderation analysis with expanded explanations - <a className="underline" href="/papers/cross-country-content-moderation-nlp">details</a>
                  </li>
                </Reveal>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Our Partners</h2>
              <div className="mt-4 rounded-lg border border-black/10 dark:border-white/10 bg-muted/40 p-6">
                <div className="text-xs uppercase tracking-wide text-foreground/60">
                  <span className="inline-flex items-center rounded-full bg-foreground/10 px-2 py-0.5">Academic Partner</span>
                </div>
                <div className="mt-4 flex justify-center md:justify-start">
                  <img
                    src="/University-of-Michigan-Logo.png"
                    alt="University of Michigan"
                    className="h-20 sm:h-24 md:h-28 w-auto object-contain"
                  />
                </div>
                <p className="mt-4 text-sm text-foreground/70">
                  Collaboration on responsible AI research and evaluation methods supporting democratic resilience.
                </p>
                <a
                  href="/press"
                  className="mt-4 inline-flex items-center gap-2 rounded-md border border-primary/30 text-primary px-3 py-2 text-sm hover:bg-primary/10"
                >
                  Contact us to become a partner
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
                    {(() => {
                      const slug = featured.slug;
                      const img = slug === "socialharmbench-llm-vulnerabilities"
                        ? "/social-harm.jpg"
                        : slug === "preserving-historical-truth-revisionism-llms"
                        ? "/historical_misinfo.jpg"
                        : slug === "democratic-or-authoritarian-bias-in-llms"
                        ? "/authoritarian.jpg"
                        : slug === "cross-country-content-moderation-nlp"
                        ? "/ccmoderation.png"
                        : slug === "llms-udhr-human-rights-evaluation"
                        ? "/hr_pic.png"
                        : undefined;
                      return img ? (
                        <img src={img} alt={featured.title} className="w-full h-32 object-cover rounded mb-3" />
                      ) : null;
                    })()}
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
                      Watch on YouTube →
                    </a>
                  </div>
                </Reveal>
                </div>
              </div>
          </div>
        </section>
      )}

            
      {/* Features and News consolidated above with Partners */}

      {/* Newsletter pop-up */}
      <NewsletterPop />
    </>
  );
}





