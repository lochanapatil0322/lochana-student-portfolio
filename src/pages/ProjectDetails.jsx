import { Link, useParams } from "react-router-dom";
import { projects } from "../data/portfolioData";

const isRealLink = (url) => typeof url === "string" && url.startsWith("http");

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return <section className="page-panel"><h1>Project not found</h1><Link className="text-link" to="/projects">Return to projects</Link></section>;
  }

  return (
    <section className="page-panel detail-panel">
      <p className="section-kicker">{project.type} PROJECT</p>
      <h1>{project.title}</h1>
      <p className="lead-text">{project.description}</p>
      <div className="detail-box"><h2>Technologies used</h2><p>{project.technologies}</p></div>
      <div className="detail-box"><h2>What this project demonstrates</h2><p>{project.details}</p></div>
      <div className="button-row project-links">
        {isRealLink(project.liveUrl) && <a className="primary-button" href={project.liveUrl} target="_blank" rel="noreferrer">View live project</a>}
        {isRealLink(project.githubUrl) && <a className="secondary-button" href={project.githubUrl} target="_blank" rel="noreferrer">View on GitHub</a>}
        <Link className="secondary-button" to="/projects">Back to projects</Link>
      </div>
    </section>
  );
}

export default ProjectDetails;
