import { Outlet } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";

const MainLayout = () => {

  return (

    <div className="min-h-screen bg-slate-50">

      <TopNavbar />

      <main className="p-6">

        <Outlet />

      </main>

    </div>

  );

};

export default MainLayout;