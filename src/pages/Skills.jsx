import { useState } from "react";
import SkillCard from "../components/SkillCard";
import { initialSkills } from "../data/portfolioData";

function Skills() {
  const [skills, setSkills] = useState(initialSkills);
  const [newSkill, setNewSkill] = useState("");

  function addSkill(event) {
    event.preventDefault();
    if (newSkill && !skills.includes(newSkill)) {
      setSkills(skills.concat(newSkill));
      setNewSkill("");
    }
  }

  function removeSkill(skillName) {
    setSkills(skills.filter((skill) => skill !== skillName));
  }

  return (
    <section className="page-panel">
      <p className="section-kicker">SKILLS</p>
      <h1>Skills I am building and using.</h1>
      <p className="lead-text">These cards are displayed from an array using <code>map()</code>. Add a skill to practise state and form events.</p>
      <form className="skill-form" onSubmit={addSkill}>
        <input value={newSkill} onChange={(event) => setNewSkill(event.target.value)} placeholder="Add a skill, for example Git" aria-label="New skill" />
        <button className="primary-button" type="submit">Add skill</button>
      </form>
      <div className="skills-grid">
        {skills.map((skill) => <SkillCard key={skill} name={skill} onRemove={removeSkill} />)}
      </div>
      {skills.length === 0 && <p className="empty-message">No skills are listed yet. Add one above.</p>}
    </section>
  );
}

export default Skills;
