import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import DevCredit from "../DevCredit";

/**
 * Layout component — shared wrapper that persists across all routes.
 * Uses <Outlet /> to render the matched child route's component.
 * This is a key React Router concept: "layout routes".
 */
export default function Layout() {
  const location = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
      <DevCredit />
    </>
  );
}
