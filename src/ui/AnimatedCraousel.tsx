import React from "react"
import { motion } from "framer-motion";

export const AnimatedCarousel = () => {

  const logos = [
    "Electronics Design Engineers", "PCB Manufacturers", "Small and Medium Enterprises (SMEs) in Electronics", "Product Developement Teams in Larger Corporations", "Freelance PCB Designers",
    "Educational Institutions and Research Labs"
  ];

  return (
    <div className="container p-5">
      <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 py-4 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-zinc-950 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-zinc-950 after:to-transparent after:content-['']">
        <motion.div
          transition={{
            duration: 60,
            ease: 'linear',
            repeat: Infinity,
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: '-50%' }}
          className="flex flex-none gap-16 pr-16"
        >
          {[...new Array(4)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {logos.map((items) => (
                <h1
                  key={items}

                  className="h-8 w-auto flex-none font-serif text-3xl italic text-white/70"
                >{items}</h1>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>);
};
