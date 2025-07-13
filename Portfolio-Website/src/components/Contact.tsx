import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:sallam.a.y.m@gmail.com" data-cursor="disable">
                sallam.a.y.m@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:01029214349" data-cursor="disable">
                01029214349
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-sallam-15522a1a5/"
              target="_blank"
              rel="noopener"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/ahmed_youssef_sallam/"
              target="_blank"
              rel="noopener"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ahmed Sallam</span>
            </h2>
            <div className="footer-social-links">
              <a href="https://www.linkedin.com/in/ahmed-sallam-15522a1a5/" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn">LinkedIn</a>
              <span> | </span>
              <a href="https://github.com/sallam124" target="_blank" rel="noopener" title="GitHub" aria-label="GitHub">GitHub</a>
              <span> | </span>
              <a href="https://www.instagram.com/ahmed_youssef_sallam/" target="_blank" rel="noopener" title="Instagram" aria-label="Instagram">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
