import type { ReactElement } from "react";

export default function ContactPage(): ReactElement {
    return (
        <div className="mx-auto max-w-3xl px-4 py-16">
            <header className="mb-10">
                <h1 className="text-3xl font-semibold tracking-tight text-text">
                    Contact
                </h1>
            </header>

            <section className="space-y-6 text-text/80 leading-relaxed text-base">
                <p>
                    I’m always excited to talk about data platforms, integrations, or
                    consulting work. If you have a project in mind—or just want to
                    compare notes on ingestion and observability—feel free to reach
                    out.
                </p>

                <div className="rounded-2xl border border-border bg-bg-muted p-6 space-y-4">
                    <div>
                        <p className="text-sm uppercase tracking-wide text-text/50">
                            Email
                        </p>
                        <a
                            href="mailto:hello@arumon.blog"
                            className="text-text hover:text-accent transition-colors"
                        >
                            hello@arumon.blog
                        </a>
                    </div>
                    <div>
                        <p className="text-sm uppercase tracking-wide text-text/50">
                            LinkedIn
                        </p>
                        <a
                            href="https://www.linkedin.com/cnomura"
                            target="_blank"
                            rel="noreferrer"
                            className="text-text hover:text-accent transition-colors"
                        >
                            Connect on LinkedIn
                        </a>
                    </div>
                    <div>
                        <p className="text-sm uppercase tracking-wide text-text/50">
                            Bluesky
                        </p>
                        <a
                            href="https://bsky.app/profile/arumon.blog"
                            target="_blank"
                            rel="noreferrer"
                            className="text-text hover:text-accent transition-colors"
                        >
                            Follow on Bluesky
                        </a>
                    </div>
                </div>

                <p>
                    I’m based in Lisbon (GMT), generally available during European
                    business hours, and can sync asynchronously if needed.
                </p>
            </section>
        </div>
    );
}
