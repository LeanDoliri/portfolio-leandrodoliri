import "./SkillCard.css";

export function SkillCard({ img, title }) {
  return (
    <div className="SkillCard">
      <img src={img} alt={title} />
      <p className="Card-title">{title}</p>
    </div>
  );
}
