import {Link} from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="bg-blue-300">
      <h1 className="text-8xl western">William George Thomas</h1>
      <h2>web developer...i think?</h2>
        <Link to="/" className="button">Home</Link>
        <Link to="/about" className="button">About</Link>

        <a class="button" href="#about">
          ABOUT
        </a>
        <a class="button" href="#work">
          WORK
        </a>
        <a class="button" href="#contact">
          CONTACT
        </a>
      </nav>
    </div>
  );
}

export default Header;
