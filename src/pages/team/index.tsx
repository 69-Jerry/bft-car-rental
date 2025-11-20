import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { Hero } from "./components/hero";
import { OurTeam } from "./components/team";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <Hero />
      <div className="max-w-5xl mx-auto space-y-10">
        <OurTeam />
      </div>
      <Footer/>
    </div>
  );
};

export default TeamPage;
