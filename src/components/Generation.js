import Talent from "./Talent";

export default function Generation({ generation }) {
  console.log(generation);
  return (
    <div className="generation-row">
      <div className="generation-title">
        {generation.generation} ({generation.region})
      </div>
      <div className="talent-row">
        {generation.talents.map((talent) => (
          <Talent talent={talent} key={talent.name} />
        ))}
      </div>
    </div>
  );
}
