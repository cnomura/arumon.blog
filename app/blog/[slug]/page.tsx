import { Metadata } from "next";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import type { ReactElement } from "react";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export const runtime = "nodejs";

export function generateStaticParams() {
    return getAllPosts().map(post => ({ slug: post.slug }));
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) {
        return {};
    }
    return {
        title: post.title,
        description: post.summary
    };
}

export default async function BlogPostPage({
    params
}: {
    params: Promise<{ slug: string }>;
}): Promise<ReactElement> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-3xl px-4 py-16">
            <article className="prose-custom">
                <div className="mb-8 text-[12px] text-text/50">
                    {format(new Date(post.date), "MMM dd, yyyy")}
                </div>
                <h1 className="text-3xl font-semibold tracking-tight text-text">
                    {post.title}
                </h1>
                <p className="mt-4 text-text/70 text-base leading-relaxed">
                    {post.summary}
                </p>

                <div className="my-8 h-px w-full bg-border/60" />

                {/* MDX content */}
                <div
                    className="space-y-6 text-text/90 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />

                <div className="mt-12 rounded-xl border border-border bg-bg-muted p-4 text-sm text-text/60">
                    Was this useful? Reach me on LinkedIn or Bluesky.
                </div>
            </article>
        </div>
    );
}
