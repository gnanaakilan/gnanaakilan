# Gnana Akilan - GIS Portfolio

A React (Vite) portfolio with an interactive Leaflet map hero, built from my resume.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Edit content

All text and skill icons live in `src/data/resume.js` (icons come from `react-icons`).
`profile.coords` sets the map location.

## Notes

- Basemaps: Esri Light Gray, Topographic and World Imagery (no API keys needed).
- The electric / water network on the hero map is a generated, illustrative demo layer (`src/utils/network.js`).

