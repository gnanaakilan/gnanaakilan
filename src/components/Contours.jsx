// Soft topographic contour lines used as a decorative background.
function blob(cx, cy, r, wobble, seed, points = 10) {
  const pts = [];
  for (let i = 0; i < points; i++) {
    const a = (i / points) * Math.PI * 2;
    const n = Math.sin(a * 3 + seed) * wobble + Math.cos(a * 2 + seed * 1.7) * wobble * 0.6;
    pts.push([cx + Math.cos(a) * (r + n), cy + Math.sin(a) * (r + n) * 0.72]);
  }
  // Closed Catmull-Rom spline → smooth cubic béziers
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < points; i++) {
    const p0 = pts[(i - 1 + points) % points];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % points];
    const p3 = pts[(i + 2) % points];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d + 'Z';
}

export default function Contours({ className = '', cx = 300, cy = 200, rings = 9, seed = 1 }) {
  return (
    <svg className={`contours ${className}`} viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {Array.from({ length: rings }, (_, i) => (
        <path key={i} d={blob(cx, cy, 24 + i * 30, 6 + i * 2.2, seed + i * 0.35)} />
      ))}
    </svg>
  );
}
