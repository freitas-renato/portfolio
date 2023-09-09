type ProjectMetadata = {
    slug: string;
    name: string;
    tools: string[];
    image: string;
    description: string;
};

type Project = {
    metadata: ProjectMetadata;
    content: ReactElement<any, string | JSXElementConstructor<any>>;
};