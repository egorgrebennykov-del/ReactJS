import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <div className="projects section" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>
                Discover Our <em>Work</em> &amp; <span>Projects</span>
              </h2>
              <div className="line-dec" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doers eiusmod.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="projects-grid">
              <ProjectCard
                title="Digital Agency HTML Templates"
                imageURL="assets/images/projects-01.jpg"
              />
              <ProjectCard
                title="Admin Dashboard CSS Templates"
                imageURL="assets/images/projects-02.jpg"
              />
              <ProjectCard
                title="Best Responsive Website Layouts"
                imageURL="assets/images/projects-03.jpg"
              />
              <ProjectCard
                title="HTML CSS Layouts for your websites"
                imageURL="assets/images/projects-04.jpg"
              />
              <ProjectCard
                title="Bootstrap 5 Themes for Free"
                imageURL="assets/images/projects-05.jpg"
              />
              <ProjectCard
                title="Mobile Friendly Website Layouts"
                imageURL="assets/images/projects-03.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
