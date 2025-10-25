import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPaperSlugs, getPaperBySlug } from "@/lib/papers";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPaperSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const paper = getPaperBySlug(slug);
  if (!paper) return { title: "Paper not found | Democracy Defense" };
  return { title: `${paper.title} | Democracy Defense` };
}

export default async function PaperDetail(props: PageProps) {
  const { slug } = await props.params;
  const paper = getPaperBySlug(slug);
  if (!paper) notFound();

  const isSocialHarm = slug === "socialharmbench-llm-vulnerabilities";
  const socialHarmSummary =
    "Large language models (LLMs) are increasingly used in sensitive sociopolitical contexts, yet existing safety benchmarks overlook evaluating risks like assisting surveillance, political manipulation, and generating disinformation. To counter this, we introduce SocialHarmBench – the first sociopolitical adversarial evaluation benchmark, with 585 prompts across 7 domains and 34 countries. Results show open-weight models are highly vulnerable, exhibiting 97-98% attack success rates in areas such as historical revisionism, propaganda, and political manipulation. Vulnerabilities are greatest in 21st-and pre-20th-century contexts and regions like Latin America, the USA, and the UK, revealing that current LLM safeguards fail to generalize in sociopolitical settings and may endanger democratic values and human rights.";

  function firstSentences(text: string, count: number): string {
    const parts = text
      .replace(/\n+/g, " ")
      .split(/(?<=\.)\s+/)
      .filter(Boolean);
    return parts.slice(0, count).join(" ");
  }

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
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {paper.date && (
            <div className="text-xs uppercase tracking-wide text-foreground/60">
              {new Date(paper.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "2-digit",
              })}
            </div>
          )}
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">{paper.title}</h1>
          <p className="mt-2 text-foreground/70">{paper.authors.join(", ")}</p>

          {paper.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {paper.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {paper.url && (
            <div className="mb-6">
              <a
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90"
              >
                Read paper
              </a>
            </div>
          )}

          <div className="space-y-4 leading-7">
            {isSocialHarm ? (
              <>
                <p className="text-foreground/90">
                  {firstSentences(paper.summary, 3)}...{" "}
                  {paper.url && (
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 font-semibold"
                    >
                      continue reading
                    </a>
                  )}
                </p>
                <h2 className="mt-6 text-xl font-medium">Summary</h2>
                <div className="mt-3">
                  <img
                    src="/social-harm.jpg"
                    alt="SocialHarmBench illustrative figure"
                    className="w-full max-h-[420px] object-cover rounded-lg border border-black/10 dark:border-white/10"
                  />
                </div>
                <p className="mt-4 text-foreground/90 whitespace-pre-line">{socialHarmSummary}</p>
              </>
            ) : (
              <>
                <p className="text-foreground/90 whitespace-pre-line">{paper.summary}</p>
                <p className="text-foreground/70">
                  Full paper content coming soon. This page will host the abstract,
                  key findings, figures, and links to PDF/data.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
