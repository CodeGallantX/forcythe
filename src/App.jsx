import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <div className="bg-bg text-white pt-40 px-24 py-20 min-h-screen">
        <Hero />
        <h1>App</h1>
      </div>
    </div>
  )
}

export default App;