export type SearchItem = {
  title: string;
  category: string;
  href: string;
};

export const searchItems: SearchItem[] = [
  {
    title: "Frontend Roadmap",
    category: "Roadmap",
    href: "/roadmaps/frontend",
  },
  {
    title: "Backend Roadmap",
    category: "Roadmap",
    href: "/roadmaps/backend",
  },
  {
    title: "Full Stack Roadmap",
    category: "Roadmap",
    href: "/roadmaps/fullstack",
  },
  {
    title: "HTML",
    category: "Topic",
    href: "/roadmaps/frontend/html",
  },
  {
    title: "CSS",
    category: "Topic",
    href: "/roadmaps/frontend/css",
  },
  {
    title: "JavaScript",
    category: "Topic",
    href: "/roadmaps/frontend/javascript",
  },
];