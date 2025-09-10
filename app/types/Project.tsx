export type ProjectLabel =
  | "React"
  | "Python"
  | "TypeScript"
  | "Node.js"
  | "PostgreSQL"
  | "FastAPI";

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  projectLabels: ProjectLabel[];
  liveUrl: string;
  githubUrl: string;
}
