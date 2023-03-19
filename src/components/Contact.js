import React from "react";
import ghLogo from "../assets/img/GitHub_Logo.png";
import liLogo from "../assets/img/LI-Logo.png";

function Contact() {
  return (
    <section id="contact" className="m-6">
      <h2 class="western text-6xl">CONTACT</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="contact-links wiggle border-double border-8 border-[#0b132b] rounded-lg">
          <a href="https://github.com/WilliamGeorgeThomas" target="_blank" rel="noopener noreferrer">
            {" "}
            <img src={ghLogo} alt="github logo" />
          </a>
        </div>
        <div className="contact-links wiggle border-double border-8 border-[#0b132b] rounded-lg">
          <a href="https://www.linkedin.com/in/william-g-thomas/" target="_blank" rel="noopener noreferrer">
            <img src={liLogo} alt="LinkedIn logo" />{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
