"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const buttonClasses =
        "flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg-muted text-sm transition-colors hover:border-accent/60 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60";
    const placeholderIcon = "🌙";

    if (!mounted) {
        return (
            <button
                type="button"
                aria-pressed={false}
                disabled
                className={buttonClasses}
            >
                <span className="sr-only">Toggle theme</span>
                <span aria-hidden className="text-base leading-none opacity-40">
                    {placeholderIcon}
                </span>
            </button>
        );
    }

    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const isDark = currentTheme === "dark";
    const icon = isDark ? "☀️" : "🌙";

    return (
        <button
            type="button"
            aria-pressed={isDark}
            aria-label={`Activate ${isDark ? "light" : "dark"} mode`}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={buttonClasses}
        >
            <span aria-hidden className="text-base leading-none transition-transform duration-150">
                {icon}
            </span>
        </button>
    );
}
