import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";
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
        <Home />
        {/* <Project /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
