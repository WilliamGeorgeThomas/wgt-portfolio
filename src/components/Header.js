import {Link} from "react-router-dom";

function Header() {
  return (
    <div className="flex-row">
      <nav className="border-double border-8 border-[#18435a]">
        <h1 className="m-6 text-8xl western text-[#3f2a2b]">William George Thomas</h1>
        <h2 className="m-6 western text-4xl">web developer...i think?</h2>
        {/* <Link to="/" className="button">
          Home
        </Link>
        <Link to="/about" className="button">
          About
        </Link> */}

        <a className="western text-4xl" href="#about">
          ABOUT
        </a>
        <a className="western text-4xl" href="#work">
          WORK
        </a>
        <a className="western text-4xl" href="#contact">
          CONTACT
        </a>
      </nav>
    </div>
  );
}

export default Header;
