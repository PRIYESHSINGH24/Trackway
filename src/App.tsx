<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import Blog from "./pages/Blogs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { LandingPage } from "./components/Landing";

// Custom layout wrapper to conditionally show Navbar & Footer
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="flex-col w-screen h-full overflow-x-hidden bg-[#0f0e0d] flex-1 flex">
      {!hideNavbarFooter && <Navbar />}
      <main className="flex-1">{children}</main>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
=======
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer"
import LandingPage from "./components/Landing"
import { Navbar } from "./components/Navbar"

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
    <div className="flex flex-col w-screen h-full overflow-x-hidden bg-dark">
      <header className="w-full">
        <Navbar hidden={navbarHidden} />
      </header>
      <main className="flex-1">
        <LandingPage />
      </main>
      <Footer />
    </div>
  )
>>>>>>> a354985 (added more functionality in the code)
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
