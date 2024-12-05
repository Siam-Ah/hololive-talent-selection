import Generation from "./Generation";
import Button from "./Button";
import { useEffect, useMemo, useState } from "react";

export default function TalentList({
  handleSelectedTalent,
  favourites,
  handleFavourites,
}) {
  const [talentData, setTalentData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    fetch("hololive_talents.json")
      .then((response) => response.json())
      .then((data) => setTalentData(data))
      .catch((error) => console.log("Error fetching data: ", error));
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // Delay for 500ms

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount or before next effect
  }, [search]);

  const filteredTalentData = useMemo(() => {
    return talentData
      .map((generation) => {
        if (filter === "All") return generation;
        if (filter === "Favourites") {
          const favouriteTalents = generation.talents.filter((talent) =>
            favourites.has(talent.name)
          );
          if (favouriteTalents.length > 0) {
            return { ...generation, talents: favouriteTalents };
          }
          return null;
        }

        if (filter === "JP" || filter === "EN" || filter === "ID") {
          return generation.region === filter ? generation : null;
        }
        return null;
      })
      .filter(Boolean)
      .map((generation) => {
        const filteredTalents = generation.talents.filter((talent) =>
          talent.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        );
        if (filteredTalents.length > 0) {
          return { ...generation, talents: filteredTalents };
        }
        return null;
      })
      .filter(Boolean);
  }, [talentData, filter, favourites, debouncedSearch]);

  function onAll() {
    setFilter("All");
  }

  function onFavourites() {
    setFilter("Favourites");
  }

  function onJP() {
    setFilter("JP");
  }

  function onEN() {
    setFilter("EN");
  }

  function onID() {
    setFilter("ID");
  }

  return (
    <div>
      <div className="button-group">
        <Button
          className={filter === "All" ? "active" : "button"}
          onClick={onAll}
        >
          All
        </Button>
        <Button
          className={filter === "Favourites" ? "active" : "button"}
          onClick={onFavourites}
        >
          Favourites
        </Button>
        <Button
          className={filter === "JP" ? "active" : "button"}
          onClick={onJP}
        >
          JP
        </Button>
        <Button
          className={filter === "EN" ? "active" : "button"}
          onClick={onEN}
        >
          EN
        </Button>
        <Button
          className={filter === "ID" ? "active" : "button"}
          onClick={onID}
        >
          ID
        </Button>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for a talent..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="talent-grid">
        {filteredTalentData.map((generation) => (
          <Generation
            generation={generation}
            handleSelectedTalent={handleSelectedTalent}
            favourites={favourites}
            handleFavourites={handleFavourites}
            key={`${generation.region}-${generation.generation}`}
          />
        ))}
      </div>
    </div>
  );
}
