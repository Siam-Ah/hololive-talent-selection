export default function Talent({
  talent,
  generation,
  region,
  handleSelectedTalent,
  favourites,
  handleFavourites,
}) {
  return (
    <div
      className="grid-item"
      onClick={() => handleSelectedTalent(talent, generation, region)}
    >
      <span
        className="favorite-heart"
        onClick={(e) => {
          e.stopPropagation();
          handleFavourites(talent.name);
        }}
      >
        {favourites.has(talent.name) ? "❤️" : "🤍"}
      </span>
      <img src={talent.avatar} alt={talent.name} loading="lazy" />
      <div className="grid-name">{talent.name}</div>
    </div>
  );
}
