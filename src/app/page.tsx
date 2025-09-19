import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden">
      <div className="relative w-full h-screen bg-black overflow-hidden" style={{aspectRatio: '1280/832'}}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-white h-full">
        {/* Top Navigation */}
        <nav className="absolute top-[3.8vh] left-[1.56vw] right-[1.56vw] flex justify-between items-center">
          <div className="flex items-center space-x-[5.86vw]">
            <span className="font-gacor text-[0.486vw] leading-[1.883em]">Services</span>
            <span className="font-gacor text-[0.486vw] leading-[1.883em]">Pricing</span>
          </div>
          <div className="flex items-center space-x-[5.55vw]">
            <span className="font-gacor text-[0.486vw] leading-[1.883em]">Contact</span>
            <span className="font-gacor text-[0.486vw] leading-[1.883em]">Team</span>
          </div>
        </nav>

        {/* Logo in center top */}
        <div className="absolute top-[2.52vh] left-1/2 transform -translate-x-1/2">
          <div className="flex items-center justify-center w-[4vw] h-[4.93vh]">
            {/* Logo with 6 circles */}
            <div className="relative">
              <div className="absolute w-[2vw] h-[3.08vh] border border-[#0D1016] rounded-full top-0 left-[1vw]" />
              <div className="absolute w-[2vw] h-[3.08vh] border border-[#0D1016] rounded-full top-[0.89vh] left-0" />
              <div className="absolute w-[2vw] h-[3.08vh] border border-[#0D1016] rounded-full top-[0.89vh] left-[1vw]" />
              <div className="absolute w-[2vw] h-[3.08vh] border border-[#0D1016] rounded-full top-[0.89vh] left-[2vw]" />
              <div className="absolute w-[2vw] h-[3.08vh] border border-[#0D1016] rounded-full top-[1.85vh] left-[1vw]" />
            </div>
          </div>
        </div>

        {/* Main Brand Text */}
        <div className="absolute top-[11.66vh] left-[1.56vw]">
          <h1 className="font-gacor text-[2.85vw] leading-[1.883em]">Blck Grid</h1>
        </div>

        {/* Curated Text */}
        <div className="absolute top-[11.66vh] right-[3.59vw]">
          <h2 className="font-gacor text-[2.85vw] leading-[1.883em]">CURATED</h2>
        </div>

        {/* Main Heading */}
        <div className="absolute top-[26.32vh] right-[1.33vw] text-right">
          <h3 className="font-roboto-mono font-normal text-[0.875vw] leading-[1.319em] max-w-[24.77vw]">
            One Studio for your Idea With all the expertise<br />at all the stages
          </h3>
        </div>

        {/* Motto */}
        <div className="absolute top-[45.79vh] left-[1.56vw]">
          <p className="font-anderson text-[0.681vw] leading-[0.986em] text-right">Motto</p>
        </div>

        {/* Description */}
        <div className="absolute top-[44.47vh] left-[11.09vw]">
          <p className="font-roboto-mono font-light text-[0.875vw] leading-[1.319em] max-w-[17.89vw]">
            From development to deployment<br /><br />
            with you at every step. Providing Software service<br /><br />
            to every enterprise and agency with curated approach for your objective
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-[69.71vh] left-[76.64vw]">
          <div className="w-[2.34vw] h-[3.61vh] bg-[#D9D9D9] rounded-full flex items-center justify-center">
            <span className="font-roboto-mono text-[1.53vw] leading-[1.319em] text-black">→</span>
          </div>
        </div>
        <div className="absolute top-[69.71vh] left-[91.56vw]">
          <div className="w-[2.34vw] h-[3.61vh] bg-white rounded-full flex items-center justify-center">
            <span className="font-roboto-mono text-[1.53vw] leading-[1.319em] text-black">→</span>
          </div>
        </div>

        {/* Bottom Projects Section */}
        <div className="absolute bottom-[3.85vh] left-[1.56vw] right-[1.56vw]">
          <div className="flex justify-between items-start">
            {/* First Column - description and Approach */}
            <div className="w-[17.42vw] flex flex-col items-center gap-[1.8vh]">
              <div className="w-[17.27vw] h-[0.12vh] bg-white" />
              <p className="font-roboto-mono font-light text-[0.875vw] leading-[1.319em] text-center">
                description and Approach
              </p>
            </div>

            {/* Second Column - Shivas Eye Care */}
            <div className="w-[17.42vw] flex flex-col items-center gap-[1.8vh]">
              <div className="w-[17.27vw] h-[0.12vh] bg-[#525252]" />
              <div className="text-center">
                <p className="font-roboto-mono font-medium text-[0.875vw] leading-[1.319em] mb-[1.8vh]">
                  Shivas Eye Care
                </p>
                <p className="font-roboto-mono font-light text-[0.467vw] leading-[1.319em] w-[9.3vw] mx-auto">
                  Appointment Booking Page for eye clinic with integrated whatsApp bot functionality
                </p>
              </div>
            </div>

            {/* Third Column - XYZXXXYYYZZ */}
            <div className="w-[17.42vw] flex flex-col items-center gap-[1.8vh]">
              <div className="w-[17.27vw] h-[0.12vh] bg-[#525252]" />
              <div className="text-center">
                <p className="font-roboto-mono font-medium text-[0.875vw] leading-[1.319em] mb-[1.8vh]">
                  XYZXXXYYYZZ
                </p>
                <p className="font-roboto-mono font-light text-[0.467vw] leading-[1.319em]">
                  Nulla enim laboris occaecat velit commodo Lorem nulla duis esse ipsum. Sit ut ullamco dolor adipisicing cupidatat aute est enim ullamco eu consequat amet officia Lorem. Ut est est elit minim qui culpa sint quis labore incididunt occaecat
                </p>
              </div>
            </div>

            {/* Fourth Column - XYZXXXYYYZZ */}
            <div className="w-[17.42vw] flex flex-col items-center gap-[1.8vh]">
              <div className="w-[17.27vw] h-[0.12vh] bg-[#525252]" />
              <div className="text-center">
                <p className="font-roboto-mono font-medium text-[0.875vw] leading-[1.319em] mb-[1.8vh]">
                  XYZXXXYYYZZ
                </p>
                <p className="font-roboto-mono font-light text-[0.467vw] leading-[1.319em]">
                  Nulla enim laboris occaecat velit commodo Lorem nulla duis esse ipsum. Sit ut ullamco dolor adipisicing cupidatat aute est enim ullamco eu consequat amet officia Lorem. Ut est est elit minim qui culpa sint quis labore incididunt occaecat
                </p>
              </div>
            </div>

            {/* Fifth Column - XYZXXXYYYZZ */}
            <div className="w-[17.42vw] flex flex-col items-center gap-[1.8vh]">
              <div className="w-[17.27vw] h-[0.12vh] bg-[#525252]" />
              <div className="text-center">
                <p className="font-roboto-mono font-medium text-[0.875vw] leading-[1.319em] mb-[1.8vh]">
                  XYZXXXYYYZZ
                </p>
                <p className="font-roboto-mono font-light text-[0.467vw] leading-[1.319em]">
                  Nulla enim laboris occaecat velit commodo Lorem nulla duis esse ipsum. Sit ut ullamco dolor adipisicing cupidatat aute est enim ullamco eu consequat amet officia Lorem. Ut est est elit minim qui culpa sint quis labore incididunt occaecat
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About text */}
        <div className="absolute bottom-[11.66vh] left-[1.56vw]">
          <p className="font-gacor text-[2.85vw] leading-[1.883em]">about</p>
        </div>
      </div>
      </div>
    </div>
  );
}
