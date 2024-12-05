import { useState } from "react";
import Navbar from "./Navbar";
import TalentDetails from "./TalentDetails";
import TalentList from "./TalentList";

export default function App() {
  const [talentSelected, setTalentSelected] = useState(null);
  const [favourites, setFavourites] = useState([]);

  function handleSelectedTalent(talent, generation, region) {
    setTalentSelected({ ...talent, generation: generation, region: region });
  }

  function handleFavourites(talent) {
    setFavourites((prevFavourites) =>
      prevFavourites.includes(talent)
        ? prevFavourites.filter((currTalent) => currTalent !== talent)
        : [...prevFavourites, talent]
    );
  }

  return (
    <div className="container">
      <Navbar />
      {talentSelected && (
        <TalentDetails
          talent={talentSelected}
          favourites={favourites}
          handleFavourites={handleFavourites}
        />
      )}
      <TalentList
        handleSelectedTalent={handleSelectedTalent}
        favourites={favourites}
        handleFavourites={handleFavourites}
      />
    </div>
  );
}
