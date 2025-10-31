"use client";

import { useEffect, useState } from "react";

type SocialShareProps = {
    title: string;
    url?: string;
};

type ShareTarget = {
    name: string;
    code: string;
    href: string;
};

export function SocialShare({ title, url }: SocialShareProps) {
    const [shareUrl, setShareUrl] = useState(url);

    useEffect(() => {
        if (!shareUrl) {
            setShareUrl(window.location.href);
        }
    }, [shareUrl]);

    if (!shareUrl) {
        return null;
    }

    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);

    const targets: ShareTarget[] = [
        {
            name: "LinkedIn",
            code: "in",
            href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`
        },
        {
            name: "X",
            code: "x",
            href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
        },
        {
            name: "Bluesky",
            code: "sky",
            href: `https://bsky.app/intent/compose?text=${encodedTitle}%20${encodedUrl}`
        },
        {
            name: "Email",
            code: "@",
            href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`
        }
    ];

    const badgeClass =
        "flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg/80 text-[11px] font-semibold uppercase tracking-wide text-text/70 transition-colors hover:border-accent/60 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70";

    return (
        <div className="flex flex-wrap items-center gap-3">
            {targets.map(target => (
                <a
                    key={target.name}
                    href={target.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share on ${target.name}`}
                    className="group"
                >
                    <span className="sr-only">{`Share on ${target.name}`}</span>
                    <span className={badgeClass}>
                        <span className="transition-transform group-hover:scale-105">
                            {target.code}
                        </span>
                    </span>
                </a>
            ))}
        </div>
    );
}
