import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type Post = {
    slug: string;
    title: string;
    date: string;
    summary: string;
    tags: string[];
    content: string;
    html: string;
};

const POSTS_DIR = path.join(process.cwd(), "content/blog");
const POST_EXTENSIONS = [".mdx", ".md"];

const isPostFile = (fileName: string) =>
    POST_EXTENSIONS.some(ext => fileName.endsWith(ext));

const loadPostFromFile = (filePath: string): Post => {
    const rawContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(rawContent);
    const slug = path.basename(filePath).replace(/\.[^/.]+$/, "");
    const html = marked.parse(content) as string;

    return {
        slug,
        title: (data.title as string) ?? slug,
        date: (data.date as string) ?? new Date().toISOString(),
        summary: (data.summary as string) ?? "",
        tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
        content,
        html
    };
};

export const getAllPosts = (): Post[] => {
    if (!fs.existsSync(POSTS_DIR)) {
        return [];
    }

    return fs
        .readdirSync(POSTS_DIR)
        .filter(isPostFile)
        .map(fileName => loadPostFromFile(path.join(POSTS_DIR, fileName)))
        .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
};

export const getPostBySlug = (slug: string): Post | undefined => {
    for (const ext of POST_EXTENSIONS) {
        const fullPath = path.join(POSTS_DIR, `${slug}${ext}`);
        if (fs.existsSync(fullPath)) {
            return loadPostFromFile(fullPath);
        }
    }

    return undefined;
};
