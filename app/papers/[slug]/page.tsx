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
  const isHistorical = slug === "preserving-historical-truth-revisionism-llms";
  const isAuthoritarian = slug === "democratic-or-authoritarian-bias-in-llms";
  const socialHarmSummary = `Large language models (LLMs) are increasingly used in sensitive sociopolitical contexts, yet existing safety benchmarks overlook evaluating risks like assisting surveillance, political manipulation, and generating disinformation. To counter this, we introduce SocialHarmBench � the first sociopolitical adversarial evaluation benchmark, with 585 prompts across 7 domains and 34 countries. Results show open-weight models are highly vulnerable, exhibiting 97-98% attack success rates in areas such as historical revisionism, propaganda, and political manipulation. Vulnerabilities are greatest in 21st-and pre-20th-century contexts and regions like Latin America, the USA, and the UK, revealing that current LLM safeguards fail to generalize in sociopolitical settings and may endanger democratic values and human rights.`;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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

      {paper.url ? (
        <div className="mt-6">
          <a
            href={paper.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            Read paper
          </a>
        </div>
      ) : (
        <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-red-500/40 text-red-600 px-3 py-1.5 text-xs">
          <span>Paper coming soon</span>
        </div>
      )}

      <div className="mt-8 space-y-4 leading-7">
        {isSocialHarm ? (
          <>
            <h2 className="text-xl font-medium">Summary</h2>
            <div className="mt-3">
              <img
                src="/social-harm.jpg"
                alt="SocialHarmBench illustrative figure"
                className="w-full h-auto object-contain border border-black/10 dark:border-white/10"
              />
            </div>
            <p className="mt-4 text-foreground/90 whitespace-pre-line">{socialHarmSummary}</p>
          </>
        ) : isHistorical ? (
          <>
            <h2 className="text-xl font-medium">Abstract</h2>
            <div className="mt-3">
              <img
                src="/historical_misinfo.jpg"
                alt="HistoricalMisinfo illustrative figure"
                className="w-full h-auto object-contain border border-black/10 dark:border-white/10"
              />
            </div>
            <p className="mt-4 text-foreground/90 whitespace-pre-line">{paper.summary}</p>
          </>
        ) : isAuthoritarian ? (
          <>
            <h2 className="text-xl font-medium">Abstract</h2>
            <div className="mt-3">
              <img
                src="/authoritarian.jpg"
                alt="Authoritarian bias paper illustrative figure"
                className="w-full h-auto object-contain border border-black/10 dark:border-white/10"
              />
            </div>
            <p className="mt-4 text-foreground/90 whitespace-pre-line">{paper.summary}</p>
          </>
        ) : (
          <>
            <p className="text-foreground/90 whitespace-pre-line">{paper.summary}</p>
            
          </>
        )}
      </div>
    </div>
  );
}
