import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

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
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                format: 'mdx',
            }
        }
    });

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
        const project = await getProjectBySlug(slug);

        if (!project)
            continue;

        projects.push(project.metadata);
    }

    return projects;
}

