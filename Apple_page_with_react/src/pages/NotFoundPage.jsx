import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <section className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <p className="not-found-title">Page Not Found</p>
        <p className="not-found-desc">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="not-found-link">
          Go back to Apple Home &gt;
        </Link>
      </div>
    </section>
  );
}
