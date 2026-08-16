import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Innovation from "./components/Innovation";
import Research from "./components/Research";
import Capabilities from "./components/Capabilities";
import Impact from "./components/Impact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050807] text-white">
      <Loader />

      <Navbar />

      <main>
        <Hero />
        <Innovation />
        <Research />
        <Capabilities />
        <Impact />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
