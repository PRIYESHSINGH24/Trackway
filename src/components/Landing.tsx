import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { AnimatedCarousel } from "../ui/AnimatedCraousel";
import { ChevronRight } from "lucide-react";
import { VerticalCardScroll } from "../ui/VerticalCardScroll";
import { TryNowForm } from "./TryNowForm";
import MarqueeGrid from "./MarqueeGrid";

const LandingPage = () => {
  const containerRef = useRef(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const features = [
    {
      icon: "./security.svg",
      title: "Enterprise-Grade Security",
      description: "Robust, industry-standard protection with zero training on your data.",
    },
    {
      icon: "./book.svg",
      title: "Agentic Workflows",
      description: "Produce expert-quality work product for complex workflows, with no prompting required.",
    },
    {
      icon: "./electronics.svg",
      title: "Domain-Specific Models",
      description: "High-performing custom models built for complex professional work.",
    },
  ];

  return (
    <main className="text-white flex flex-col items-center w-full mt-0 gap-0">
      {/* HERO SECTION */}
      <section className="min-h-screen h-screen flex flex-col items-center justify-center text-center px-4 bg-[#181714] w-full">
        <h1 className="font-serif font-medium text-[5rem]/tight">
          Precision <br /> PCB Design
        </h1>
        <p className="text-lg font-medium mt-5 mb-8">
          Powered by AI <br />
          Highlights the accuracy and AI-driven nature of TrackWay,<br /> appealing to engineers and manufacturers who prioritize precision.
        </p>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-white text-black font-bold text-lg rounded-md px-6 py-3 hover:bg-transparent hover:text-white hover:border border-neutral-400 transition"
        >
          Try Now
        </button>
      </section>

      {/* VIDEO SECTION */}
      <section className="w-full h-screen flex items-center justify-center bg-[#181714]">
        <motion.div
          className="rounded-md w-full h-full max-w-7xl flex items-center justify-center"
          initial={{ width: "90%", height: "800px" }}
          viewport={{ margin: "-400px" }}
          whileInView={{
            width: "calc(90% + 6rem)",
            height: "calc(700px + 2rem)",
          }}
          transition={{ duration: 0.8, ease: "linear" }}
        >
          <video
            ref={containerRef}
            className="w-full h-full object-cover rounded-md"
            controls
          >
            <source src="./Designing.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </section>

      {/* CUSTOMERS SECTION */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4 mt-32 md:mt-40 w-full">
        <h2 className="text-4xl text-white font-medium font-serif">
          Building For All
        </h2>
        <AnimatedCarousel />
        <a
          href="#"
          className="flex items-center text-gray-500 hover:text-white font-bold"
        >
          See Customers <ChevronRight className="ml-1 h-5 w-5" />
        </a>
      </section>

      {/* RAPID PCB DESIGN SECTION */}
      <section className="min-h-[70vh] w-full flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col md:flex-row-reverse rounded-md overflow-hidden bg-[#1f1d1a] w-full max-w-7xl h-auto md:h-[60vh] min-h-[60vh]">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <VerticalCardScroll />
          </div>
          <div className="w-full md:w-1/2 px-6 py-10 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl text-white font-medium font-serif">
              Rapid PCB Design,<br /> Grounded Solutions
            </h2>
            <p className="text-sm text-gray-300 mt-4">
              Transform complex hardware ideas into manufacturable PCBs with AI-driven automation, real-time manufacturability feedback, and optimized component selection empowering startups and engineers to innovate faster.
            </p>
          </div>
        </div>
      </section>

      {/* WORKFLOWS SECTION */}
      <section className="w-full flex flex-col md:flex-row min-h-[70vh] max-w-7xl mx-auto rounded-md overflow-hidden bg-[#1e293b] mt-32 md:mt-40 shadow-sm">
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-[#181714] min-h-[320px]">
          <div className="w-full max-w-xl">
            <span className="text-[#b6a98f] text-sm font-semibold mb-2 block">Workflows</span>
            <h2 className="font-serif text-white text-3xl md:text-4xl font-medium mb-4 leading-tight">Streamline<br/>Your Work</h2>
            <p className="text-neutral-300 text-base mb-4">Multi-modal agents designed in collaboration with professionals to deliver precise, purpose-built work product. More coming soon.</p>
            <a href="#" className="text-[#b6a98f] text-sm font-medium hover:underline">Explore Workflows &rarr;</a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#dbd9d1] min-h-[400px] py-12">
          <MarqueeGrid />
        </div>
      </section>

      {/* PCB INNOVATION SECTION */}
      <section className="w-full flex flex-col md:flex-row min-h-[70vh] max-w-7xl mx-auto rounded-md overflow-hidden bg-[#181714] mt-32 md:mt-40 shadow-sm">
        <div className="w-full md:w-1/2 flex items-center justify-center bg-[#f3f4f6] min-h-[400px] p-8">
          <div className="w-full h-[480px] flex items-center justify-center">
            <svg width="520" height="400" viewBox="0 0 520 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                </pattern>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <rect x="0" y="0" width="520" height="400" rx="32" fill="#f8fafc" />
              <rect x="0" y="0" width="520" height="400" rx="32" fill="url(#grid)" />
              <polyline points="60,340 120,220 260,220 400,80 460,80" stroke="#38bdf8" strokeWidth="6" fill="none"/>
              <polyline points="120,380 180,340 340,340 460,180" stroke="#a3e635" strokeWidth="6" fill="none"/>
              <path d="M180,60 Q260,120 340,60" stroke="#facc15" strokeWidth="6" fill="none"/>
              <path d="M60,120 Q120,180 180,120 Q240,60 300,120 Q360,180 420,120" stroke="#818cf8" strokeWidth="6" fill="none"/>
              <circle cx="60" cy="340" r="14" fill="#38bdf8" filter="url(#glow)"/>
              <circle cx="120" cy="220" r="12" fill="#38bdf8"/>
              <circle cx="260" cy="220" r="12" fill="#38bdf8"/>
              <circle cx="400" cy="80" r="12" fill="#38bdf8"/>
              <circle cx="460" cy="80" r="12" fill="#38bdf8"/>
              <circle cx="120" cy="380" r="12" fill="#a3e635"/>
              <circle cx="180" cy="340" r="12" fill="#a3e635"/>
              <circle cx="340" cy="340" r="12" fill="#a3e635"/>
              <circle cx="460" cy="180" r="12" fill="#a3e635"/>
              <circle cx="180" cy="60" r="12" fill="#facc15"/>
              <circle cx="340" cy="60" r="12" fill="#facc15"/>
              <circle cx="60" cy="120" r="12" fill="#818cf8"/>
              <circle cx="180" cy="120" r="12" fill="#818cf8"/>
              <circle cx="300" cy="120" r="12" fill="#818cf8"/>
              <circle cx="420" cy="120" r="12" fill="#818cf8"/>
              <circle r="10" fill="#facc15" filter="url(#glow)">
                <animateMotion dur="2.5s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1">
                  <mpath xlinkHref="#trace1" />
                </animateMotion>
              </circle>
              <circle r="10" fill="#38bdf8" filter="url(#glow)">
                <animateMotion dur="3s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" begin="0.5s">
                  <mpath xlinkHref="#trace2" />
                </animateMotion>
              </circle>
              <circle r="10" fill="#a3e635" filter="url(#glow)">
                <animateMotion dur="2.2s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" begin="1s">
                  <mpath xlinkHref="#trace3" />
                </animateMotion>
              </circle>
              <circle r="10" fill="#818cf8" filter="url(#glow)">
                <animateMotion dur="3.5s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" begin="0.7s">
                  <mpath xlinkHref="#trace4" />
                </animateMotion>
              </circle>
              <path id="trace1" d="M60,340 L120,220 L260,220 L400,80 L460,80" fill="none" />
              <path id="trace2" d="M120,380 L180,340 L340,340 L460,180" fill="none" />
              <path id="trace3" d="M180,60 Q260,120 340,60" fill="none" />
              <path id="trace4" d="M60,120 Q120,180 180,120 Q240,60 300,120 Q360,180 420,120" fill="none" />
              
            </svg>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#181714] min-h-[320px] p-12">
          <span className="text-[#38bdf8] text-sm font-semibold mb-2 block">TrackWay</span>
          <h2 className="font-serif text-white text-4xl md:text-5xl font-medium mb-4 leading-tight">Accelerate PCB Innovation with AI</h2>
          <p className="text-neutral-300 text-base mb-4">Leverage TrackWay's advanced AI to design, optimize, and innovate PCB layouts faster than ever. Experience real-time feedback, intelligent component selection, and seamless collaboration for your hardware projects.</p>
          <a href="#" className="text-[#38bdf8] text-sm font-medium hover:underline">Explore TrackWay &rarr;</a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="min-h-[70vh] w-full flex flex-col items-center justify-center gap-6 px-4 mt-32 md:mt-40">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 leading-tight">
          Unlock Professional <br /> Class AI For Your Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
          {features.map(({ icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center px-4">
              <div className="text-white text-4xl font-bold w-16 h-16 flex items-center justify-center mb-6">
                <img src={icon} alt={title} className="text-neutral-200 w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="min-h-[70vh] w-full flex flex-col items-center justify-center gap-6 bg-[#ced8d9] mx-auto mt-32 md:mt-40">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between w-full max-w-7xl md:px-6 px-2 h-full">
          <div className="h-[500px] border-1 bg-black max-w-full w-full">
            <img src="./Founder.jpeg" className="object-cover w-full h-full" />
          </div>
          <div className="w-full md:w-1/2 text-left flex flex-col items-start justify-center gap-4 px-6">
            <h1 className="text-black font-serif text-2xl md:text-4xl">"We aim to free engineers from tedious PCB design cycles, so they can focus on what matters innovation, prototyping, and growth. This drives our mission."</h1>
            <p className="text-black text-lg py-8">Trackway</p>
          </div>
        </div>
      </section>

      <TryNowForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </main>
  );
};

export default LandingPage;
