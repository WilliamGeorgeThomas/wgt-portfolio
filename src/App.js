import "./assets/css/index.css";
import "./assets/css/animation.css";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blobs from "./components/Blobs";
import { useState, useEffect } from "react";

//TODO
//display resume
//add technologies used to project cards
//add tech symbols to about section

function App() {
  const [background, setBackground] = useState("dynamic");
  const [renderAnimation, setRenderAnimation] = useState("");
  const toggleBackground = () => {
    if (background === "dynamic") {
      setBackground("static");
      setRenderAnimation("hidden");
      // document.getElementById("blobs").classList.add("hidden");
    } else {
      setBackground("dynamic");
      setRenderAnimation("block");
      // document.getElementById("blobs").classList.remove("hidden");
    }
  };
  useEffect(() => {
    document.body.className = background;
  }, [background]);
  return (
    <div className={`App ${background}`}>
      <Header toggleBackground={toggleBackground} />
      <About />
      <Project />
      <Contact />
      <Footer />
      <Blobs animation={renderAnimation} />
      {/* hide/render component with svg */}
    </div>
  );
}

export default App;
