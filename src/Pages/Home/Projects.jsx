import './Projects.css';

export function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container projects-container">
        <div className="projects-header">
          <h3 className="project-title">My Projects</h3>
          <h2 className="project-info">My Portfolio</h2>
        </div>

        <div className="my-projects">
          <div className="my-projects-container">
            <div className="project-card">
              <div className="my-project-img">
                <img src="./img/placeholder-image.png" alt="website image" />
              </div>

              <div className="my-project-info">
                <h3 className="project-name">Portfolio</h3>
                <p className="project-description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Optio incidunt, excepturi expedita dolor dolorem fugiat.
                </p>
              </div>
              <div className="github-link">
                <a href="#">View My GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <div className="my-project-img">
                <img src="./img/placeholder-image-1.png" alt="website image" />
              </div>

              <div className="my-project-info">
                <h3 className="project-name">Dashboard</h3>
                <p className="project-description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Optio incidunt, excepturi expedita dolor dolorem fugiat.
                </p>
              </div>
              <div className="github-link">
                <a href="#">View My GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <div className="my-project-img">
                <img src="./img/placeholder-image-2.png" alt="website image" />
              </div>

              <div className="my-project-info">
                <h3 className="project-name">Ecommerce</h3>
                <p className="project-description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Optio incidunt, excepturi expedita dolor dolorem fugiat.
                </p>
              </div>
              <div className="github-link">
                <a href="#">View My GitHub</a>
              </div>
            </div>
          </div>
            <button className="btn btn-github">
                Visit my Github
            </button>
        </div>
      </div>
    </section>
  );
}
