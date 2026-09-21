import { Link } from "react-router-dom";
import ProfilePhoto from "../components/ProfilePhoto";
import ProjectCard from "../components/ProjectCard";
import { initialSkills, profile, projects } from "../data/portfolioData";

function Home() {
  const featuredProjects = projects.filter((project) => project.type === "Web" || project.type === "Cyber Security");

  return (
    <>
      <section className="profile-card hero-card">
        <div className="cover-banner"></div>
        <div className="profile-main">
          <ProfilePhoto />
          <div className="profile-copy">
            <p className="eyebrow">STUDENT PROFILE</p>
            <h1>{profile.name}</h1>
            <p className="headline">{profile.headline}</p>
            <p className="location">{profile.location}</p>
            <div className="button-row">
              <a className="primary-button" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="secondary-button" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="secondary-button" href={`mailto:${profile.email}`}>Email</a>
              <Link className="secondary-button" to="/projects">View projects</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="content-grid">
        <article className="section-card about-preview">
          <p className="section-kicker">ABOUT</p>
          <h2>Learning with purpose.</h2>
          <p>I am a Motivated BSc Computer Science student with basic data skills. Familiar with Python, SQL, Excel, and data analysis. Good at organizing things and working with data. Looking forward to learning and gaining practical experience.</p>
          <Link className="text-link" to="/about">Read my story</Link>
        </article>
        <article className="section-card">
          <p className="section-kicker">TOP SKILLS</p>
          <div className="tag-list">{initialSkills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
          <Link className="text-link" to="/skills">Explore skills</Link>
        </article>
      </section>

      <section className="section-block">
        <div className="section-heading"><div><p className="section-kicker">FEATURED WORK</p><h2>Projects I am proud to explain.</h2></div><Link className="text-link" to="/projects">See all</Link></div>
        <div className="cards-grid">{featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
      </section>

      <section className="section-card education-preview">
        <div><p className="section-kicker">EDUCATION</p><h2>BSc Computer Science</h2><p>Mulund College Of Commerce, Mumbai University · 2024 - Present</p></div>
        <Link className="secondary-button" to="/education">View education</Link>
      </section>
    </>
  );
}

export default Home;
