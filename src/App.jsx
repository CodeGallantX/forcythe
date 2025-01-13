import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProjectSlider from "./components/ProjectSlider.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Process from "./components/Process.jsx";
import Features from "./components/Features.jsx";
import Stat from "./components/Stat.jsx";
import Blog from "./components/Blog.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <div className="bg-bg text-white py-4 min-h-screen">
        <Hero />
        <ProjectSlider />
        <Testimonials />
        <Process />
        <Features />
        <Stat />
        <Blog />
      </div>
        <div className="bg-gradient-to-b from-bg to-[#061626] px-6 lg:px-16 xl:px-28 py-4 text-white">
          <CTA />
          <Footer />
        </div>
    </div>
  )
}

export default App;