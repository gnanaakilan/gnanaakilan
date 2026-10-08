export default function PinIcon({ size = 20, color = 'var(--primary)', hole = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z" fill={color} />
      <circle cx="12" cy="9" r="2.6" fill={hole} />
    </svg>
  );
}
