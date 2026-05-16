# Ruins World Map 🏛️

An interactive world map of **every ruin on Earth**, sourced from
[OpenStreetMap](https://www.openstreetmap.org) (`historic=ruins`).

- **Next.js** (static export) + **Leaflet** with marker clustering
- Data fetched via the **Overpass API** using tiled queries
- Static `public/data/points.geojson` — no database

## Develop

```bash
npm install
npm run fetch-data
npm run dev
```

Data © OpenStreetMap contributors.
