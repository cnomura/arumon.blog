"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";

export function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" }
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
                <Link
                    href="/"
                    className="font-semibold text-text hover:text-accent transition-colors"
                >
                    arumon.blog
                </Link>

                {/* desktop nav */}
                <nav className="hidden items-center gap-6 text-sm text-text/80 md:flex">
                    {links.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-text transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>

                {/* mobile menu button */}
                <button
                    className="md:hidden rounded-lg border border-border bg-bg-muted px-3 py-2 text-text/80 text-sm"
                    onClick={() => setOpen(!open)}
                >
                    Menu
                </button>
            </div>

            {open && (
                <div className="border-t border-border/60 bg-bg-muted md:hidden">
                    <nav className="flex flex-col px-4 py-3 text-text/90">
                        {links.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="rounded-lg px-2 py-2 hover:bg-border/20"
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="px-2 py-2">
                            <ThemeToggle />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
