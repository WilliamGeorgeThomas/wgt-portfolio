import React from "react";
import weatherScreenshot from "../assets/img/weatherScreenshot.png";
import futbolandiaScreenshot from "../assets/img/futbolandiaScreenshot.png";
import futureScreenshot from "../assets/img/futureScreenshot.png";
import cocktailScreenshot from "../assets/img/cocktailScreenshot.jpeg";

const projects = [
  {
    name: "Future Finder",
    desc: "User-friendly job posting website for employers and job seekers",
    img: futureScreenshot,
    link: "https://future-finder.herokuapp.com/",
    github: "https://github.com/4-non-non-dorks/future-finder",
  },
  {
    name: "Futbolandia",
    desc: "Your home for tables, top scorers, and fixtures from football's biggest leagues!",
    img: futbolandiaScreenshot,
    link: "https://williamgeorgethomas.github.io/futbolandia/",
    github: "https://github.com/WilliamGeorgeThomas/futbolandia",
  },
  {
    name: "Cocktail Wizard",
    desc: "Website that allows users to discover cocktails and recipes from a combination of ingredients",
    img: cocktailScreenshot,
    link: "https://high-fivez.github.io/project1/",
    github: "https://github.com/high-fivez/project1",
  },
  {
    name: "Weather Dashboard",
    desc: "Application to display current weather and five day forecast for user-searched cities",
    img: weatherScreenshot,
    link: "https://williamgeorgethomas.github.io/weather-dashboard",
    github: "https://github.com/WilliamGeorgeThomas/weather-dashboard",
  },
];

export default function Project() {
  return (
    <div className="m-6">
        <h2 className="western text-6xl">PROJECTS</h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, i) => {
          return (
            <div style={{ backgroundImage: `url(${project.img})` }} key={`project_${i}`} className="border-double rounded-lg w-72 h-72 m-4">
              <h2 className="text-xl font-bold">{project.name}</h2>
              <p className="">{project.desc}</p>
              <a href={project.link}>Link to deployed application</a>
              <a href={project.github}>GitHub repo</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
