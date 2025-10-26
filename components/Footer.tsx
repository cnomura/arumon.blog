export function Footer() {
    return (
        <footer className="border-t border-border/60 bg-bg mt-16">
            <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-text/60">
                <p className="font-medium text-text/80">
                    Data engineer based in Lisbon, focused on ingestion, observability and reliability.
                </p>

                <div className="mt-4 flex flex-wrap gap-4 text-text/60">
                    <a
                        className="hover:text-text transition-colors"
                        href="https://github.com/cnomura"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        className="hover:text-text transition-colors"
                        href="https://www.linkedin.com/cnomura"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        className="hover:text-text transition-colors"
                        href="https://bsky.app/profile/arumon.blog"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Bluesky
                    </a>
                </div>

                <p className="mt-6 text-text/40">
                    © {new Date().getFullYear()} arumon.blog
                </p>
            </div>
        </footer>
    );
}