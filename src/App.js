import "./index.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Project from "./components/Project";
// import Home from "./components/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="paperTexture">
        <Header />
        {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />


   </Routes> */}
        <About />
        <Project />
        {/* <Home /> */}
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;


//TODO
//state change to toggle background from animated to static
//display resume
//add technologies used to project cards
//add tech symbols to about section 
