import type { ReactNode } from "react";
import { NavBar } from "../../components/navigation/NavBar";
import { Footer } from "../../components/navigation/Footer";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="app-main">{children}</main>
      <Footer />
    </div>
  );
};

