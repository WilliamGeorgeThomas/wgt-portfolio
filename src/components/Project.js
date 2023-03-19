import React from "react";
import weatherScreenshot from "../assets/img/weatherScreenshot.png";
import futbolandiaScreenshot from "../assets/img/futbolandiaScreenshot.png";
import futureScreenshot from "../assets/img/futureScreenshot.png";
import cocktailScreenshot from "../assets/img/cocktailScreenshot.png";
import gitHubLogo from "../assets/img/github-mark.png";
import linkSymbol from "../assets/img/linkSymbol.png";

const projects = [
  {
    name: "FUTURE FINDER",
    desc: "User-friendly job posting website for employers and job seekers",
    img: futureScreenshot,
    link: "https://future-finder.herokuapp.com/",
    github: "https://github.com/4-non-non-dorks/future-finder",
  },
  {
    name: "FÚTBOLANDIA",
    desc: "Tables, top scorers, and fixtures from football's biggest leagues!",
    img: futbolandiaScreenshot,
    link: "https://williamgeorgethomas.github.io/futbolandia/",
    github: "https://github.com/WilliamGeorgeThomas/futbolandia",
  },
  {
    name: "COCKTAIL WIZARD",
    desc: "Discover cocktails and recipes from a combination of ingredients",
    img: cocktailScreenshot,
    link: "https://high-fivez.github.io/project1/",
    github: "https://github.com/high-fivez/project1",
  },
  {
    name: "WEATHER DASHBOARD",
    desc: "Current weather and five day forecast for cities around the world",
    img: weatherScreenshot,
    link: "https://williamgeorgethomas.github.io/weather-dashboard",
    github: "https://github.com/WilliamGeorgeThomas/weather-dashboard",
  },
];

export default function Project() {
  return (
    <div className="m-6">
      <h2 id="work" className="western text-6xl">
        WORK
      </h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, i) => {
          return (
            <div key={`project_${i}`} className="project-card pulse border-double border-8 border-[#0b132b] rounded-lg w-96 h-96 m-4 bg-[#f7f3e3] p-2">
              <h2 className="text-2xl font-bold text-center sans">{project.name}</h2>
              <p className="text-center sans">{project.desc}</p>
              <div className="border-double border-8 border-[#0b132b] rounded-lg">
                <img src={project.img} alt="screenshot of application" />
              </div>
              <div className="flex justify-center gap-4">
                <div className="project-links wiggle tooltip">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={linkSymbol} alt="internet link symbol" />
                    <span class="tooltiptext sans">Deployed Application</span>
                  </a>
                </div>
                <div className="project-links wiggle tooltip">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <img src={gitHubLogo} alt="GitHub logo" />
                    <span class="tooltiptext sans">GitHub Repository</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
