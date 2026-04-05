import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default function DiseaseLineChart({ data, title, yLabel = 'Death Intensity (%)' }) {
  return (
    <div className="chart-card">
      <div className="chart-title-row">
        <p className="chart-title">{title}</p>
        <button className="info-btn">ℹ</button>
      </div>
      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={data} margin={{ top: 6, right: 16, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e8ecf1" />
          <XAxis dataKey="year" tick={{ fontSize: 10, fill: '#7a8a9e' }} />
          <YAxis
            tickFormatter={v => v.toFixed(2)}
            tick={{ fontSize: 9, fill: '#7a8a9e' }}
            domain={[0, 0.10]}
            label={{ value: yLabel, angle: -90, position: 'insideLeft', fontSize: 8, fill: '#7a8a9e', dx: 12 }}
          />
          <Tooltip
            formatter={(v) => [v.toFixed(3), '']}
            contentStyle={{ fontSize: 11, border: '1px solid #e8ecf1', borderRadius: 6 }}
          />
          <Legend wrapperStyle={{ fontSize: 10 }} />
          <Line
            type="linear" dataKey="Singapore" stroke="#1a56a0" strokeWidth={1.5}
            dot={{ r: 3, fill: '#1a56a0' }} activeDot={{ r: 5 }}
            strokeDasharray="0"
          />
          <Line
            type="linear" dataKey="Thailand" stroke="#52b788" strokeWidth={1.5}
            dot={{ r: 3, fill: '#52b788' }} activeDot={{ r: 5 }}
            strokeDasharray="4 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
