import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <p className="card-label">{project.type}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="technology-text"><strong>Technologies:</strong> {project.technologies}</p>
      <Link to={`/projects/${project.id}`} className="text-link">View project details</Link>
    </article>
  );
}

export default ProjectCard;
