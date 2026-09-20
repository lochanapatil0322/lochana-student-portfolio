function SkillCard({ name, onRemove }) {
  return (
    <article className="skill-card">
      <span>{name}</span>
      <button className="remove-button" onClick={() => onRemove(name)}>Remove</button>
    </article>
  );
}

export default SkillCard;
