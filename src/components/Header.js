import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <div className="logo-globe">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="17" stroke="#2979d4" strokeWidth="2" fill="#0d1f3c"/>
            <ellipse cx="18" cy="18" rx="8" ry="17" stroke="#2979d4" strokeWidth="1.2" fill="none"/>
            <line x1="1" y1="18" x2="35" y2="18" stroke="#2979d4" strokeWidth="1.2"/>
            <line x1="2" y1="11" x2="34" y2="11" stroke="#2979d4" strokeWidth="1"/>
            <line x1="2" y1="25" x2="34" y2="25" stroke="#2979d4" strokeWidth="1"/>
          </svg>
        </div>
        <div className="logo-text">
          <span className="logo-title">Asia Risk Platform</span>
          <span className="logo-sub">Revolutionising Risk Management for a Safer Asia</span>
        </div>
      </div>

      <nav className="header-nav">
        <a href="#" className="nav-link active">Risk Database</a>
        <a href="#" className="nav-link">Risk Assessment Tool</a>
        <a href="#" className="nav-link">Knowledge Repository</a>
      </nav>

      <div className="header-user">
        <div className="avatar">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="14" fill="#e8ecf1"/>
            <circle cx="14" cy="11" r="5" fill="#7a8a9e"/>
            <ellipse cx="14" cy="23" rx="9" ry="5" fill="#7a8a9e"/>
          </svg>
        </div>
        <span className="user-name">Ida Farida</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 4l4 4 4-4" stroke="#3d4f63" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    </header>
  );
}
