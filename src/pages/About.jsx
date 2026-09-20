import { useEffect, useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    document.title = "About | Lochana Patil";
  }, []);

  return (
    <section className="page-panel">
      <p className="section-kicker">ABOUT ME</p>
      <h1>A curious student building a strong web foundation.</h1>
      <p className="lead-text">I am Lochana Patil, a BSc Computer Science student who enjoys understanding how a web page becomes an experience people can use.</p>
      <div className="info-columns">
        <article><h2>Career interests</h2><p>Front-end development, web design, and creating clear interfaces for real student needs, cyber security concepts.</p></article>
        <article><h2>Technical interests</h2><p>ReactJS components, JavaScript logic, responsive CSS, and practical database-backed applications.</p></article>
        <article><h2>Education</h2><p>Currently studying Computer Science and strengthening my skills through practical assignments.</p></article>
      </div>
      {showMore && <div className="more-about"><h2>My approach</h2><p>I prefer simple, readable code and small reusable components. Each project is an opportunity to practise, ask better questions, and become more confident explaining my work.</p></div>}
      <button className="primary-button" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
    </section>
  );
}

export default About;
