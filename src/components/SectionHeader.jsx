import { LuMapPin } from 'react-icons/lu';

export default function SectionHeader({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section-header ${center ? 'section-header--center' : ''}`}>
      <span className="eyebrow">
        <LuMapPin aria-hidden="true" /> {eyebrow}
      </span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
