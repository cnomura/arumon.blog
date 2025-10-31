import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import type { ReactElement } from "react";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { SocialShare } from "@/components/SocialShare";
import { GiscusComments } from "@/components/GiscusComments";

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

    const resolvedPost = post!;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const normalizedSiteUrl = siteUrl?.endsWith("/")
        ? siteUrl.slice(0, -1)
        : siteUrl;
    const postUrl = normalizedSiteUrl
        ? `${normalizedSiteUrl}/blog/${resolvedPost.slug}`
        : undefined;

    return (
        <div className="mx-auto max-w-3xl px-4 py-16">
            <div className="mb-6">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm text-text/60 transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                    <span aria-hidden>&larr;</span>
                    Back to all posts
                </Link>
            </div>
            <article className="prose-custom">
                <div className="mb-8 text-[12px] text-text/50">
                    {format(new Date(resolvedPost.date), "MMM dd, yyyy")}
                </div>
                <h1 className="text-3xl font-semibold tracking-tight text-text">
                    {resolvedPost.title}
                </h1>
                <p className="mt-4 text-text/70 text-base leading-relaxed">
                    {resolvedPost.summary}
                </p>

                <div className="my-8 h-px w-full bg-border/60" />

                {/* MDX content */}
                <div
                    className="space-y-6 text-text/90 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: resolvedPost.html }}
                />

                <div className="mt-12 space-y-4 rounded-xl border border-border bg-bg-muted p-4 text-sm text-text/60">
                    <p>
                        Found this helpful? Share it on your socials or pass it along via email.
                    </p>
                    <SocialShare title={resolvedPost.title} url={postUrl} />
                </div>

                <section className="mt-12 space-y-4">
                    <h2 className="text-lg font-semibold tracking-tight text-text">
                        Join the conversation
                    </h2>
                    <GiscusComments
                        identifier={resolvedPost.slug}
                        title={resolvedPost.title}
                    />
                </section>
            </article>
        </div>
    );
}
