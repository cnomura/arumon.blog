import Link from "next/link";
import { compareDesc, format } from "date-fns";
import type { ReactElement } from "react";
import { getAllPosts } from "@/lib/posts";

export const runtime = "nodejs";

export default function BlogPage(): ReactElement {
    const posts = getAllPosts().sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );

    return (
        <div className="mx-auto max-w-3xl px-4 py-16">
            <header className="mb-12">
                <h1 className="text-3xl font-semibold tracking-tight text-text">
                    Writing
                </h1>
                <p className="mt-3 text-text/70 text-base leading-relaxed">
                    Notes on data platforms, observability and the messy parts no one
                    puts in slide decks.
                </p>
            </header>

            <div className="space-y-10">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block rounded-2xl border border-border bg-bg-muted p-6 transition-colors hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                        <article>
                            <h2 className="text-xl font-medium text-text tracking-tight">
                                {post.title}
                            </h2>
                            <p className="mt-3 text-sm text-text/70 leading-relaxed">
                                {post.summary}
                            </p>
                            <div className="mt-4 text-[11px] text-text/50">
                                {format(new Date(post.date), "MMM dd, yyyy")}
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
}
