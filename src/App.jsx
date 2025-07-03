import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Project from "./pages/Project";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Project />
        <Footer />
      </div>
    </>
  );
}

export default App;
