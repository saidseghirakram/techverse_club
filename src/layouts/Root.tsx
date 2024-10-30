import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "../components/ui/toaster";

function Root() {
  return (
    <div className="bg-primary min-h-screen">
      <div className="px-8">
        <Navbar />
        <Toaster />
        <div className="pt-16">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Root;
