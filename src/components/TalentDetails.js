export default function TalentDetails({
  talent,
  favourites,
  handleFavourites,
}) {
  return (
    <div className="talent-card">
      <div
        className="favorite-icon"
        onClick={() => handleFavourites(talent.name)}
      >
        {favourites.includes(talent.name) ? "❤️" : "🤍"}
      </div>
      <img
        src={talent.avatar}
        className="talent-detail-img"
        alt="talent-image"
      />
      <div className="name-container">
        <div className="name">{talent.name}</div>
      </div>
      <div className="details">
        <span>Region: {talent.region}</span>
        <span>Generation: {talent.generation}</span>
        <span>Debut date: {talent.debutDate}</span>
      </div>
    </div>
  );
}
