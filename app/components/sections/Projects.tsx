import { ProjectType } from "@/app/types/Project";
import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/project/ProjectCard";

interface ProjectProps {
  projects: ProjectType[];
}

const Projects: React.FC<ProjectProps> = ({ projects }) => {
  const [featuredProject, ...otherProjects] = projects;
  return (
    <Container id="projects" className="pt-32">
      <SectionTitle title="Projects" />
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <ProjectCard project={featuredProject} />
        </div>
        <div className="flex flex-col gap-4">
          {otherProjects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
