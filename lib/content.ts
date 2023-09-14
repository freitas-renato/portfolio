import { compileMDX } from "next-mdx-remote/rsc";
import Carousel from "@/components/carousel";
import CustomImage from "@/components/custom-image";
import rehypeExternalLinks from "rehype-external-links";

export async function getAvailableProjects(): Promise<string[]> {
    if (!process.env.CONTENT_API_URL) {
        throw new Error("CONTENT_API_URL is not set");
    }

    const api_url = new URL(process.env.CONTENT_API_URL + "/projects" || "");

    const res = await fetch(api_url, {
        headers: {
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            Authorization: "Bearer " + process.env.CONTENT_API_TOKEN,
        },
        next: {
            revalidate: 60,
        }
    });

    if (!res.ok) {
        throw new Error(`Error fetching projects: ${res.statusText}`);
    }

    const data = await res.json();

    return data
        .filter((item: any) => item.type === "file")
        .map((project: any) => project.name.replace(/\.mdx$/, ""));
}

export async function getProjectBySlug(
    slug: string,
): Promise<Project | undefined> {
    const availableProjects = await getAvailableProjects();

    if (!availableProjects.includes(slug)) return undefined;

    if (!process.env.CONTENT_RAW_URL) {
        throw new Error("CONTENT_API_URL is not set");
    }

    const api_url = new URL(
        process.env.CONTENT_RAW_URL + "/projects/" + slug + ".mdx" || "",
    );

    const res = await fetch(api_url, {
        headers: {
            "X-GitHub-Api-Version": "2022-11-28",
            Authorization: "Bearer " + process.env.CONTENT_API_TOKEN,
        },
    });

    if (!res.ok) {
        throw new Error(
            `Error fetching project ${slug} metadata: ${res.statusText}`,
        );
    }

    const rawMDX = await res.text();

    const { frontmatter, content } = await compileMDX<ProjectMetadata>({
        source: rawMDX,
        components: {
            Carousel,
            CustomImage,
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                format: "mdx",
                rehypePlugins: [
                    [
                        rehypeExternalLinks,
                        {
                            rel: ["nofollow"],
                            target: "_blank",
                        },
                    ],
                ],
            },
        },
    });
    frontmatter.slug = slug;

    const project: Project = {
        metadata: frontmatter,
        content,
    };

    return project;
}

export async function getProjectMetadataBySlug(
    slug: string,
): Promise<ProjectMetadata | undefined> {
    if (!process.env.CONTENT_RAW_URL) {
        throw new Error("CONTENT_API_URL is not set");
    }

    const api_url = new URL(
        process.env.CONTENT_RAW_URL + "/projects/" + slug + ".mdx" || "",
    );

    const res = await fetch(api_url, {
        headers: {
            "X-GitHub-Api-Version": "2022-11-28",
            Authorization: "Bearer " + process.env.CONTENT_API_TOKEN,
        },
    });

    if (!res.ok) {
        throw new Error(
            `Error fetching project ${slug} metadata: ${res.statusText}`,
        );
    }

    const rawMDX = await res.text();

    const { frontmatter } = await compileMDX<ProjectMetadata>({
        source: rawMDX,
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                format: "mdx",
            },
        },
    });

    frontmatter.slug = slug;

    return frontmatter;
}

export async function getAllProjectsMetadata(): Promise<ProjectMetadata[]> {
    const availableProjects = await getAvailableProjects();

    const projects: ProjectMetadata[] = [];

    for (const slug of availableProjects) {
        const frontmatter = await getProjectMetadataBySlug(slug);
        if (frontmatter) {
            projects.push(frontmatter);
        }
    }

    return projects;
}

export async function getRemoteImage(path: string): Promise<string> {
    if (!process.env.CONTENT_API_URL) {
        throw new Error("CONTENT_API_URL is not set");
    }

    const api_url = new URL(
        process.env.CONTENT_API_URL + "/projects" + path || "",
    );

    const res = await fetch(api_url, {
        headers: {
            "X-GitHub-Api-Version": "2022-11-28",
            Authorization: "Bearer " + process.env.CONTENT_API_TOKEN,
        },
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error(`Error fetching image ${path}: ${res.statusText}`);
    }

    const data = await res.json();

    return data.download_url;
}
