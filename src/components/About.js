import React from "react";
import flagHeadshot from "../assets/img/flagHeadshot.jpg";

function About() {
  return (
    <section id="about" className="m-6">
      <h2 className="western text-6xl my-6">ABOUT</h2>
      <div className="flex flex-wrap justify-center gap-6 items-center">
        <div className="headshot border-double border-4 border-[#0b132b]">
          <img src={flagHeadshot} alt="headshot with flag" />
        </div>
        <p className="border-double border-4 border-[#0b132b] rounded-lg w-96 sans bg-[#f7f3e3] p-2">Full Stack Web Developer with background in government contracting and international education. Ever curious and seeking new challenges. Experienced in working collaboratively to solve complex problems with tight timelines. Using 4+ years spent living and teaching in Togo, West Africa and Santiago, Chile to bring a unique perspective to the workplace.</p>
      </div>

{/* <div className="scope">
  <span className="scope:1"><img src="https://i.postimg.cc/BQcRL38F/pexels-photo-761963.jpg" alt="not found"/></span>
  <span className="scope:2"><img src="https://i.postimg.cc/1RWVB11x/pexels-photo-941693.jpg" alt="not found"/></span>
  <span className="scope:3"><img src="https://i.postimg.cc/CMfHRKfP/woman-2003647-960-720.jpg" alt="not found"/></span>
  <span className="scope:4"><img src="https://i.postimg.cc/T1rDCpVT/beautiful-1274056-960-720.jpg" alt="not found"/></span>
  <span className="scope:5"><img src="https://i.postimg.cc/SNf99YQr/woman-1807533-960-720.jpg" alt="not found"/></span>
  <span className="scope:6"><img src="https://i.postimg.cc/2SHBcpZL/pexels-photo-4664520.jpg" alt="not found"/></span>
  <span className="scope:7"><img src="https://i.postimg.cc/CxBzNcjw/Opera-Snapshot-2020-07-03-162022-www-freepik-com.png" alt="not found"/></span>
  <span className="scope:8"><img src="https://i.postimg.cc/0QckxSpt/Opera-Snapshot-2020-07-03-161422-www-freepik-com.png" alt="not found"/></span>
</div> */}



    </section>
  );
}

export default About;
