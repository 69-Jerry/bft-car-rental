import Snowfall from "react-snowfall";
import { Hero } from "./components/hero";
import { OurTeam } from "./components/team";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Snowfall
              snowflakeCount={200}
              style={{
                position: "fixed",
                width: "100vw",
                height: "100vh",
                zIndex: 9999,
                pointerEvents: "none",
              }}
            />
      <Hero />
      <div className="max-w-5xl mx-auto space-y-10">
        <OurTeam />
      </div>
    </div>
  );
};

export default TeamPage;
