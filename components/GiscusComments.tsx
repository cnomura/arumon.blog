"use client";

import { useMemo } from "react";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

type GiscusCommentsProps = {
    identifier: string;
    title: string;
};

const repo = process.env.NEXT_PUBLIC_GISCUS_REPO;
const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID;
const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY;
const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID;

export function GiscusComments({ identifier, title }: GiscusCommentsProps) {
    const { resolvedTheme } = useTheme();

    const theme = useMemo(() => {
        switch (resolvedTheme) {
            case "dark":
                return "transparent_dark";
            case "light":
            default:
                return "light";
        }
    }, [resolvedTheme]);

    const missingConfig = !repo || !repoId || !category || !categoryId;

    if (missingConfig) {
        return (
            <div className="rounded-xl border border-border bg-bg-muted/70 p-4 text-sm text-text/60">
                Comments are disabled until Giscus environment variables are configured.
            </div>
        );
    }

    return (
        <Giscus
            repo={repo}
            repoId={repoId}
            category={category}
            categoryId={categoryId}
            mapping="specific"
            term={identifier}
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            lang="en"
            loading="lazy"
            theme={theme}
            strict="0"
            description={title}
        />
    );
}
