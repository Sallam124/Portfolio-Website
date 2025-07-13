import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Coding Instructor & Overseer</h4>
                <h5>Codex Coding Camp</h5>
              </div>
              <h3>Jun 24 - Jul 24</h3>
            </div>
            <p>
              Taught Python to students aged 10-15, using the Turtle module for visual and game-based learning. Guided students in creating games, encouraged problem-solving, and enabled hands-on learning through incremental challenges. Collaborated with camp staff to integrate coding activities into broader camp themes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mobile Application Development</h4>
                <h5>Viva Journal</h5>
              </div>
              <h3>Feb 25 - Apr 25</h3>
            </div>
            <p>
              Designed UI in Figma, built a Flutter app with sign-up, sign-in, calendar, and reset password. Integrated Firebase for auth and real-time data. Used SharedPreferences for persistent login. Improved data speed with SQLite caching and implemented async operations for responsiveness.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Full Stack Developer</h4>
                <h5>Website Building Agency</h5>
              </div>
              <h3>Apr 25 - Now</h3>
            </div>
            <p>
              Built and deployed multiple responsive, SEO-optimized websites for clients. Handled full-stack development, UI/UX, frontend/backend logic, database integration, and domain setup. Specialized in lead generation, SEO landing pages, and page speed optimization. Managed client communication, branding, and long-term maintenance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
