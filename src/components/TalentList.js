import Generation from "./Generation";
import { useEffect, useState } from "react";

export default function TalentList() {
  const [talentData, setTalentData] = useState([]);

  useEffect(() => {
    fetch("hololive_talents.json")
      .then((response) => response.json())
      .then((data) => setTalentData(data))
      .catch((error) => console.log("Error fetching data: ", error));
  }, []);

  return (
    <div className="talent-grid">
      {talentData.map((generation) => (
        <Generation generation={generation} key={crypto.randomUUID()} />
      ))}
    </div>
  );
}
