
import { Hero } from "./components/hero";
import { DependingOnNeeds } from "./components/Depending On Needs";
import { ServicesGrid } from "./components/our services";
import { WhyChooseUs } from "./components/wcu";
import { SocialMediaConnect } from "./components/cwu";
import Snowfall from "react-snowfall";

const AboutPage = () => {
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
        <DependingOnNeeds />
        <ServicesGrid />
        <WhyChooseUs />
        <SocialMediaConnect />
      </div>
    </div>
  );
};

export default AboutPage;
