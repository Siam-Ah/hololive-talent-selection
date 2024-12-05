import Navbar from "./Navbar";
import TalentDetails from "./TalentDetails";
import TalentList from "./TalentList";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <TalentDetails />
      <TalentList />
    </div>
  );
}
