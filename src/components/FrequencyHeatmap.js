import React from 'react';

const years = [2021, 2022, 2023, 2024, 2025];

function getColor(value) {
  // 0=green, 0.5=yellow, 1=red
  if (value < 0.33) return '#4caf50';
  if (value < 0.5) return '#8bc34a';
  if (value < 0.67) return '#ffc107';
  if (value < 0.85) return '#ff9800';
  return '#f44336';
}

export default function FrequencyHeatmap({ data, title }) {
  const countries = Object.keys(data);

  return (
    <div className="chart-card">
      <div className="chart-title-row">
        <p className="chart-title">{title}</p>
        <button className="info-btn">ℹ</button>
      </div>

      <div className="heatmap-wrap">
        <div className="heatmap-y-label">Country</div>
        <div className="heatmap-grid">
          <div className="heatmap-years-row">
            {years.map(y => (
              <div key={y} className="heatmap-year-cell">{y}</div>
            ))}
          </div>
          {countries.map(country => (
            <div key={country} className="heatmap-row">
              <div className="heatmap-country">{country}</div>
              {data[country].map((val, i) => (
                <div
                  key={i}
                  className="heatmap-cell"
                  style={{ background: getColor(val) }}
                  title={`${country} ${years[i]}: ${val.toFixed(2)}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Color legend */}
      <div className="heat-legend">
        <div className="heat-scale">
          {[0, 0.2, 0.4, 0.6, 0.8, 1.0].map(v => (
            <div key={v} className="heat-scale-item">
              <div className="heat-scale-dot" style={{ background: getColor(v) }}></div>
              <span>{v.toFixed(1)}</span>
            </div>
          ))}
        </div>
        <span className="heat-label">Frequency</span>
      </div>
    </div>
  );
}
