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
      <h2 id="work" className="western text-6xl">WORK</h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, i) => {
          return (
            <div key={`project_${i}`} className="border-double border-8 border-[#18435a] rounded-lg w-80 h-80 m-4 bg-[#f7f3e3]">
              <h2 className="text-2xl font-bold text-center sans">{project.name}</h2>
              <p className="text-center sans">{project.desc}</p>
              <img src={project.img} alt="screenshot of application" />
              <div className="flex justify-center">
                <div className="contact-links">
                  <a href={project.link}>
                    <img src={linkSymbol} alt="internet link symbol" />
                  </a>
                </div>
                <div className="contact-links">
                  <a href={project.github}>
                    <img src={gitHubLogo} alt="GitHub logo" />
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
