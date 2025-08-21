import { Outlet } from "react-router";
import { Header } from "./UI/Header";
import { Footer } from "./UI/Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
