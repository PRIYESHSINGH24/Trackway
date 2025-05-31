import { useState } from "react"
import { AnimatedTooltip, CaretButton } from "../ui/AnimatedTooltip"
import { MobileNavigation } from "./MobileNavbar"

interface TooltipOption {
  label: string
  onClick?: () => void
}

type NavbarProps = {
  hidden?: boolean
}

export const Navbar = ({ hidden }: NavbarProps) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const productMenuOptions: TooltipOption[] = [
    { label: "Assistant", onClick: () => console.log("Profile clicked") },
    { label: "Vault", onClick: () => console.log("Settings clicked") },
    { label: "Knowledge", onClick: () => console.log("Notifications clicked") },
    { label: "Workflows", onClick: () => console.log("Sign out clicked") },
  ]
  const solutionMenuOptions: TooltipOption[] = [
    { label: "Innovation", onClick: () => console.log("Profile clicked") },
    { label: "In-House", onClick: () => console.log("Settings clicked") },
    { label: "Transactional", onClick: () => console.log("Notifications clicked") },
    { label: "Litigation", onClick: () => console.log("Sign out clicked") },
  ]
  const newsMenuOptions: TooltipOption[] = [
    { label: "Blog", onClick: () => console.log("Profile clicked") },
    { label: "Newsroom", onClick: () => console.log("Settings clicked") },
    { label: "Press Kit", onClick: () => console.log("Notifications clicked") },
  ]
  return (
    <>
      <MobileNavigation />
      <nav className={`bg-[#0f0e0d] z-50 px-4 py-4 hidden fixed top-0 w-full md:flex justify-between items-center transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
        <h2 className="text-3xl font-serif text-bold text-neutral-200">Trackway</h2>
        <div className="flex justify-between items-center">
          <ul className="flex space-x-4 items-center" >
            <div onMouseEnter={() => setHoveredButton("product")} onMouseLeave={() => setHoveredButton(null)}>
              <AnimatedTooltip
                trigger={<CaretButton isHovered={hoveredButton === "product"}>Product</CaretButton>}
                options={productMenuOptions}
              />
            </div>
            <div onMouseEnter={() => setHoveredButton("solution")} onMouseLeave={() => setHoveredButton(null)}>
              <AnimatedTooltip
                trigger={<CaretButton isHovered={hoveredButton === "solution"}>Solutions</CaretButton>}
                options={solutionMenuOptions}
              />
            </div>
            <li className="text-gray-300 hover:text-gray-500 transition-colors cursor-pointer text-sm">Customers</li>
            <li className="text-gray-300 hover:text-gray-500 transition-colors cursor-pointer text-sm">Security</li>
            <div onMouseEnter={() => setHoveredButton("solution")} onMouseLeave={() => setHoveredButton(null)}>
              <AnimatedTooltip
                trigger={<CaretButton isHovered={hoveredButton === "solution"}>News</CaretButton>}
                options={newsMenuOptions}
              />
            </div>
            <li className="text-gray-300 hover:text-gray-500 transition-colors cursor-pointer text-sm">Company</li>
          </ul>
        </div>
        <div>
          <button className="bg-transparent text-gray-300 px-4 py-2 rounded hover:text-gray-500 transition duration-300">
            Login
          </button>
        </div>
      </nav>
    </>
  )
}
