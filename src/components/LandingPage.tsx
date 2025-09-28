import Header from './Header';
import HeroSection from './HeroSection';
import PortfolioSection from './PortfolioSection';

interface LandingPageProps {
  className?: string;
}

export default function LandingPage({ className = '' }: LandingPageProps) {
  // Navigation data
  const leftNavItems = [
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' }
  ];

  const rightNavItems = [
    { label: 'Contact', href: '#contact' },
    { label: 'Team', href: '#team' }
  ];

  // Hero section data
  const heroData = {
    title: 'Blck Grid',
    subtitle: 'CURATED',
    motto: {
      label: 'Motto',
      description: 'From development to deployment<br/>with you at every step. Providing Software service<br/>to every enterprise and agency with curated approach for your objective'
    },
    tagline: 'One Studio for your Idea With all the expertise<br/>at all the stages'
  };

  // Portfolio data
  const portfolioData = {
    aboutTitle: 'about',
    projects: [
      {
        title: 'description and Approach',
        description: '',
        isHighlighted: true
      },
      {
        title: 'Shivas Eye Care',
        description: 'Appointment Booking Page for eye clinic with integrated whatsApp bot functionality'
      },
      {
        title: 'XYZXXXYYYZZ',
        description: 'Nulla enim laboris occaecat velit commodo Lorem nulla duis esse ipsum. Sit ut ullamco dolor adipisicing cupidatat aute est enim ullamco eu consequat amet officia Lorem. Ut est est elit minim qui culpa sint quis labore incididunt occaecat'
      },
      {
        title: 'XYZXXXYYYZZ',
        description: 'Nulla enim laboris occaecat velit commodo Lorem nulla duis esse ipsum. Sit ut ullamco dolor adipisicing cupidatat aute est enim ullamco eu consequat amet officia Lorem. Ut est est elit minim qui culpa sint quis labore incididunt occaecat'
      },
      {
        title: 'XYZXXXYYYZZ',
        description: 'Nulla enim laboris occaecat velit commodo Lorem nulla duis esse ipsum. Sit ut ullamco dolor adipisicing cupidatat aute est enim ullamco eu consequat amet officia Lorem. Ut est est elit minim qui culpa sint quis labore incididunt occaecat'
      }
    ]
  };

  return (
    <section 
      className={`w-full h-full relative overflow-hidden ${className}`}
    >
      <Header 
        leftNavItems={leftNavItems}
        rightNavItems={rightNavItems}
      />
      
      <HeroSection 
        title={heroData.title}
        subtitle={heroData.subtitle}
        motto={heroData.motto}
        tagline={heroData.tagline}
      />
      
      <PortfolioSection 
        aboutTitle={portfolioData.aboutTitle}
        projects={portfolioData.projects}
      />
    </section>
  );
}
