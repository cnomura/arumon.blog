import Link from "next/link";
import { compareDesc, format } from "date-fns";
import type { ReactElement } from "react";
import { getAllPosts, Post } from "@/lib/posts";

export const runtime = "nodejs";

export default function HomePage(): ReactElement {
    const latestPosts = getAllPosts()
        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
        .slice(0, 3);

    return (
        <div className="mx-auto max-w-5xl px-4 py-16">
            {/* Hero */}
            <section className="mb-16">
                <div className="inline-block rounded-2xl border border-border bg-bg-muted px-3 py-1 text-[11px] text-text/60">
                    Currently shipping data platforms
                </div>

                <h1 className="mt-6 text-4xl font-semibold text-text tracking-tight md:text-5xl">
                    Building data platforms that actually ship.
                </h1>

                <p className="mt-6 max-w-2xl text-text/70 text-base leading-relaxed">
                    I’m Cássio, a data engineer working on ingestion pipelines,
                    observability and reliability at scale. I turn chaotic systems into
                    clean data and business impact.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                        href="/projects"
                        className="rounded-xl border border-border bg-bg-muted px-4 py-2 text-sm text-text/80 hover:text-text hover:border-text/40 transition-colors"
                    >
                        View Projects
                    </Link>
                    <Link
                        href="/blog"
                        className="rounded-xl border border-border bg-bg-muted px-4 py-2 text-sm text-text/80 hover:text-text hover:border-text/40 transition-colors"
                    >
                        Read the Blog
                    </Link>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="mb-16">
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-text tracking-tight">
                        Featured projects
                    </h2>
                    <p className="text-sm text-text/60">
                        Practical work in ingestion, lineage, and observability.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <ProjectCard
                        title="Dynatrace Ingestion Connector"
                        description="Snapshots and incremental pulls from Dynatrace metrics/logs into Azure Data Lake Gen2. Includes Teams alerting, per-run state, and lineage emission."
                        tags={["Python", "Azure", "Observability"]}
                    />
                    <ProjectCard
                        title="OpenLineage Integration"
                        description="Lightweight lineage events emitted from ingestion runs, so downstream consumers know where data originated and how it moved."
                        tags={["OpenLineage", "Governance", "Marquez"]}
                    />
                </div>
            </section>

            {/* Latest Posts */}
            <section>
                <div className="mb-6 flex items-baseline justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-text tracking-tight">
                            Latest posts
                        </h2>
                        <p className="text-sm text-text/60">
                            Thoughts on data platforms, reliability and real-world trade-offs.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="text-sm text-accent hover:text-accent-hover transition-colors"
                    >
                        View all →
                    </Link>
                </div>

                <div className="space-y-6">
                    {latestPosts.map((post) => (
                        <PostRow key={post.slug} post={post} />
                    ))}
                </div>
            </section>
        </div>
    );
}

function ProjectCard({
    title,
    description,
    tags
}: {
    title: string;
    description: string;
    tags: string[];
}): ReactElement {
    return (
        <div className="rounded-2xl border border-border bg-bg-muted p-6">
            <h3 className="text-lg font-medium text-text tracking-tight">
                {title}
            </h3>
            <p className="mt-3 text-sm text-text/70 leading-relaxed">
                {description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-text/60">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-lg border border-border/60 bg-bg px-2 py-1"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

function PostRow({ post }: { post: Post }): ReactElement {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="block rounded-2xl border border-border bg-bg-muted p-6 hover:border-accent/60 transition-colors"
        >
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium text-text tracking-tight">
                    {post.title}
                </h3>
                <p className="text-sm text-text/70 leading-relaxed">
                    {post.summary}
                </p>
                <div className="text-[11px] text-text/50">
                    {format(new Date(post.date), "MMM dd, yyyy")}
                </div>
            </div>
        </Link>
    );
}
