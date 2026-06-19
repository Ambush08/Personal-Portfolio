import "./Skills.css";
export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container expertise-container">
        <div className="skills-intro">
          <h3 className="skills-title">My Skills</h3>
          <p className="skills-info">My Expertise</p>
        </div>
        <div className="skills-container">
          <div className="skill-card">
            <div className="skill-card-icon">
              <i class="fa-brands fa-react"></i>
            </div>
            <div className="skill-card-info">
              <h3 className="skill-name">Front-End</h3>
              <p className="skill-description">
                Develop fast, responsive, and user-friendly interfaces with clean, maintainable code and modern front-end frameworks.
              </p>
            </div>
            <div className="skill-tech">
              <ul className="skill-list">
                <li className="skill-list-icon">
                  <i class="fa-brands fa-react"></i>
                </li>
                <li className="skill-list-icon">
                  <i class="fa-brands fa-html5"></i>
                </li>
                <li className="skill-list-icon">
                  <i class="fa-brands fa-css"></i>
                </li>
              </ul>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-icon">
              <i class="fa-solid fa-server"></i>
            </div>
            <div className="skill-card-info">
              <h3 className="skill-name">Back-End</h3>
              <p className="skill-description">
                Develop robust server-side applications, REST APIs, database integrations, and secure authentication systems for modern web applications.
              </p>
            </div>
            <div className="skill-tech">
              <ul className="skill-list">
                <li className="skill-list-icon">
                  <i class="fa-solid fa-server"></i>
                </li>
                <li className="skill-list-icon">
                  <i class="fa-solid fa-database"></i>
                </li>
                <li className="skill-list-icon">
                  <i class="fa-brands fa-node-js"></i>
                </li>
              </ul>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-icon">
              <i class="fa-solid fa-feather"></i>
            </div>
            <div className="skill-card-info">
              <h3 className="skill-name">UX/UI Design</h3>
              <p className="skill-description">
                Create clean, responsive, and user-friendly interfaces with a strong focus on usability, accessibility, and visual consistency.
              </p>
            </div>
            <div className="skill-tech">
              <ul className="skill-list">
                <li className="skill-list-icon">
                  <i class="fa-brands fa-figma"></i>
                </li>
                <li className="skill-list-icon">
                  <i class="fa-solid fa-paintbrush"></i>
                </li>
                <li className="skill-list-icon">
                  <i class="fa-brands fa-behance"></i>
                </li>
              </ul>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-card-icon">
              <i class="fa-brands fa-wordpress"></i>
            </div>
            <div className="skill-card-info">
              <h3 className="skill-name">Wordpress</h3>
              <p className="skill-description">
                Build responsive, SEO-optimized WordPress websites with custom themes, plugins, payment integration and performance optimization.
              </p>
            </div>
            <div className="skill-tech">
              <ul className="skill-list">
                <li className="skill-list-icon">
                  <i class="fa-brands fa-wordpress"></i>
                </li>
                <li className="skill-list-icon">
                 <i class="fa-brands fa-elementor"></i>
                </li>
                <li className="skill-list-icon">
                  <i class="fa-brands fa-envira"></i>
                </li>
              </ul>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
