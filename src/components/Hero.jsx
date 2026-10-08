import { useEffect, useMemo, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker, useMap } from 'react-leaflet';
import { SiArcgis, SiPython, SiReact, SiQgis } from 'react-icons/si';
import { LuArrowRight, LuMapPin, LuLocate } from 'react-icons/lu';
import { profile, stats } from '../data/resume.js';
import { buildDemoNetwork } from '../utils/network.js';
import Contours from './Contours.jsx';

const ESRI = 'https://server.arcgisonline.com/ArcGIS/rest/services';
export const BASEMAPS = {
  light: {
    label: 'Light',
    url: `${ESRI}/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}`,
    attribution: 'Tiles &copy; Esri, HERE, Garmin, &copy; OpenStreetMap contributors',
  },
  topo: {
    label: 'Topo',
    url: `${ESRI}/World_Topo_Map/MapServer/tile/{z}/{y}/{x}`,
    attribution: 'Tiles &copy; Esri, HERE, Garmin, &copy; OpenStreetMap contributors',
  },
  imagery: {
    label: 'Satellite',
    url: `${ESRI}/World_Imagery/MapServer/tile/{z}/{y}/{x}`,
    attribution: 'Tiles &copy; Esri, Maxar, Earthstar Geographics',
  },
};

export const pinIcon = L.divIcon({
  className: 'pulse-pin',
  html: '<span class="pulse-pin__ring"></span><span class="pulse-pin__dot"></span>',
  iconSize: [26, 26],
  iconAnchor: [13, 13],
});

function FlyIn({ target }) {
  const map = useMap();
  useEffect(() => {
    const t = setTimeout(() => map.flyTo(target, 13, { duration: 3 }), 500);
    return () => clearTimeout(t);
  }, [map, target]);
  return null;
}

function Recenter({ target, trigger }) {
  const map = useMap();
  useEffect(() => {
    if (trigger) map.flyTo(target, 13, { duration: 1.4 });
  }, [trigger, map, target]);
  return null;
}

const toolIcons = [
  { icon: SiArcgis, label: 'ArcGIS' },
  { icon: SiPython, label: 'Python' },
  { icon: SiReact, label: 'React' },
  { icon: SiQgis, label: 'QGIS' },
];

export default function Hero() {
  const [basemap, setBasemap] = useState('light');
  const [showNetwork, setShowNetwork] = useState(true);
  const [recenter, setRecenter] = useState(0);
  const network = useMemo(() => buildDemoNetwork(profile.coords), []);

  return (
    <section id="top" className="hero">
      <Contours className="hero__contours" cx={140} cy={120} rings={11} seed={2} />

      <div className="container hero__grid">
        <div className="hero__text">
          <span className="pill">
            <LuMapPin /> Based in {profile.city}
          </span>
          <h1>
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="hero__role">
            {profile.title} <span className="sep">·</span> {profile.subtitle}
          </p>
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              See my work <LuArrowRight />
            </a>
            <a href="#contact" className="btn btn--soft">Get in touch</a>
          </div>

          <div className="hero__tools">
            <span>Works with</span>
            {toolIcons.map(({ icon: Icon, label }) => (
              <span key={label} className="tool-icon" title={label}>
                <Icon />
              </span>
            ))}
          </div>
        </div>

        <div className="map-card">
          <MapContainer
            center={[21.5, 79]}
            zoom={5}
            zoomControl={false}
            scrollWheelZoom={false}
            className="map-card__map"
          >
            <TileLayer key={basemap} url={BASEMAPS[basemap].url} attribution={BASEMAPS[basemap].attribution} />
            {showNetwork && (
              <>
                {network.water.map((line, i) => (
                  <Polyline
                    key={`w${i}`}
                    positions={line}
                    pathOptions={{ color: '#3b82f6', weight: 1.5, opacity: 0.35, dashArray: '4 6' }}
                  />
                ))}
                {network.electric.map((line, i) => (
                  <Polyline
                    key={`e${i}`}
                    positions={line}
                    pathOptions={{ color: '#0f9b8e', weight: 2, opacity: 0.6 }}
                  />
                ))}
                {network.poles.map((p, i) => (
                  <CircleMarker
                    key={`p${i}`}
                    center={p}
                    radius={2.2}
                    pathOptions={{ color: '#fff', weight: 1, fillColor: '#0f9b8e', fillOpacity: 0.9 }}
                  />
                ))}
              </>
            )}
            <Marker position={profile.coords} icon={pinIcon}>
              <Popup>
                <strong>{profile.name}</strong>
                <br />
                {profile.title}
              </Popup>
            </Marker>
            <FlyIn target={profile.coords} />
            <Recenter target={profile.coords} trigger={recenter} />
          </MapContainer>

          <div className="map-card__badge">
            <span className="dot" /> Currently mapping utilities in Mumbai
          </div>

          <div className="map-card__controls">
            <div className="segmented">
              {Object.entries(BASEMAPS).map(([k, b]) => (
                <button key={k} className={basemap === k ? 'is-active' : ''} onClick={() => setBasemap(k)}>
                  {b.label}
                </button>
              ))}
            </div>
            <button
              className={`chip-toggle ${showNetwork ? 'is-on' : ''}`}
              onClick={() => setShowNetwork((s) => !s)}
              title="Illustrative demo network"
            >
              Utility layer
            </button>
            <button className="icon-btn" onClick={() => setRecenter((n) => n + 1)} aria-label="Zoom to my location">
              <LuLocate />
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="stats">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="stat">
              <span className="stat__icon"><Icon /></span>
              <div>
                <div className="stat__value">{value}</div>
                <div className="stat__label">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
