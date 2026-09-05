import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import SlowTrailsIndia from "./SlowTrailsIndia.jsx";
import BundelkhandPage from "./itineraries/BundelkhandPage.jsx";
import ItineraryPage from "./itineraries/bundelkhand/ItineraryPage.jsx";
import BediaPledgePage from "./itineraries/bundelkhand/BediaPledgePage.jsx";
import AccommodationPage from "./itineraries/bundelkhand/AccommodationPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import CommunityCharterPage from "./pages/CommunityCharterPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SlowTrailsIndia />} />
        <Route path="/bundelkhand" element={<BundelkhandPage />} />
        <Route path="/bundelkhand/itinerary" element={<ItineraryPage />} />
        <Route path="/bundelkhand/bedia-pledge" element={<BediaPledgePage />} />
        <Route path="/bundelkhand/accommodation" element={<AccommodationPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/community-charter" element={<CommunityCharterPage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}
