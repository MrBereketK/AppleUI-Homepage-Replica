import React from "react";
import { Route, Routes } from "react-router-dom";

// Layout (shared header/footer wrapper)
import Layout from "./layouts/Layout";

// Page components (individual product sections)
import HomePage from "./pages/HomePage";
import MacbookPro from "./MacbookPro";
import Iphone11Pro from "./Iphone11Pro";
import Iphone11 from "./Iphone11";
import WatchAndCards from "./WatchAndCards";
import AppleTvAndAirpod from "./AppleTvAndAirpod";
import MacBookProAndIpad from "./MacBookProAndIpad";
import NotFoundPage from "./pages/NotFoundPage";
import PlaceholderPage from "./pages/PlaceholderPage";

/**
 * App — React Router setup demonstrating:
 *
 * 1. Layout Routes   — shared UI via <Layout> + <Outlet />
 * 2. Index Route     — the "/" default showing all sections
 * 3. Named Routes    — each product has its own URL
 * 4. Catch-all Route — "*" for 404 pages
 * 5. NavLink active  — see Header.jsx for active link styling
 * 6. Scroll restore  — see Layout.jsx useEffect
 */
function App() {
  return (
    <Routes>
      {/* Layout route: wraps ALL child routes with Header + Footer */}
      <Route element={<Layout />}>
        {/* Index route: full homepage with all sections */}
        <Route index element={<HomePage />} />

        {/* Individual product routes */}
        <Route path="macbook-pro" element={<MacbookPro />} />
        <Route path="iphone-11-pro" element={<Iphone11Pro />} />
        <Route path="iphone-11" element={<Iphone11 />} />
        <Route path="watch" element={<WatchAndCards />} />
        <Route path="tv" element={<AppleTvAndAirpod />} />
        <Route path="music" element={<AppleTvAndAirpod />} />
        <Route path="support" element={<PlaceholderPage title="Apple Support" description="Welcome to Apple Support. How can we help you?" />} />
        <Route path="search" element={<PlaceholderPage title="Search" description="Search apple.com" />} />
        <Route path="cart" element={<PlaceholderPage title="Your Bag is empty." description="Free delivery and free returns." />} />

        {/* Catch-all 404 route */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
