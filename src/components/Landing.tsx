import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { AnimatedCarousel } from "../ui/AnimatedCraousel";
import { ChevronRight } from "lucide-react";
import { VerticalCardScroll } from "../ui/VerticalCardScroll";
import { TryNowForm } from "./TryNowForm";
import Reveal from "./Reveal";
import MarqueeGrid from "./MarqueeGrid";

export const LandingPage = () => {
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

  const directions: ("left" | "right" | "up" | "down")[] = ["left", "right", "up", "down", "left", "right"];
  const featuresGrid = [
    { icon: "📄", title: "Analyze Transcripts" },
    { icon: "📑", title: "Compare Agreements" },
    { icon: "👤", title: "Company Profiles" },
    { icon: "📝", title: "Draft Client Letter" },
    { icon: "⭐", title: "Deal Points" },
    { icon: "🔍", title: "Lease Extraction" },
    { icon: "📦", title: "Contract Storage" },
    { icon: "🗂️", title: "Organize Files" },
    { icon: "🔒", title: "Secure Sharing" },
    { icon: "📊", title: "Data Insights" },
    { icon: "🧑‍💼", title: "Client Management" },
    { icon: "⚡", title: "Quick Export" },
  ];

  return (
    <main className=" text-white flex flex-col items-center w-full mt-20 gap-5">
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif font-medium text-[5rem]/tight">
          Precision <br /> PCB Design
        </h1>
        <p className="text-lg font-medium mt-5 mb-8">
          Powered by AI <br />
          Highlights the accuracy and AI-driven nature of TrackWay, <br /> appealing
          to engineers and manufacturers who prioritize precision.
        </p>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-white text-black font-bold text-lg rounded-md px-6 py-3 hover:bg-transparent hover:text-white hover:border border-neutral-400 transition"
        >
          Try Now
        </button>
        <motion.div
          className=" rounded-md mt-16 w-screen   "
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
      <section className="min-h-96 flex flex-col items-center justify-center gap-6 px-4 mt-32 md:mt-40">
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
      <section className="min-h-[80vh] w-full flex flex-col justify-center items-center gap-6 mt-32 md:mt-40">
        <div className="flex flex-col md:flex-row-reverse rounded-md overflow-hidden bg-[#1f1d1a] w-full max-w-7xl h-auto md:h-[60vh]">
          <div className="w-full md:w-1/2 flex items-center justify-center ">
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
      <section className="w-full flex flex-col md:flex-row min-h-[60vh] md:min-h-[60vh] max-w-7xl mx-auto rounded-md overflow-hidden bg-[#181714] mt-32 md:mt-40 shadow-sm">
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-[#181714] min-h-[320px]">
          <div className="w-full">
            <span className="text-[#b6a98f] text-sm font-semibold mb-2 block">Workflows</span>
            <h2 className="font-serif text-white text-3xl md:text-4xl font-medium mb-4 leading-tight">Streamline<br/>Your Work</h2>
            <p className="text-neutral-300 text-base mb-4">Multi-modal agents designed in collaboration with professionals to deliver precise, purpose-built work product. More coming soon.</p>
            <a href="#" className="text-[#b6a98f] text-sm font-medium hover:underline">Explore Workflows &rarr;</a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#e7e5df] min-h-[400px] py-12">
          <MarqueeGrid />
        </div>
      </section>
      <section className="min-h-[60vh] w-full flex flex-col items-center justify-center gap-6 px-4 mt-32 md:mt-40">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 leading-tight">
          Unlock Professional <br /> Class AI For Your Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
          {features.map(({ icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center px-4">
              <div className="text-white text-4xl font-bold   w-16 h-16 flex items-center justify-center mb-6">
                <img src={icon} alt={title} className="text-neutral-200 w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="min-h-[80vh] w-full flex flex-col items-center justify-center gap-6 bg-[#ced8d9] mx-auto mt-32 md:mt-40">
        <div className="flex  flex-col md:flex-row gap-10 items-center justify-between w-full max-w-7xl md:px-6 px-2  h-full">
          <div className={`h-[500px] border-1  bg-black max-w-full   w-full`} >
            <img src="./Founder.jpeg" className="object-cover w-full h-full " />
          </div>
          <div className="w-full md:w-1/2 text-left flex flex-col items-start justify-center gap-4 px-6">
            <h1 className="text-black font-serif text-2xl md:text-4xl  ">"We aim to free engineers from tedious PCB design cycles, so they can focus on what matters innovation, prototyping, and growth. This drives our mission."</h1>
            <p className="text-black  text-lg py-8"  >Trackway</p>
          </div>
        </div>
      </section>
      <TryNowForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </main>
  );
};
