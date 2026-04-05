import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MapPanel from './components/MapPanel';
import RightPanel from './components/RightPanel';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('Incident');
  const [fromYear, setFromYear] = useState('2021');
  const [toYear, setToYear] = useState('2025');
  const [location, setLocation] = useState({ region: 'ASEAN', country: 'Singapore, Thailand', province: '', county: '' });
  const [riskType, setRiskType] = useState('');

  return (
    <div className="app-shell">
      <Header />
      <div className="app-body">
        <Sidebar location={location} setLocation={setLocation} riskType={riskType} setRiskType={setRiskType} />
        <MapPanel />
        <RightPanel
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          fromYear={fromYear}
          setFromYear={setFromYear}
          toYear={toYear}
          setToYear={setToYear}
        />
      </div>
      <footer className="app-footer">Copyright © 2025 Asia Risk Platform. All rights reserved.</footer>
    </div>
  );
}
