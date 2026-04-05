import React, { useState } from 'react';
import './Sidebar.css';

const knowledgeItems = [
  { tag: 'Pandemic', title: 'Ventilation improvements', cat: 'Risk Reduction', type: 'Prevention' },
  { tag: 'Pandemic', title: 'Contact tracing', cat: 'Insurance Penetration', type: 'Prevention' },
  { tag: 'Pandemic', title: 'Annual flu vaccination', cat: 'Risk Financing', type: 'Policy & Governance' },
];

export default function Sidebar({ location, setLocation, riskType, setRiskType }) {
  const [page, setPage] = useState(1);
  const total = 6;

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="section-header">
          <span className="section-title">Location</span>
          <button className="reset-btn">↺ Reset Filters</button>
        </div>

        <select className="select-field" value={location.region} onChange={e => setLocation(l => ({ ...l, region: e.target.value }))}>
          <option>ASEAN</option>
          <option>South Asia</option>
          <option>East Asia</option>
        </select>

        <select className="select-field" value={location.country} onChange={e => setLocation(l => ({ ...l, country: e.target.value }))}>
          <option>Singapore, Thailand</option>
          <option>Vietnam, Cambodia</option>
          <option>Indonesia, Malaysia</option>
        </select>

        <select className="select-field" value={location.province} onChange={e => setLocation(l => ({ ...l, province: e.target.value }))}>
          <option value="">Select Province/State</option>
          <option>Bangkok</option>
          <option>Chiang Mai</option>
        </select>

        <select className="select-field" value={location.county} onChange={e => setLocation(l => ({ ...l, county: e.target.value }))}>
          <option value="">Select County/District</option>
          <option>Pathum Wan</option>
          <option>Bang Rak</option>
        </select>
      </div>

      <div className="sidebar-section">
        <div className="section-title">Risk Type</div>
        <select className="select-field" value={riskType} onChange={e => setRiskType(e.target.value)}>
          <option value="">Risk Type</option>
          <option>Pandemic</option>
          <option>Flood</option>
          <option>Earthquake</option>
          <option>Cyclone</option>
        </select>
        <button className="submit-btn">Submit</button>
      </div>

      <div className="sidebar-section knowledge-section">
        <div className="section-title">Knowledge Repository</div>
        <div className="repo-subtitle">Top 3 Risks + Solutions</div>

        <div className="knowledge-list">
          {knowledgeItems.map((item, i) => (
            <div key={i} className="knowledge-item">
              <span className="k-tag">{item.tag}</span>
              <div className="k-title">{item.title}</div>
              <div className="k-meta">Category: {item.cat}</div>
              <div className="k-meta">Type: {item.type}</div>
              <button className="learn-more">Learn more ›</button>
            </div>
          ))}
        </div>

        <div className="pagination">
          <span className="page-info">{page}/{total}</span>
          <button className="page-btn" onClick={() => setPage(p => Math.max(1, p - 1))}>‹</button>
          <button className="page-btn" onClick={() => setPage(p => Math.min(total, p + 1))}>›</button>
        </div>
      </div>
    </aside>
  );
}
