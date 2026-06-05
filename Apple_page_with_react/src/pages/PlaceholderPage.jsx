import React from 'react';
import './PlaceholderPage.css';

export default function PlaceholderPage({ title, description }) {
  return (
    <section className="placeholder-page">
      <div className="placeholder-content">
        <h1 className="placeholder-title">{title}</h1>
        <p className="placeholder-desc">{description}</p>
      </div>
    </section>
  );
}
