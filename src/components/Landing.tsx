import { motion } from "framer-motion";
import { useRef } from "react";
import { AnimatedCarousel } from "../ui/AnimatedCraousel";
import { ChevronRight } from "lucide-react";
import { VerticalCardScroll } from "../ui/VerticalCardScroll";
export const LandingPage = () => {
  const containerRef = useRef(null);
  return (
    <main className="flex flex-col items-center w-full mt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif font-medium text-[5rem]/tight">
          Precision <br /> PCB Design
        </h1>
        <p className="text-lg font-medium mt-5 mb-8">
          Powered by AI <br />
          Highlights the accuracy and AI-driven nature of TrackWay, <br /> appealing
          to engineers and manufacturers who prioritize precision.
        </p>
        <a
          href="https://research-xi-six.vercel.app/"
          className="bg-white text-black font-bold text-lg rounded-md px-6 py-3 hover:bg-transparent hover:text-white hover:border border-neutral-400 transition"
        >
          Try Now
        </a>

        {/* Video Section */}
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

      {/* Carousel Section */}
      <section className="min-h-96 flex flex-col items-center justify-center gap-6 px-4">
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
      <section className="min-h-screen  w-10/14 flex flex-col items-center  gap-6">
        <div className="flex flex-col-reverse md:flex-row rounded-md overflow-hidden items-center bg-[#1f1d1a] justify-between gap-6 h-[60vh]">
          <div className="w-full md:w-full px-8 py-10">
            <h2 className="text-5xl text-white font-medium font-serif">
              Rapid PCB Design,<br /> Grounded Solutions
            </h2>
            <p className="text-sm text-gray-300 mt-4">
              Transform complex hardware ideas into manufacturable PCBs with AI-driven automation, real-time manufacturability feedback, and optimized component selection empowering startups and engineers to innovate faster.
            </p>
          </div>
          <VerticalCardScroll />
        </div>
      </section>
    </main>
  );
};
