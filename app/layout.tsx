import "./globals.css";
import type { ReactElement, ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
    title: "arumon.blog",
    description:
        "Building data platforms that actually ship. Data engineering, observability and reliable ingestion."
};

export default function RootLayout({
    children
}: {
    children: ReactNode;
}): ReactElement {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-bg text-text">
                <ThemeProvider>
                    <div className="flex min-h-screen flex-col">
                        <Navbar />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
