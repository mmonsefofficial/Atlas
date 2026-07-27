export interface Resource {
    id: string;
    title: string;
    url: string;
    recommended?: boolean;
}

export interface Video {
    id: string;
    title: string;
    duration: string;
    url: string;
}

export interface Practice {
    id: string;
    title: string;
    description: string;
    url: string;
}

export interface Project {
    title: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export interface Tool {
    title: string;
    url: string;
}

export interface RoadmapTopic {
    id: string;
    logo: string;
    title: string;
    description: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";

    duration: string;
    learningPath: string[];
    documentation: Resource[];
    videos: Video[];
    practice: Practice[];
    projects: Project[];
    tools: Tool[];
}