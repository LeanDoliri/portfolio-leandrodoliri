import "./SkillCard.css";

export function SkillCard({ img, title }) {
  return (
    <div className="Card">
      <img src={img} alt={title} />
      <p className="Card-title">{title}</p>
    </div>
  );
}
