import React from 'react';
import DiseaseLineChart from './DiseaseLineChart';
import FrequencyHeatmap from './FrequencyHeatmap';
import DataTable from './DataTable';
import {
  deathIntensityVectorBorne, deathIntensityRespiratory, deathIntensityZoonotic,
  caseIntensityVectorBorne, caseIntensityRespiratory, caseIntensityZoonotic,
  frequencyVectorBorne, frequencyRespiratory, frequencyZoonotic,
} from '../data/chartData';
import './RightPanel.css';

const TABS = ['Exposure', 'Loss', 'Incident', 'Protection Gap', 'Insurance'];
const YEARS = ['2021', '2022', '2023', '2024', '2025'];

export default function RightPanel({ activeTab, setActiveTab, fromYear, setFromYear, toYear, setToYear }) {
  return (
    <aside className="right-panel">
      {/* Tab bar */}
      <div className="tab-bar">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Year filter */}
      <div className="year-filter-row">
        <div className="year-filter">
          <label>From Year</label>
          <select value={fromYear} onChange={e => setFromYear(e.target.value)}>
            {YEARS.map(y => <option key={y}>{y}</option>)}
          </select>
        </div>
        <span className="year-to">To</span>
        <div className="year-filter">
          <label>To Year</label>
          <select value={toYear} onChange={e => setToYear(e.target.value)}>
            {YEARS.map(y => <option key={y}>{y}</option>)}
          </select>
        </div>
        <div className="year-icons">
          <button className="icon-btn active" title="Chart view">◉</button>
          <button className="icon-btn" title="Info">ℹ</button>
          <button className="icon-btn" title="Download">↓</button>
        </div>
      </div>

      {/* Section header */}
      <div className="section-banner">
        Losses Breakdown by Incident
      </div>

      {/* Charts scroll area */}
      <div className="charts-scroll">

        {/* INCIDENT tab content */}
        {activeTab === 'Incident' && (
          <>
            <DiseaseLineChart
              data={deathIntensityVectorBorne}
              title={`Death intensity of vector-borne and enteric diseases in the country and year from (${fromYear} to ${toYear})`}
              yLabel="Death Intensity (%)"
            />
            <DiseaseLineChart
              data={deathIntensityRespiratory}
              title={`Death intensity of human respiratory diseases in the selected country and year from (${fromYear} to ${toYear})`}
              yLabel="Intensity (%)"
            />
            <DiseaseLineChart
              data={deathIntensityZoonotic}
              title={`Death Intensity of Zoonotic Spillover Respiratory Diseases in the Selected Country and Year from (${fromYear} to ${toYear})`}
              yLabel="Intensity (%)"
            />

            <DiseaseLineChart
              data={caseIntensityVectorBorne}
              title={`Case Intensity of Vector-Borne and Enteric Diseases in the Selected Country and Year from (${fromYear} – ${toYear})`}
              yLabel="Intensity (%)"
            />
            <DiseaseLineChart
              data={caseIntensityRespiratory}
              title={`Case Intensity of Human Respiratory Diseases in the Selected Country and Year from (${fromYear} – ${toYear})`}
              yLabel="Intensity (%)"
            />
            <DiseaseLineChart
              data={caseIntensityZoonotic}
              title={`Case Intensity of Zoonotic Spillover Respiratory Diseases in the Selected Country and Year from (${fromYear} – ${toYear})`}
              yLabel="Intensity (%)"
            />

            <FrequencyHeatmap
              data={frequencyVectorBorne}
              title={`Frequency of Vector-Borne and Enteric Diseases in the Selected Country and Year from (${fromYear} – ${toYear})`}
            />
            <FrequencyHeatmap
              data={frequencyRespiratory}
              title={`Frequency of Human Respiratory Diseases in the Selected Country and Year from (${fromYear} – ${toYear})`}
            />
            <FrequencyHeatmap
              data={frequencyZoonotic}
              title={`Frequency of Zoonotic Spillover Respiratory Diseases in the Selected Country and Year from (${fromYear} – ${toYear})`}
            />

            <DataTable />
          </>
        )}

        {activeTab === 'Exposure' && (
          <>
            <DiseaseLineChart
              data={caseIntensityVectorBorne}
              title={`Exposure: Vector-Borne and Enteric Diseases (${fromYear} to ${toYear})`}
              yLabel="Exposure (%)"
            />
            <DiseaseLineChart
              data={caseIntensityRespiratory}
              title={`Exposure: Human Respiratory Diseases (${fromYear} to ${toYear})`}
              yLabel="Exposure (%)"
            />
            <FrequencyHeatmap
              data={frequencyVectorBorne}
              title={`Exposure Frequency (${fromYear} – ${toYear})`}
            />
          </>
        )}

        {activeTab === 'Loss' && (
          <>
            <DiseaseLineChart
              data={deathIntensityVectorBorne}
              title={`Loss: Vector-Borne Disease Death Intensity (${fromYear} to ${toYear})`}
              yLabel="Loss Intensity (%)"
            />
            <DiseaseLineChart
              data={deathIntensityRespiratory}
              title={`Loss: Respiratory Disease Death Intensity (${fromYear} to ${toYear})`}
              yLabel="Loss Intensity (%)"
            />
            <DataTable />
          </>
        )}

        {activeTab === 'Protection Gap' && (
          <>
            <DiseaseLineChart
              data={deathIntensityZoonotic}
              title={`Protection Gap: Zoonotic Disease Intensity (${fromYear} to ${toYear})`}
              yLabel="Gap (%)"
            />
            <FrequencyHeatmap
              data={frequencyZoonotic}
              title={`Protection Gap Frequency (${fromYear} – ${toYear})`}
            />
          </>
        )}

        {activeTab === 'Insurance' && (
          <>
            <DiseaseLineChart
              data={caseIntensityZoonotic}
              title={`Insurance Coverage: Zoonotic Disease (${fromYear} to ${toYear})`}
              yLabel="Coverage (%)"
            />
            <FrequencyHeatmap
              data={frequencyRespiratory}
              title={`Insurance Frequency (${fromYear} – ${toYear})`}
            />
            <DataTable />
          </>
        )}
      </div>
    </aside>
  );
}
