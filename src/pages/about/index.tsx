
import { Hero } from "./components/hero";
import { DependingOnNeeds } from "./components/Depending On Needs";
import { ServicesGrid } from "./components/our services";
import { WhyChooseUs } from "./components/wcu";
import { SocialMediaConnect } from "./components/cwu";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      
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
