import {Link} from "react-router-dom";

function Header() {
  return (
    <div className="flex-row border-double border-8 border-[#0b132b] ">
      <h1 className="m-6 text-8xl western text-[#0b132b]">William George Thomas</h1>
      <h2 className="m-6 western text-4xl text-[#0b132b]">web developer...i think?</h2>
      <nav className="m-6">
        {/* <Link to="/" className="button">
          Home
        </Link>
        <Link to="/about" className="button">
          About
        </Link> */}
        <a className="western text-4xl text-[#0b132b]" href="#about">
          ABOUT
        </a>
        <a className="western text-4xl text-[#0b132b]" href="#work">
          WORK
        </a>
        <a className="western text-4xl text-[#0b132b]" href="#contact">
          CONTACT
        </a>
      </nav>
    </div>
  );
}

export default Header;
