"use client";

import "../styles/hamburger-icon.css";

export default function AnimatedHamburger({ open, onClick }) {
    return (
        <div
            className={`hamburger-icon ${open ? "open" : ""}`}
            onClick={onClick}
        >
            <div className="line line1 bg-gray-800"></div>
            <div className="line line2 bg-gray-800"></div>
        </div>
    );
}
