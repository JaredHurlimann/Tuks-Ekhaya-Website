import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../features/home/HomePage";
import { AboutPage } from "../../features/about/AboutPage";
import { LifeAtEkhayaPage } from "../../features/life/LifeAtEkhayaPage";
import { EventsPage } from "../../features/events/EventsPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/life-at-ekhaya" element={<LifeAtEkhayaPage />} />
      <Route path="/events" element={<EventsPage />} />
    </Routes>
  );
};

