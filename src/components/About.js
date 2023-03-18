import React from "react";
import flagHeadshot from "../assets/img/flagHeadshot.jpg";

// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// The `Hello` component is a child of our `App` component and is responsible for rendering the "Hello World" header.
function About() {

  return (
    <section id="about" className="flex flex-wrap justify-space-between m-6">
      <h2 className="western text-6xl">ABOUT</h2>
      <div className="headshot">
        <img src={flagHeadshot} alt="headshot with flag" />
      </div>
      <p className="border-double border-4 border-sky-500 rounded-lg w-1/4">Full Stack Web Developer with background in government contracting and international education. Ever curious and seeking new challenges. Experienced in working collaboratively to solve complex problems with tight timelines. Using 4+ years spent living and teaching in Togo, West Africa and Santiago, Chile to bring a unique perspective to the workplace.</p>
    </section>
  );
}

export default About;
