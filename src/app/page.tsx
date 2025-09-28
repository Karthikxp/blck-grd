import LandingPage from '@/components/LandingPage';

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: -2 }}
      >
        <source src="/foot.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div 
        className="absolute inset-0 bg-black"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: -1 
        }}
      />

      {/* Landing Page Content - Overlaid on video */}
      <LandingPage />
    </div>
  );
}
