import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, type: "spring" }}
      >
        <div className="overflow-x-hidden">
          <Navbar />
          <Home />
          <AboutMe />
          <Skills />
          <Project />
          <Footer />
        </div>
      </motion.div>
    </>
  );
}

export default App;
