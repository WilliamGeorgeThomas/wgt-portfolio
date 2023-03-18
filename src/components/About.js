import React from "react";
import flagHeadshot from "../assets/img/flagHeadshot.jpg";

function About() {

  return (
    <section id="about" className="m-6">
      <h2 className="western text-6xl">ABOUT</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="headshot border-double border-4 border-[#18435a]">
          <img src={flagHeadshot} alt="headshot with flag" />
        </div>
        <p className="border-double border-4 border-[#18435a] rounded-lg w-80 sans bg-[#f7f3e3] p-2">Full Stack Web Developer with background in government contracting and international education. Ever curious and seeking new challenges. Experienced in working collaboratively to solve complex problems with tight timelines. Using 4+ years spent living and teaching in Togo, West Africa and Santiago, Chile to bring a unique perspective to the workplace.</p>
      </div>
    </section>
  );
}

export default About;
