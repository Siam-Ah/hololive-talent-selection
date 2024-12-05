import Talent from "./Talent";

export default function Generation({
  generation,
  handleSelectedTalent,
  favourites,
  handleFavourites,
}) {
  return (
    <div className="generation-row">
      <div className="generation-title">
        {generation.generation} ({generation.region})
      </div>
      <div className="talent-row">
        {generation.talents.map((talent) => (
          <Talent
            talent={talent}
            handleSelectedTalent={handleSelectedTalent}
            region={generation.region}
            generation={generation.generation}
            favourites={favourites}
            handleFavourites={handleFavourites}
            key={talent.name}
          />
        ))}
      </div>
    </div>
  );
}
