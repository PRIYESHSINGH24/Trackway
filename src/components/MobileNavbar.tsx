import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { HamburgerIcon } from '../ui/HamburgerIcon'

interface NavigationItem {
  label: string
  hasSubmenu?: boolean
  href?: string
}

const navigationItems: NavigationItem[] = [
  { label: "Products", hasSubmenu: true },
  { label: "Solutions", hasSubmenu: true },
  { label: "Customers", href: "#customers" },
  { label: "Security", href: "#security" },
  { label: "News", hasSubmenu: true },
  { label: "Company", href: "#company" },
]

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full md:hidden z-50 bg-[#1a1a1a] backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="text-2xl font-light text-white">Trackway</div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="p-2 -m-2" aria-label="Toggle menu">
            <HamburgerIcon isOpen={isOpen} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full bg-[#1a1a1a] z-40 overflow-hidden"
          >
            <div className="pt-20 px-6 h-full flex flex-col">
              {/* Navigation Items */}
              <nav className="flex-1">
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="space-y-0"
                >
                  {navigationItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.05,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                    >
                      <a
                        href={item.href || "#"}
                        className="flex items-center justify-between py-6 text-2xl  text-white font-semibold font-serif transition-colors "
                        onClick={() => {
                          if (!item.hasSubmenu) {
                            setIsOpen(false)
                          }
                        }}
                      >
                        <span>{item.label}</span>
                        {item.hasSubmenu && <ChevronRight className="w-6 h-6 text-white font-bold" />}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>

              {/* Bottom Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="pb-8  flex gap-3 "
              >
                <button className="w-full py-2 bg-white text-black   rounded-md text-md font-medium  hover:bg-gray-400 transition-colors">
                  Request a Demo
                </button>
                <button className="w-full border border-white hover:border-gray-400 text-white rounded-md text-md font-medium transition-colors">
                  Login
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
