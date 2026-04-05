import React from 'react';
import { tableData } from '../data/chartData';
import './DataTable.css';

export default function DataTable() {
  let prevCountry = '';

  return (
    <div className="chart-card table-card">
      <div className="data-table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Year</th>
              <th>Death Intensity of Vector-Borne and Enteric Diseases</th>
              <th>Death Intensity of Human Respiratory Diseases</th>
              <th>Death Intensity of Zoonotic Spillover Respiratory Diseases</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => {
              const showCountry = row.country !== prevCountry;
              prevCountry = row.country;
              return (
                <tr key={i} className={row.country === 'Thailand' ? 'row-thailand' : 'row-singapore'}>
                  {showCountry && (
                    <td rowSpan={5} className="country-cell">{row.country}</td>
                  )}
                  <td>{row.year}</td>
                  <td>{row.vectorBorne.toFixed(2)}</td>
                  <td>{row.respiratory.toFixed(2)}</td>
                  <td>{row.zoonotic.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
