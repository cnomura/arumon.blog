import type { ReactElement } from "react";

export default function ProjectsPage(): ReactElement {
    const projects = [
        {
            title: "Dynatrace Ingestion Connector",
            desc:
                "Modular ingestion for Dynatrace metrics/logs into Azure Data Lake Gen2. Supports snapshot and incremental modes, Teams alerting, run state persistence and lineage emission.",
            tags: ["Python", "Azure", "Observability", "Ingestion"],
            status: "Active"
        },
        {
            title: "TAP Data Lake DTS",
            desc:
                "Multi-source ingestion framework (DB2, Jira, Jenkins, etc.) writing to raw/stg/curated layers in ADLS Gen2, with scheduled snapshots, backfills, and environment-aware modes.",
            tags: ["Data Platform", "Airline Ops", "ADLS Gen2", "Governance"],
            status: "Internal"
        },
        {
            title: "OpenLineage Integration",
            desc:
                "Emits lineage events from ingestion runs so downstream analysts know where data originated, which job produced it, and what tables were touched.",
            tags: ["OpenLineage", "Marquez", "Lineage", "Metadata"],
            status: "In progress"
        }
    ];

    return (
        <div className="mx-auto max-w-5xl px-4 py-16">
            <header className="mb-12 max-w-2xl">
                <h1 className="text-3xl font-semibold tracking-tight text-text">
                    Projects
                </h1>
                <p className="mt-4 text-text/70 leading-relaxed text-base">
                    Selected work from data ingestion, observability, and platform
                    engineering.
                </p>
            </header>

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((p) => (
                    <div
                        key={p.title}
                        className="rounded-2xl border border-border bg-bg-muted p-6"
                    >
                        <div className="flex items-start justify-between">
                            <h2 className="text-lg font-medium text-text tracking-tight">
                                {p.title}
                            </h2>
                            <span className="rounded-lg border border-border/60 bg-bg px-2 py-1 text-[11px] text-text/60">
                                {p.status}
                            </span>
                        </div>
                        <p className="mt-3 text-sm text-text/70 leading-relaxed">
                            {p.desc}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-text/60">
                            {p.tags.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-lg border border-border/60 bg-bg px-2 py-1"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
