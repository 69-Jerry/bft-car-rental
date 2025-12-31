import { Routes, Route,  } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Analytics } from "@vercel/analytics/react";

const LandingPage = lazy(() => import("./pages/landing page"));
const About = lazy(() => import("./pages/about"));
const AllServices = lazy(() => import("./pages/services"));
const ContactUs = lazy(() => import("./pages/contact"));
const TeamPage = lazy(() => import("./pages/team"));
import LandingLayout from "./layouts/landing";
import Loader from "./components/loader";
import SalesSection from "./pages/sales";
import DiasporaPage from "./pages/diaspora";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LandingLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<AllServices />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="sales" element={<SalesSection/>} />
            <Route path="diaspora" element={<DiasporaPage/>} />
          </Route>
        </Routes>
      </Suspense>
      <Analytics />
    </>
  );
}

export default App;
