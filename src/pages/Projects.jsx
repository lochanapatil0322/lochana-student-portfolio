import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolioData";

function Projects() {
  const [selectedType, setSelectedType] = useState("All");
  const projectTypes = ["All", "Web", "Java", "Cyber Security"];
  const visibleProjects = selectedType === "All" ? projects : projects.filter((project) => project.type === selectedType);

  return (
    <section className="page-panel">
      <p className="section-kicker">PROJECTS</p>
      <h1>Practical work, explained simply.</h1>
      <p className="lead-text">Choose a category to filter this project array.</p>
      <div className="filter-row">{projectTypes.map((type) => <button key={type} className={selectedType === type ? "filter-button selected" : "filter-button"} onClick={() => setSelectedType(type)}>{type}</button>)}</div>
      <div className="cards-grid">{visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
      {visibleProjects.length === 0 && <p className="empty-message">No projects match this category.</p>}
    </section>
  );
}

export default Projects;
