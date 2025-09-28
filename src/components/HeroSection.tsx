interface HeroSectionProps {
  title: string;
  subtitle: string;
  motto: {
    label: string;
    description: string;
  };
  tagline: string;
}

export default function HeroSection({ title, subtitle, motto, tagline }: HeroSectionProps) {
  return (
    <section className="relative h-full">
      {/* Main Brand Title */}
      <div className="absolute left-[53px] top-[123px]">
        <h1 className="text-white text-4xl font-normal font-['Gacor_Personal_Use']">
          {title}
        </h1>
      </div>

      {/* Subtitle */}
      <div className="absolute right-[53px] top-[123px]">
        <h2 className="text-white text-4xl font-normal font-['Gacor_Personal_Use']">
          {subtitle}
        </h2>
      </div>

      {/* Motto Section */}
      <div className="absolute left-[53px] top-[377px]">
        <div className="flex items-start gap-4">
          <span className="text-white text-[8.73px] font-normal font-['Anderson_Grotesk'] text-right mt-2">
            {motto.label}
          </span>
          <div className="w-[229px] text-white text-[11.21px] font-light font-['Roboto_Mono'] leading-relaxed">
            {motto.description.split('<br/>').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="absolute right-[53px] top-[245px]">
        <div className="text-white text-[11.21px] font-normal font-['Roboto_Mono'] text-right leading-relaxed">
          {tagline.split('<br/>').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-[603px] top-[87px] w-[16.62px] h-[14.55px] bg-white border border-white" />
    </section>
  );
}
