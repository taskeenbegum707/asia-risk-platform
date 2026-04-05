# Asia Risk Platform

A React-based risk dashboard for ASEAN countries, featuring:
- Interactive SVG map of Southeast Asia (Thailand highlighted)
- Tabbed right panel: Exposure / Loss / Incident / Protection Gap / Insurance
- Line charts: Death Intensity & Case Intensity by disease type
- Frequency heatmaps (color-coded green→red)
- Data table with country/year breakdown
- Map Layers panel, year timeline slider, legend

## 📦 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Open in browser
http://localhost:3000
```

## 🗂 Project Structure

```
src/
├── App.js                    # Root layout
├── index.js / index.css      # Entry + global styles
├── components/
│   ├── Header.js/.css        # Top nav bar
│   ├── Sidebar.js/.css       # Left panel (location + knowledge)
│   ├── MapPanel.js/.css      # SVG map + layers + timeline
│   ├── RightPanel.js/.css    # Tabs + all charts
│   ├── DiseaseLineChart.js   # Recharts line chart
│   ├── FrequencyHeatmap.js   # Custom color heatmap
│   └── DataTable.js/.css     # Country/year data table
└── data/
    └── chartData.js          # All mock data
```

## 🛠 Built With
- React 18
- Recharts (line charts)
- Custom SVG map (no external map dependency needed)
- DM Sans + DM Serif Display fonts

## 📝 Notes
- All chart data is in `src/data/chartData.js` — easy to swap with real API data
- The map is an SVG illustration of Southeast Asia
- Tabs (Exposure, Loss, Incident, Protection Gap, Insurance) each show different chart combinations
