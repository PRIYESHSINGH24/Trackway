import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronUp } from "lucide-react"
interface TooltipOption {
  label: string
  onClick?: () => void
}
interface AnimatedTooltipProps {
  trigger: React.ReactNode
  options: TooltipOption[]
}
export function CaretButton({ children, isHovered }: { children: React.ReactNode; isHovered: boolean }) {
  return (
    <div className="flex items-center gap-2 px-2 py-1 text-sm   text-gray-300 hover:text-gray-500  transition-colors">
      <span>{children}</span>
      <motion.div animate={{ rotate: isHovered ? 180 : 0 }} transition={{ duration: 0.5, ease: "easeInOut" }}>
        <ChevronUp className="w-4 h-4" />
      </motion.div>
    </div>
  )
}
export function AnimatedTooltip({ trigger, options }: AnimatedTooltipProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="cursor-pointer">{trigger}</div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 z-50"
            style={{ marginTop: "2rem" }}
          >
            {/* Tooltip Content */}
            <div className="bg-[#1a1a1a] rounded-sm py-2 px-4 min-w-fit">
              {options.map((option, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  onClick={option.onClick}
                  className="w-full   items-center gap-6  py-2 px-4 text-center  transition-colors text-gray-300 hover:text-gray-500 "
                >
                  <span className="text-sm   font-medium">{option.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
