import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import LandingPage from "./components/Landing";
import { Navbar } from "./components/Navbar";

function App() {
  const [navbarHidden, setNavbarHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50 && currentScrollY > lastScrollY.current) {
        setNavbarHidden(true);
      } else {
        setNavbarHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="flex-col w-screen h-full overflow-x-hidden bg-[#0f0e0d] flex-1 flex">
        <header className="w-full">
          <Navbar hidden={navbarHidden} />
        </header>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
