function Header(props) {
  return (
    <div>
      <div className="flex flex-row flex-wrap border-double border-8 border-[#0b132b] justify-between items-center">
        <h1 className="m-6 text-8xl western text-[#0b132b]">William George Thomas</h1>
        <nav className="m-6 flex flex-row gap-6">
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
        <div className="flex flex-col mr-6 mb-1 ml-6 items-center">
          <span className="sans text-lg">BACKGROUND ANIMATION</span>
          {/* <div className="flex flex-row justify-center">
            <span className="sans text-lg">ON</span>
            <label className="switch">
              <input type="checkbox" onClick={props.toggleBackground} />
              <span className="slider round"></span>
            </label>
            <span className="sans text-lg">OFF</span>
          </div> */}
          <div class="button">
            <input type="checkbox" class="checkbox" onClick={props.toggleBackground} />
            <div class="knobs sans text-xs">
              <span></span>
            </div>
            <div class="layer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;