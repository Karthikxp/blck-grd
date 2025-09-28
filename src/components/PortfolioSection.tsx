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
      <div className="absolute left-[34px] bottom-[298px]">
        <h3 className="text-white text-4xl font-normal font-['Gacor_Personal_Use']">
          {aboutTitle}
        </h3>
      </div>

      {/* Project Cards Grid - positioned individually like in the guide */}
      <div className="absolute bottom-[182px]">
        {/* First Card - description and Approach */}
        <div className="w-[223px] h-[63px] absolute left-[37px] inline-flex flex-col justify-center items-center gap-[25px]">
          <div className="w-[221px] h-0 outline outline-1 outline-offset-[-0.50px] outline-white"></div>
          <div className="self-stretch text-center justify-start text-white text-xs font-light font-['Roboto_Mono']">description and Approach</div>
        </div>
        
        {/* Second Card - Shivas Eye Care */}
        <div className="w-[223px] h-28 absolute left-[313px] inline-flex flex-col justify-center items-center gap-[25px]">
          <div className="w-[221px] h-0 outline outline-1 outline-offset-[-0.50px] outline-[#515151]"></div>
          <div className="self-stretch text-center justify-start text-white text-xs font-medium font-['Roboto_Mono']">Shivas Eye Care</div>
          <div className="w-[119px] text-center justify-start text-white text-[5.98px] font-light font-['Roboto_Mono']">Appointment Booking Page for eye clinic with integrated whatsApp bot functionality </div>
        </div>
        
        {/* Third Card */}
        <div className="w-[223px] h-[120px] absolute left-[589px] inline-flex flex-col justify-center items-center gap-[25px]">
          <div className="w-[221px] h-0 outline outline-1 outline-offset-[-0.50px] outline-[#515151]"></div>
          <div className="self-stretch text-center justify-start text-white text-xs font-medium font-['Roboto_Mono']">XYZXXXYYYZZ</div>
          <div className="self-stretch text-center justify-start text-white text-[5.98px] font-light font-['Roboto_Mono']">Nulla enim laboris occaecat velit commodo Lorem nulla duis esse ipsum. Sit ut ullamco dolor adipisicing cupidatat aute est enim ullamco eu consequat amet officia Lorem. Ut est est elit minim qui culpa sint quis labore incididunt occaecat</div>
        </div>
        
        {/* Fourth Card */}
        <div className="w-[223px] h-[120px] absolute left-[865px] inline-flex flex-col justify-center items-center gap-[25px]">
          <div className="w-[221px] h-0 outline outline-1 outline-offset-[-0.50px] outline-[#515151]"></div>
          <div className="self-stretch text-center justify-start text-white text-xs font-medium font-['Roboto_Mono']">XYZXXXYYYZZ</div>
          <div className="self-stretch text-center justify-start text-white text-[5.98px] font-light font-['Roboto_Mono']">Nulla enim laboris occaecat velit commodo Lorem nulla duis esse ipsum. Sit ut ullamco dolor adipisicing cupidatat aute est enim ullamco eu consequat amet officia Lorem. Ut est est elit minim qui culpa sint quis labore incididunt occaecat</div>
        </div>
        
        {/* Fifth Card */}
        <div className="w-[223px] h-[120px] absolute left-[1141px] inline-flex flex-col justify-center items-center gap-[25px]">
          <div className="w-[221px] h-0 outline outline-1 outline-offset-[-0.50px] outline-[#515151]"></div>
          <div className="self-stretch text-center justify-start text-white text-xs font-medium font-['Roboto_Mono']">XYZXXXYYYZZ</div>
          <div className="self-stretch text-center justify-start text-white text-[5.98px] font-light font-['Roboto_Mono']">Nulla enim laboris occaecat velit commodo Lorem nulla duis esse ipsum. Sit ut ullamco dolor adipisicing cupidatat aute est enim ullamco eu consequat amet officia Lorem. Ut est est elit minim qui culpa sint quis labore incididunt occaecat</div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-[280px]">
        <div className="w-[30px] h-[30px] absolute left-[1143px] rounded-full border border-white" />
        <div className="w-[30px] h-[30px] absolute left-[1334px] bg-white rounded-full" />
        <div className="absolute left-[1168px] top-[27px] origin-top-left rotate-180 text-right justify-start text-white text-xl font-normal font-['Roboto_Mono']">→</div>
        <div className="absolute left-[1339px] top-[1px] text-right justify-start text-black text-xl font-normal font-['Roboto_Mono']">→</div>
      </div>
    </section>
  );
}

