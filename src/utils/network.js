// Generates an illustrative (not real) utility network around a point,
// used purely as a decorative demo layer on the hero map.

function seeded(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function buildDemoNetwork([lat, lng], seed = 42) {
  const rand = seeded(seed);
  const electric = [];
  const water = [];
  const poles = [];

  // Electric feeders radiating from a substation
  const feeders = 7;
  for (let f = 0; f < feeders; f++) {
    let angle = (f / feeders) * Math.PI * 2 + rand() * 0.4;
    let p = [lat, lng];
    const line = [p];
    const steps = 7 + Math.floor(rand() * 6);
    for (let i = 0; i < steps; i++) {
      angle += (rand() - 0.5) * 0.5;
      const d = 0.0035 + rand() * 0.003;
      p = [p[0] + Math.sin(angle) * d, p[1] + Math.cos(angle) * d];
      line.push(p);
      poles.push(p);
      // occasional lateral branch
      if (rand() > 0.72) {
        const bAngle = angle + (rand() > 0.5 ? 1 : -1) * (Math.PI / 2.3);
        let b = p;
        const branch = [b];
        for (let j = 0; j < 3; j++) {
          b = [b[0] + Math.sin(bAngle) * 0.003, b[1] + Math.cos(bAngle) * 0.003];
          branch.push(b);
          poles.push(b);
        }
        electric.push(branch);
      }
    }
    electric.push(line);
  }

  // Water mains: loose grid of orthogonal-ish pipes
  for (let r = -3; r <= 3; r++) {
    const offset = r * 0.009 + (rand() - 0.5) * 0.002;
    water.push([
      [lat + offset, lng - 0.035],
      [lat + offset + (rand() - 0.5) * 0.004, lng],
      [lat + offset + (rand() - 0.5) * 0.004, lng + 0.035],
    ]);
    water.push([
      [lat - 0.032, lng + offset],
      [lat, lng + offset + (rand() - 0.5) * 0.004],
      [lat + 0.032, lng + offset + (rand() - 0.5) * 0.004],
    ]);
  }

  return { electric, water, poles, substation: [lat, lng] };
}
