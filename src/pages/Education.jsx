import { educationItems } from "../data/portfolioData";

function Education() {
  return (
    <section className="page-panel">
      <p className="section-kicker">EDUCATION & EXPERIENCE</p>
      <h1>My academic and practical journey.</h1>
      <div className="timeline">
        {educationItems.map((item) => (
          <article className="timeline-item" key={item.title}>
            <p className="card-label">{item.period}</p>
            <h2>{item.title}</h2>
            <h3>{item.place}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <article className="achievement-card"><p className="section-kicker">ACHIEVEMENT</p><h2>ReactJS Practical Portfolio</h2><p>Created a multi-page student portfolio to demonstrate syllabus concepts in a professional presentation.</p></article>
    </section>
  );
}

export default Education;
