// import {Link} from "react-router-dom";
import { useState, useEffect } from "react";



function Header() {
  const [background, setBackground] = useState("dynamic");
  const toggleBackground = () => {
    if (background === "dynamic") {
      setBackground("static");
    } else {
      setBackground("dynamic");
    }
  };
  useEffect(() => {
    document.body.className = background;
  }, [background]);
  return (
    <div className={`App ${background}`}>
      <div className="flex flex-row flex-wrap border-double border-8 border-[#0b132b] justify-between items-center">
        <h1 className="m-6 text-8xl western text-[#0b132b]">William George Thomas</h1>
        <nav className="m-6 flex flex-row gap-6">
          {/* <Link to="/" className="button">
          Home
          </Link>
          <Link to="/about" className="button">
          About
        </Link> */}
          <div className="western text-4xl text-[#0b132b] nav-links pulse">
            <a href="#about">ABOUT</a>
          </div>
          <div className="western text-4xl text-[#0b132b] nav-links pulse">
            <a href="#work">WORK</a>
          </div>
          <div className="western text-4xl text-[#0b132b] nav-links pulse">
            <a href="#contact">CONTACT</a>
          </div>
        </nav>
        <h2 className="ml-6 mb-1 western text-4xl text-[#0b132b]">web developer...i think?</h2>
        <div className="flex flex-col mr-6 mb-1 justify-center">
          <span className="sans text-lg">STATIC BACKGROUND</span>
          <label className="switch">
            <input type="checkbox" onClick={toggleBackground}/>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Header;

// <nav className="m-6 flex flex-row justify-end gap-8"></nav>
