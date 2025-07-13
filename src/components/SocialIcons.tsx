import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;
    const spans = Array.from(social.querySelectorAll("span"));
    const cleanups: (() => void)[] = [];
    spans.forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);
        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      elem.addEventListener("mousemove", onMouseMove);
      cleanups.push(() => elem.removeEventListener("mousemove", onMouseMove));
      updatePosition();
    });
    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/Sallam124" target="_blank" rel="noopener" title="GitHub" aria-label="GitHub">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/ahmed-sallam-15522a1a5/" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </span>
        <span>
          <a href="mailto:sallam.a.y.m@gmail.com" target="_blank" rel="noopener" title="Email" aria-label="Email">
            <TbNotes />
          </a>
        </span>
      </div>
      <a className="resume-button" href="/Resume.pdf" target="_blank" rel="noopener" title="Resume" aria-label="Resume">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
