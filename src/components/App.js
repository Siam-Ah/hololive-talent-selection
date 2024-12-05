import { useState } from "react";
import Navbar from "./Navbar";
import TalentDetails from "./TalentDetails";
import TalentList from "./TalentList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const [talentSelected, setTalentSelected] = useState(null);
  const [favourites, setFavourites] = useState(new Set());

  function handleSelectedTalent(talent, generation, region) {
    setTalentSelected({ ...talent, generation: generation, region: region });
  }

  function handleFavourites(talentName) {
    setFavourites((prevFavourites) => {
      const newFavourites = new Set(prevFavourites);
      if (newFavourites.has(talentName)) {
        newFavourites.delete(talentName);
      } else {
        newFavourites.add(talentName);
      }
      return newFavourites;
    });
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
