import type { ReactElement } from "react";

export default function AboutPage(): ReactElement {
    return (
        <div className="mx-auto max-w-3xl px-4 py-16">
            <header className="mb-10">
                <h1 className="text-3xl font-semibold tracking-tight text-text">
                    About
                </h1>
            </header>

            <section className="space-y-6 text-text/80 leading-relaxed text-base">
                <p>
                    Hi, I’m Cássio. I design and build data platforms for real-world
                    operations — not slide decks. I care about reliability, clear
                    lineage, and getting data where it needs to be, fast.
                </p>

                <p>
                    I work as a Data Engineer / Data Platform Engineer in Lisbon,
                    focused on ingestion pipelines, observability, data governance and
                    cost-aware storage strategy (raw / stg / curated).
                </p>

                <p>
                    I’ve built modular connectors to ingest from DB2, Dynatrace,
                    Jenkins, Jira and more, pushing clean Parquet into Azure Data Lake
                    Gen2, with Teams alerting and OpenLineage events so downstream
                    analytics can trust what they’re looking at.
                </p>

                <p>
                    Outside work, I’m a dad, I overthink baby strollers, and I draw
                    Studio Ghibli–inspired birthday invitations.
                </p>

                <div className="rounded-xl border border-border bg-bg-muted p-4 text-sm text-text/60">
                    Currently focused on:
                    <ul className="mt-2 list-disc pl-5 text-text/70">
                        <li>Hardening ingestion connectors</li>
                        <li>Gateway reliability / alerting</li>
                        <li>Category margin strategy (Coca-Cola case)</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
