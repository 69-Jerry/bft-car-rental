
import { Outlet } from "react-router-dom";
import  Navbar  from "../../components/navbar";
import { Toaster } from "../../components/ui/toaster";
import { Footer } from "../../components/footer";

function LandingLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Toaster />
      <Footer/>
    </div>
  );
}

export default LandingLayout;