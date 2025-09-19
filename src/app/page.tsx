import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      <div className="relative w-full h-full bg-black overflow-hidden flex justify-center items-center">
        <div className="w-full h-full max-w-[100vw] max-h-[100vh] relative bg-black overflow-hidden" style={{ aspectRatio: '1280/832' }}>
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

          {/* Content using exact positioning from your code */}
          <div className="left-[1.56%] top-[11.66%] absolute text-white text-4xl font-normal font-['Gacor_Personal_Use']">Blck Grid</div>
          <div className="left-[1.56%] top-[87.38%] absolute text-white text-4xl font-normal font-['Gacor_Personal_Use']">about</div>
          <div className="left-[76.09%] top-[11.66%] absolute text-white text-4xl font-normal font-['Gacor_Personal_Use']">CURATED</div>
          <div className="left-[88.91%] top-[3.85%] absolute text-white text-[6.22px] font-normal font-['Gacor_Personal_Use']">Contact</div>
          <div className="left-[94.46%] top-[3.85%] absolute text-white text-[6.22px] font-normal font-['Gacor_Personal_Use']">Team</div>
          <div className="left-[1.56%] top-[3.85%] absolute text-white text-[6.22px] font-normal font-['Gacor_Personal_Use']">Services</div>
          <div className="left-[7.43%] top-[3.85%] absolute text-white text-[6.22px] font-normal font-['Gacor_Personal_Use']">Pricing</div>
          <div className="left-[1.56%] top-[45.79%] absolute text-right text-white text-[8.73px] font-normal font-['Anderson_Grotesk']">Motto</div>
          <div className="w-[17.89%] left-[11.09%] top-[44.47%] absolute text-white text-xs font-light font-['Roboto_Mono']">From development to deployment<br/>with you at every step. Providing Software service<br/>to every enterprise and agency with curated approach for your objective</div>
          
          {/* Project sections */}
          <div className="w-[17.42%] left-[1.56%] top-[81.01%] absolute inline-flex flex-col justify-start items-center gap-[1.8%]">
            <div className="w-[17.27%] h-0 outline outline-1 outline-offset-[-0.50px] outline-white"></div>
            <div className="self-stretch text-center text-white text-xs font-light font-['Roboto_Mono']">description and Approach</div>
          </div>
          
          <div className="w-[17.42%] left-[20.31%] top-[81.01%] absolute inline-flex flex-col justify-start items-center gap-[1.8%]">
            <div className="w-[17.27%] h-0 outline outline-1 outline-offset-[-0.50px] outline-[#525252]"></div>
            <div className="self-stretch text-center text-white text-xs font-medium font-['Roboto_Mono']">Shivas Eye Care</div>
            <div className="w-[9.3%] text-center text-white text-[5.98px] font-light font-['Roboto_Mono']">Appointment Booking Page for eye clinic with integrated whatsApp bot functionality </div>
          </div>
          
          <div className="w-[17.42%] left-[39.06%] top-[81.01%] absolute inline-flex flex-col justify-start items-center gap-[1.8%]">
            <div className="w-[17.27%] h-0 outline outline-1 outline-offset-[-0.50px] outline-[#525252]"></div>
            <div className="self-stretch text-center text-white text-xs font-medium font-['Roboto_Mono']">XYZXXXYYYZZ</div>
            <div className="self-stretch text-center text-white text-[5.98px] font-light font-['Roboto_Mono']">Nulla enim laboris occaecat velit commodo Lorem nulla duis esse ipsum. Sit ut ullamco dolor adipisicing cupidatat aute est enim ullamco eu consequat amet officia Lorem. Ut est est elit minim qui culpa sint quis labore incididunt occaecat</div>
          </div>
          
          <div className="w-[17.42%] left-[57.81%] top-[81.01%] absolute inline-flex flex-col justify-start items-center gap-[1.8%]">
            <div className="w-[17.27%] h-0 outline outline-1 outline-offset-[-0.50px] outline-[#525252]"></div>
            <div className="self-stretch text-center text-white text-xs font-medium font-['Roboto_Mono']">XYZXXXYYYZZ</div>
            <div className="self-stretch text-center text-white text-[5.98px] font-light font-['Roboto_Mono']">Nulla enim laboris occaecat velit commodo Lorem nulla duis esse ipsum. Sit ut ullamco dolor adipisicing cupidatat aute est enim ullamco eu consequat amet officia Lorem. Ut est est elit minim qui culpa sint quis labore incididunt occaecat</div>
          </div>
          
          <div className="w-[17.42%] left-[76.56%] top-[81.01%] absolute inline-flex flex-col justify-start items-center gap-[1.8%]">
            <div className="w-[17.27%] h-0 outline outline-1 outline-offset-[-0.50px] outline-[#525252]"></div>
            <div className="self-stretch text-center text-white text-xs font-medium font-['Roboto_Mono']">XYZXXXYYYZZ</div>
            <div className="self-stretch text-center text-white text-[5.98px] font-light font-['Roboto_Mono']">Nulla enim laboris occaecat velit commodo Lorem nulla duis esse ipsum. Sit ut ullamco dolor adipisicing cupidatat aute est enim ullamco eu consequat amet officia Lorem. Ut est est elit minim qui culpa sint quis labore incididunt occaecat</div>
          </div>
          
          <div className="left-[71.64%] top-[26.32%] absolute text-right text-white text-xs font-normal font-['Roboto_Mono']">One Studio for your Idea With all the expertise<br/>at all the stages</div>
          
          {/* Logo circles */}
          <div className="w-[2vw] h-[3.08vh] left-[48.98%] top-[2.52%] absolute bg-white rounded-full border border-[#0d1016]" />
          <div className="w-[2vw] h-[3.08vh] left-[48.98%] top-[3.41%] absolute bg-white rounded-full border border-[#0d1016]" />
          <div className="w-[2vw] h-[3.08vh] left-[48.98%] top-[4.37%] absolute bg-white rounded-full border border-[#0d1016]" />
          <div className="w-[2vw] h-[3.08vh] left-[47.98%] top-[3.41%] absolute bg-white rounded-full border border-[#0d1016]" />
          <div className="w-[2vw] h-[3.08vh] left-[49.98%] top-[3.41%] absolute bg-white rounded-full border border-[#0d1016]" />
          <div className="w-[2vw] h-[3.08vh] left-[48.98%] top-[2.52%] absolute bg-white rounded-full border border-[#0d1016]" />
          
          {/* Navigation arrows */}
          <div className="w-[2.34vw] h-[3.61vh] left-[91.56%] top-[69.71%] absolute bg-white rounded-full" />
          <div className="w-[2.34vw] h-[3.61vh] left-[76.64%] top-[69.71%] absolute rounded-full border border-white" />
          <div className="left-[77.97%] top-[71.63%] absolute origin-top-left rotate-180 text-right text-white text-xl font-normal font-['Roboto_Mono']">→</div>
          <div className="left-[92.03%] top-[69.83%] absolute text-right text-black text-xl font-normal font-['Roboto_Mono']">→</div>
        </div>
      </div>
    </div>
  );
}
