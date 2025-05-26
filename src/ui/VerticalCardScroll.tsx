import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const items = ["Your Firm's Data", "3rd Party Integration Right"];

export const VerticalCardScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full mx-auto overflow-hidden border border-white  flex  items-center justify-center bg-[#ced8d9]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute   flex items-center justify-center border-1 border-white py-6 px-8 bg-white rounded-md shadow-lg shadow-neutral-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.2 }}
        >
          <h1 className="text-black text-2xl italic font-serif">{items[currentIndex]}</h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
