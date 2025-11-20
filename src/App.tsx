import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing page";
import About from "./pages/about";
import { AllServices } from "./pages/services";
import { ContactUs } from "./pages/contact";
import TeamPage from "./pages/team";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<AllServices />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/team" element={<TeamPage />} />
    </Routes>
  );
}

export default App;
