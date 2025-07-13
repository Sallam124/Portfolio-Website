import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  // Calculate the total scrollable width for pinning
  const workFlex = document.querySelector('.work-flex');
  const viewportWidth = window.innerWidth;
  let scrollWidth = workFlex ? workFlex.scrollWidth : translateX;
  let pinEnd = (scrollWidth - viewportWidth + 200) / 150; // Even faster horizontal scroll

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${pinEnd}`,
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);

const projects = [
  {
    name: "Viva Journal",
    stack: "Flutter, Dart, Firebase, SQLite",
    type: "Mobile",
    image: "/images/project-1.jpeg",
    date: "Feb 2025 - Apr 2025",
  },
  {
    name: "Passion Interior",
    stack: "Next.js, React, Tailwind CSS, Node.js, Vercel",
    type: "Web",
    image: "/images/project-3.png",
    date: "Prototype",
  },
  {
    name: "Enzo",
    stack: "Next.js, React, Tailwind CSS, Node.js, Vercel",
    type: "Web",
    image: "/images/project-2.png",
    date: "2025",
  },
  {
    name: "Elvado",
    stack: "Next.js, React, Tailwind CSS, Node.js, Vercel",
    type: "Web",
    image: "/images/project-5.png",
    date: "2025",
  },
  {
    name: "POS System",
    stack: "Python, Kivy, MongoDB",
    type: "Desktop Application",
    image: "/images/project-4.png",
    date: "Feb 2024 - Apr 2024",
  },
];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.type}</p>
                  </div>
                </div>
                <h4>Stack</h4>
                <p>{project.stack}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
