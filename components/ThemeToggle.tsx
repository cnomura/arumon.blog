"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Hydration-only state, so we explicitly allow this setState.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                type="button"
                aria-pressed="false"
                disabled
                className="rounded-xl border border-border bg-bg-muted px-3 py-2 text-xs text-text/80 transition-colors"
            >
                …
            </button>
        );
    }

    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const isDark = currentTheme === "dark";

    return (
        <button
            type="button"
            aria-pressed={isDark}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="rounded-xl border border-border bg-bg-muted px-3 py-2 text-xs text-text/80 transition-colors hover:border-text/40 hover:text-text"
        >
            {isDark ? "☀ Light" : "🌙 Dark"}
        </button>
    );
}
