import React from "react";
import weatherScreenshot from "../assets/img/weatherScreenshot.png";
import futbolandiaScreenshot from "../assets/img/futbolandiaScreenshot.png";


const projects = [
  {
    name: "Weather Dashboard",
    desc: "Application to display current weather and five day forecast for user-searched cities",
    img: weatherScreenshot,
    link: "https://williamgeorgethomas.github.io/weather-dashboard",
    github: "https://github.com/WilliamGeorgeThomas/weather-dashboard",
  },
  {
    name: "Futbolandia",
    desc: "Your home for tables, top scorers, and fixtures from football's biggest leagues!",
    img: futbolandiaScreenshot,
    link: "https://williamgeorgethomas.github.io/futbolandia/",
    github: "https://github.com/WilliamGeorgeThomas/futbolandia",
  },
];

export default function Project() {
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, i) => {
          return (
            <div style={{ backgroundImage: `url(${project.img})` }} key={`project_${i}`} className="border-double rounded-lg w-1/4 h-72 m-4">
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
