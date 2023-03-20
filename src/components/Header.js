// import {Link} from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="flex flex-row flex-wrap border-double border-8 border-[#0b132b] justify-between items-center">
        <h1 className="mt-6 ml-6 text-8xl western text-[#0b132b]">William George Thomas</h1>
        <nav className="m-6">
          {/* <Link to="/" className="button">
          Home
          </Link>
          <Link to="/about" className="button">
          About
        </Link> */}
          <a className="western text-4xl text-[#0b132b] nav-links pulse" href="#about">
            ABOUT
          </a>
          <a className="western text-4xl text-[#0b132b] nav-links pulse m-6" href="#work">
            WORK
          </a>
          <a className="western text-4xl text-[#0b132b] nav-links pulse" href="#contact">
            CONTACT
          </a>
        </nav>
        <h2 className="ml-6 western text-4xl text-[#0b132b]">web developer...i think?</h2>
        </div>
    </div>
  );
}

export default Header;

// <nav className="m-6 flex flex-row justify-end gap-8"></nav>
