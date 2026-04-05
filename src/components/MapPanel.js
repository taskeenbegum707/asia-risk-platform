import React, { useState } from 'react';
import './MapPanel.css';

const mapLayers = [
  { name: 'Thailand', level: 0, visible: true, eye: true },
  { name: 'Exposure', level: 1, visible: true, eye: true },
  { name: 'Demography', level: 2, visible: true, eye: false },
  { name: 'Economy', level: 1, visible: true, eye: true },
  { name: 'GDP', level: 2, visible: true, eye: false },
  { name: 'GDP per Capital', level: 2, visible: true, eye: true },
  { name: 'Population', level: 1, visible: true, eye: false },
];

export default function MapPanel() {
  const [layers, setLayers] = useState(mapLayers);
  const [layerOpen, setLayerOpen] = useState(true);
  const [year, setYear] = useState(2021);

  const toggleEye = (i) => {
    setLayers(prev => prev.map((l, idx) => idx === i ? { ...l, eye: !l.eye } : l));
  };

  return (
    <div className="map-panel">
      {/* Map toolbar */}
      <div className="map-toolbar">
        <button className="tool-btn active" title="Search">🔍</button>
        <button className="tool-btn" title="Zoom In">+</button>
        <button className="tool-btn" title="Zoom Out">−</button>
        <button className="tool-btn" title="Home">⌂</button>
        <button className="tool-btn" title="Location">◎</button>
      </div>

      <div className="map-toolbar right-toolbar">
        <button className="tool-btn" title="Layers">⊞</button>
        <button className="tool-btn" title="Grid">⊟</button>
        <button className="tool-btn" title="Legend">≡</button>
        <button className="tool-btn" title="Filter">⊙</button>
        <button className="tool-btn" title="Print">⎙</button>
        <button className="tool-btn" title="Export">↑</button>
      </div>

      {/* SVG Map */}
      <div className="map-bg">
        <svg viewBox="0 0 660 540" className="map-svg" preserveAspectRatio="xMidYMid meet">
          {/* Background sea */}
          <rect width="660" height="540" fill="#a8d5e2" opacity="0.4"/>

          {/* Myanmar outline */}
          <path d="M 200 60 L 240 55 L 270 70 L 285 100 L 290 140 L 280 170 L 260 190 L 240 210 L 230 240 L 220 260 L 200 270 L 185 250 L 180 220 L 185 190 L 175 160 L 170 130 L 175 100 L 190 75 Z"
            fill="#c8d9a0" stroke="#a0b870" strokeWidth="1.5" opacity="0.7"/>
          <text x="218" y="155" fontSize="9" fill="#5a7a40" fontWeight="500">MYANMAR</text>
          <text x="218" y="167" fontSize="8" fill="#5a7a40">(BURMA)</text>

          {/* Laos */}
          <path d="M 310 80 L 340 75 L 370 90 L 380 120 L 375 150 L 360 175 L 345 195 L 330 210 L 315 200 L 300 185 L 290 160 L 295 130 L 305 105 Z"
            fill="#d4e8a0" stroke="#a0b870" strokeWidth="1.5" opacity="0.7"/>
          <text x="325" y="150" fontSize="9" fill="#5a7a40" fontWeight="500">LAOS</text>

          {/* Vietnam */}
          <path d="M 375 90 L 410 85 L 430 100 L 440 130 L 445 160 L 450 190 L 455 220 L 450 250 L 440 275 L 430 285 L 415 270 L 405 245 L 395 220 L 385 195 L 375 170 L 365 148 L 365 120 L 370 100 Z"
            fill="#c5e0a0" stroke="#a0b870" strokeWidth="1.5" opacity="0.7"/>
          <text x="415" y="180" fontSize="9" fill="#5a7a40" fontWeight="500">VIETNAM</text>

          {/* Cambodia */}
          <path d="M 340 220 L 380 215 L 395 225 L 400 250 L 395 270 L 375 280 L 350 278 L 330 265 L 325 245 L 330 230 Z"
            fill="#dde8b0" stroke="#a0b870" strokeWidth="1.5" opacity="0.7"/>
          <text x="355" y="252" fontSize="8" fill="#5a7a40">CAMBODIA</text>

          {/* Thailand - main body highlighted green */}
          <path d="M 230 250 L 250 235 L 270 225 L 295 218 L 318 215 L 328 228 L 320 250 L 310 270 L 305 295 L 300 320 L 295 345 L 285 365 L 275 380 L 265 395 L 255 410 L 248 425 L 252 440 L 260 450 L 265 460 L 255 465 L 245 455 L 238 440 L 235 420 L 238 400 L 242 375 L 240 350 L 232 330 L 220 310 L 215 285 L 220 265 Z"
            fill="#2d7a4f" stroke="#1a5c38" strokeWidth="1.5" opacity="0.9"/>

          {/* Thailand north region - lighter */}
          <path d="M 230 175 L 255 165 L 285 160 L 295 175 L 295 200 L 285 218 L 270 225 L 250 235 L 232 245 L 220 240 L 210 225 L 215 205 L 222 188 Z"
            fill="#3a8a5f" stroke="#1a5c38" strokeWidth="1.5" opacity="0.9"/>

          {/* Thailand northeast */}
          <path d="M 295 175 L 315 165 L 335 170 L 345 185 L 340 205 L 325 215 L 305 218 L 295 205 Z"
            fill="#4a9a6f" stroke="#1a5c38" strokeWidth="1.5" opacity="0.9"/>

          {/* Thailand label */}
          <text x="270" y="320" fontSize="16" fill="white" fontWeight="700" textAnchor="middle" opacity="0.95">THAILAND</text>

          {/* Bangkok dot */}
          <circle cx="295" cy="355" r="5" fill="#ffc107" stroke="white" strokeWidth="1.5"/>
          <text x="305" y="360" fontSize="9" fill="white" fontWeight="600">Bangkok</text>

          {/* Vientiane dot */}
          <circle cx="338" cy="198" r="4" fill="#ffc107" stroke="white" strokeWidth="1.5"/>
          <text x="348" y="202" fontSize="8" fill="#3d4f63">Vientiane</text>

          {/* Country labels context */}
          <text x="155" y="75" fontSize="8" fill="#5a7a40">Guwahati</text>
          <text x="135" y="120" fontSize="8" fill="#5a7a40">Dhaka</text>
          <text x="140" y="180" fontSize="8" fill="#5a7a40">Kolkata</text>
          <text x="135" y="230" fontSize="8" fill="#5a7a40">Chittagong</text>
          <text x="195" y="310" fontSize="8" fill="#5a7a40">Naypyidaw</text>
          <text x="192" y="360" fontSize="8" fill="#5a7a40">Yangon</text>
          <text x="415" y="140" fontSize="8" fill="#5a7a40">Kunming</text>
          <text x="442" y="248" fontSize="8" fill="#5a7a40">Da Nang</text>
          <text x="452" y="305" fontSize="8" fill="#5a7a40">Ho Chi</text>
          <text x="452" y="315" fontSize="8" fill="#5a7a40">Minh City</text>
          <text x="360" y="308" fontSize="8" fill="#5a7a40">Phnom Penh</text>

          {/* Mandalay */}
          <text x="195" y="228" fontSize="8" fill="#5a7a40">Mandalay</text>

          {/* Nan Ning */}
          <text x="395" y="93" fontSize="8" fill="#5a7a40">Nanning</text>

          {/* Gulf labels */}
          <text x="175" y="400" fontSize="8" fill="#4a9eed" fontStyle="italic">Andaman</text>
          <text x="175" y="412" fontSize="8" fill="#4a9eed" fontStyle="italic">Sea</text>
          <text x="320" y="430" fontSize="8" fill="#4a9eed" fontStyle="italic">Gulf of</text>
          <text x="315" y="442" fontSize="8" fill="#4a9eed" fontStyle="italic">Thailand</text>
          <text x="455" y="150" fontSize="7" fill="#4a9eed" fontStyle="italic">Gulf of</text>
          <text x="455" y="160" fontSize="7" fill="#4a9eed" fontStyle="italic">Tonkin</text>

          {/* Malaysia */}
          <path d="M 245 470 L 280 462 L 310 460 L 335 462 L 340 475 L 320 485 L 290 488 L 260 485 L 245 475 Z"
            fill="#c8d9a0" stroke="#a0b870" strokeWidth="1.5" opacity="0.7"/>
          <text x="270" y="480" fontSize="7" fill="#5a7a40">MALAYSIA</text>
          <text x="265" y="510" fontSize="7" fill="#5a7a40">Kuala...</text>

          {/* Georgetown */}
          <text x="240" y="492" fontSize="7" fill="#5a7a40">Georgetown</text>
          <text x="285" y="520" fontSize="7" fill="#5a7a40">Medan</text>

          {/* Map navigation arrows */}
        </svg>

        {/* Navigation arrows */}
        <button className="nav-arrow left-arrow">‹</button>
        <button className="nav-arrow right-arrow">›</button>
      </div>

      {/* Map Layers panel */}
      {layerOpen && (
        <div className="map-layers-panel">
          <div className="layers-header">
            <span className="layers-title">Map Layers</span>
            <button className="layers-close" onClick={() => setLayerOpen(false)}>−</button>
          </div>
          <div className="layers-list">
            {layers.map((layer, i) => (
              <div key={i} className="layer-row" style={{ paddingLeft: layer.level * 12 }}>
                {layer.level > 0 && <span className="layer-arrow">›</span>}
                <span className="layer-name">{layer.name}</span>
                <button className="eye-btn" onClick={() => toggleEye(i)}>
                  {layer.eye ? '👁' : '🚫'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="map-legend">
        <div className="legend-header">Legend</div>
        <div className="legend-items">
          <div className="legend-item">
            <div className="legend-dot" style={{ background: '#ff9800' }}></div>
            <span>Thailand (21 B)</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot" style={{ background: '#ffd700' }}></div>
            <span>Singapore (16 B)</span>
          </div>
        </div>
        <div className="legend-scale">
          <div className="scale-bar"></div>
          <div className="scale-labels">
            <span>Low</span><span>Moderate</span><span>High</span>
          </div>
          <div className="scale-numbers">
            <span>2000</span><span>5000</span><span>8000</span><span>12000</span><span>50000+</span>
          </div>
        </div>
      </div>

      {/* Year timeline */}
      <div className="map-timeline">
        <span className="timeline-year">2021</span>
        <input
          type="range" min="2021" max="2025" value={year}
          onChange={e => setYear(Number(e.target.value))}
          className="timeline-slider"
        />
        <span className="timeline-year">2025</span>
      </div>
    </div>
  );
}
