import { Footer } from "./components/Footer"
import { LandingPage } from "./components/Landing"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <>
      <div className=" flex-col w-screen h-full   bg-[#0f0e0d] flex-1 flex ">
        <header className="w-full">
          <Navbar />
        </header>
        <LandingPage />
        <Footer />
      </div>
    </>
  )
}

export default App
