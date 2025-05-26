import { motion } from "framer-motion";

export function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center cursor-pointer">
      <motion.div
        className="w-6 h-0.5 bg-white mb-1"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 6 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.div
        className="w-6 h-0.5 bg-white mb-1"
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.div
        className="w-6 h-0.5 bg-white"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -6 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  )
}
