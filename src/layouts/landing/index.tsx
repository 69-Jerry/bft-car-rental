import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
import { Toaster } from "../../components/ui/toaster";
import { Footer } from "../../components/footer";
import { Analytics } from "@vercel/analytics/react";

function LandingLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Toaster />
      <Footer />
      <Analytics />
    </div>
  );
}

export default LandingLayout;
