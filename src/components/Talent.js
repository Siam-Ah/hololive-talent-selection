export default function Talent({ talent }) {
  return (
    <div className="grid-item">
      <span className="favorite-heart">🤍</span>
      <img src={talent.avatar} alt={talent.name} />
      <div className="grid-name">{talent.name}</div>
    </div>
  );
}
