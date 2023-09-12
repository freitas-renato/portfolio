import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import Carousel from '@/components/carousel';
import CustomImage from '@/components/custom-image';
import rehypeExternalLinks from 'rehype-external-links';

const contentPath = path.join(process.cwd(), 'projects');

export function getAvailableProjects(): string[] {
    try {
        const files = fs.readdirSync(contentPath).filter(file => path.extname(file) === '.mdx');

        return files.map(file => file.replace(/\.mdx$/, ''));
    } catch (error) {
        console.error('Error reading directory:', error);
        return [];
    }
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
    const availableProjects = getAvailableProjects();

    if (!availableProjects.includes(slug))
        return undefined;
        
    // Read the file
    const rawMDX = fs.readFileSync(path.join(contentPath, `${slug}.mdx`), 'utf8');

    const { frontmatter, content } = await compileMDX<ProjectMetadata>({
        source: rawMDX,
        components: {
            Carousel,
            CustomImage,
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                format: 'mdx',
                rehypePlugins: [
                    [rehypeExternalLinks, {
                        rel: ['nofollow'],
                        target: '_blank',
                    }]
                ]
            }
        }
    });
    frontmatter.slug = slug;

    const project: Project = {
        metadata: frontmatter,
        content,
    };

    return project;
}

export async function getAllProjectsMetadata(): Promise<ProjectMetadata[]> {
    const availableProjects = getAvailableProjects();

    const projects: ProjectMetadata[] = [];
    
    for (const slug of availableProjects) {
        // Read the file
        const rawMDX = fs.readFileSync(path.join(contentPath, `${slug}.mdx`), 'utf8');

        const { frontmatter } = await compileMDX<ProjectMetadata>({
            source: rawMDX,
            options: {
                parseFrontmatter: true,
                mdxOptions: {
                    format: 'mdx',
                }
            }
        });
        frontmatter.slug = slug;

        projects.push(frontmatter);
    }

    return projects;
}

