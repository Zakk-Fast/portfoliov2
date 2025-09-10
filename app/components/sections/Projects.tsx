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
    <Container id="projects" className="pt-48">
      <SectionTitle title="projects" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Featured project - spans 2 columns */}
        <div className="lg:col-span-2 h-full">
          <ProjectCard project={featuredProject} />
        </div>

        {/* Right column with two projects stacked */}
        <div className="grid grid-rows-2 gap-4 h-full">
          {otherProjects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
