import { educationItems, experienceItems } from "../data/portfolioData";

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article className="timeline-item" key={item.title + item.place}>
          <p className="card-label">{item.period}</p>
          <h2>{item.title}</h2>
          <h3>{item.place}</h3>
          {item.description && <p>{item.description}</p>}
        </article>
      ))}
    </div>
  );
}

function Education() {
  return (
    <section className="page-panel">
      <p className="section-kicker">EDUCATION & EXPERIENCE</p>
      <h1>My academic and practical journey.</h1>

      <h2 className="timeline-heading">Experience</h2>
      <Timeline items={experienceItems} />

      <h2 className="timeline-heading">Education</h2>
      <Timeline items={educationItems} />

      <article className="achievement-card"><p className="section-kicker">ACHIEVEMENT</p><h2>ReactJS Practical Portfolio</h2><p>Created a multi-page student portfolio to demonstrate syllabus concepts in a professional presentation.</p></article>
    </section>
  );
}

export default Education;
