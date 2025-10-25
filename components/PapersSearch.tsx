"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Paper } from "@/lib/papers";

type Props = {
  papers: Paper[];
};

export default function PapersSearch({ papers }: Props) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showTags, setShowTags] = useState(false);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    for (const p of papers) for (const t of p.tags ?? []) set.add(t);
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [papers]);

  const toggleTag = (tag: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const clearFilters = () => {
    setQuery("");
    setSelected(new Set());
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const needTags = Array.from(selected);
    return papers.filter((p) => {
      if (needTags.length) {
        const pt = new Set(p.tags ?? []);
        for (const t of needTags) if (!pt.has(t)) return false;
      }
      if (!q) return true;
      const hay = [p.title, p.summary, ...(p.authors ?? []), ...(p.tags ?? [])]
        .join(" \n ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [papers, query, selected]);

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="relative w-full sm:flex-1 sm:min-w-0" htmlFor="paper-search">
          <input
            id="paper-search"
            type="text"
            placeholder="Search by title, author, or keywords"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-background px-4 py-3 text-base outline-none focus:ring-2 focus:ring-foreground/30"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground/90 text-base leading-none"
              aria-label="Clear search"
              title="Clear search"
            >
              x
            </button>
          )}
        </label>
        <div className="flex items-center gap-2 sm:self-auto sm:flex-shrink-0">
          {allTags.length > 0 && (
            <button
              type="button"
              onClick={() => setShowTags((v) => !v)}
              aria-expanded={showTags}
              className="text-xs sm:text-sm px-3 py-2 rounded-md border border-black/10 dark:border-white/10 hover:bg-foreground/5"
            >
              Keywords{selected.size ? ` (${selected.size})` : ""}
            </button>
          )}
          {(selected.size > 0 || query) && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs sm:text-sm px-3 py-2 rounded-md border border-black/10 dark:border-white/10 text-foreground/80 hover:bg-foreground/5"
            >
              Clear
            </button>
          )}
          <div className="text-xs sm:text-sm text-foreground/60 ml-auto sm:ml-0">
            {filtered.length} result{filtered.length === 1 ? "" : "s"}
          </div>
        </div>
      </div>

      {allTags.length > 0 && showTags && (
        <div className="mt-4 rounded-lg border border-black/10 dark:border-white/10 p-3">
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => {
              const active = selected.has(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={
                    "text-xs px-2 py-1 rounded-full border transition-colors " +
                    (active
                      ? "bg-primary text-primary-foreground border-transparent"
                      : "bg-foreground/5 text-foreground/80 border-black/10 dark:border-white/10 hover:bg-foreground/10")
                  }
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-6 rounded-xl bg-muted/60 p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length === 0 ? (
            <div className="col-span-full text-sm text-foreground/70">
              No papers match your search.
            </div>
          ) : (
            filtered.map((paper) => (
              <article
                key={paper.slug}
                className="group rounded-lg border border-black/10 dark:border-white/10 p-5 hover:shadow-sm transition-shadow bg-background hover-lift"
              >
                {paper.date && (
                  <div className="text-xs uppercase tracking-wide text-foreground/60">
                    {new Date(paper.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </div>
                )}
                <h2 className="mt-2 text-xl font-medium group-hover:underline underline-offset-4">
                  <Link href={`/papers/${paper.slug}`}>{paper.title}</Link>
                </h2>
                <p className="mt-2 text-sm text-foreground/70 line-clamp-3">
                  {paper.summary}
                </p>
                <p className="mt-3 text-sm text-foreground/60">
                  {paper.authors.join(", ")}
                </p>
                {paper.url && (
                  <div className="mt-3">
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex text-xs items-center gap-1 rounded border border-primary/30 text-primary px-2 py-1 hover:bg-primary/10"
                    >
                      Read paper <span aria-hidden>↗</span>
                    </a>
                  </div>
                )}
                {paper.tags && (
                  <div className="mt-3 flex flex-wrap gap-2">
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
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
