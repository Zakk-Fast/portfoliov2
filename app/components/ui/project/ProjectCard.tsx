import { ExternalLink, Github } from "lucide-react";
import { ProjectType } from "@/app/types/Project";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { id, title, description, image, projectLabels, liveUrl, githubUrl } =
    project;
  console.log(project.image);
  return (
    <div className="relative w-full border border-solid border-gray-400/20 rounded-xl shadow-sm overflow-hidden group">
      <img src={image} alt="" className="w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white flex flex-col justify-end p-4 lg:p-8 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 h-full">
        <h3 className="text-lg lg:text-2xl font-bold pb-2">{title}</h3>
        <div className="flex flex-row gap-2 lg:gap-3 pb-3 lg:pb-4 flex-wrap">
          {projectLabels.map((label, index) => (
            <p
              key={index}
              className="border border-solid border-gray-400/20 bg-white/20 rounded-2xl px-2 text-xs lg:text-sm"
            >
              {label}
            </p>
          ))}
        </div>
        <p className="text-xs lg:text-sm pb-3 lg:pb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-row gap-4 lg:gap-6">
          <a
            className="cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href={liveUrl}
          >
            <div className="flex flex-row gap-2 items-center text-sm lg:text-base">
              <ExternalLink size={14} className="lg:w-4 lg:h-4" />
              Live Demo
            </div>
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href={githubUrl}
          >
            <div className="flex flex-row gap-2 items-center text-sm lg:text-base">
              <Github size={14} className="lg:w-4 lg:h-4" />
              Github
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
