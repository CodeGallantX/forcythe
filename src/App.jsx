import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Blog from "./components/Blog.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <div className="bg-bg text-white pt-32 px-24 py-20 min-h-screen">
        <Hero />
        <Blog />
      </div>
        <div className="bg-[#061626] px-24 py-14 text-white">
          <Footer />
        </div>
    </div>
  )
}

export default App;