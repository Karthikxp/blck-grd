interface ProjectCard {
  title: string;
  description: string;
  isHighlighted?: boolean;
}

interface PortfolioSectionProps {
  aboutTitle: string;
  projects: ProjectCard[];
}

export default function PortfolioSection({ aboutTitle, projects }: PortfolioSectionProps) {
  return (
    <section className="absolute bottom-0 left-0 right-0">
      {/* About Title */}
      <div className="absolute left-[53px] bottom-[257px]">
        <h3 className="text-white text-4xl font-normal font-['Gacor_Personal_Use']">
          {aboutTitle}
        </h3>
      </div>

      {/* Project Cards Grid */}
      <div className="absolute bottom-[81px] left-[56px] right-[53px] flex gap-[37px]">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project}
            isFirst={index === 0}
          />
        ))}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: ProjectCard;
  isFirst: boolean;
}

function ProjectCard({ project, isFirst }: ProjectCardProps) {
  const borderColor = isFirst ? 'border-white' : 'border-[#515151]';
  const fontWeight = isFirst ? 'font-light' : 'font-medium';

  return (
    <div className="w-[223px] flex flex-col justify-start items-center gap-[25px]">
      {/* Top Border Line */}
      <div className={`w-[221px] h-0 border-t ${borderColor}`} />
      
      {/* Project Title */}
      <div className={`self-stretch text-center text-white text-[11.21px] ${fontWeight} font-['Roboto_Mono']`}>
        {project.title}
      </div>
      
      {/* Project Description */}
      {project.description && (
        <div 
          className={`text-center text-white text-[5.98px] font-light font-['Roboto_Mono'] leading-relaxed ${
            isFirst ? 'self-stretch' : project.title === 'Shivas Eye Care' ? 'w-[119px]' : 'self-stretch'
          }`}
        >
          {project.description}
        </div>
      )}
    </div>
  );
}
