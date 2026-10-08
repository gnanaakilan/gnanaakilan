import { useState } from 'react';
import { LuChevronDown, LuCalendar } from 'react-icons/lu';
import SectionHeader from './SectionHeader.jsx';
import { experience } from '../data/resume.js';

function Stop({ job }) {
  const [open, setOpen] = useState(false);
  const items = open && job.more ? [...job.highlights, ...job.more] : job.highlights;

  return (
    <li className={`journey__stop ${job.current ? 'is-current' : ''}`}>
      <span className="journey__pin" aria-hidden="true" />
      <article className="journey__card">
        <div className="journey__top">
          <div>
            <h3>{job.role}</h3>
            <div className="journey__company">{job.company}</div>
          </div>
          <span className="journey__period">
            <LuCalendar /> {job.period}
          </span>
        </div>
        <ul className="journey__list">
          {items.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        {job.more && (
          <button className="text-btn" onClick={() => setOpen((o) => !o)}>
            {open ? 'Show less' : `Show ${job.more.length} more`}
            <LuChevronDown style={{ transform: open ? 'rotate(180deg)' : 'none' }} />
          </button>
        )}
      </article>
    </li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container container--narrow">
        <SectionHeader
          center
          eyebrow="Experience"
          title="My journey so far"
          text="Every stop on the route, from my first GIS app in 2016 to leading a team today."
        />
        <ol className="journey">
          {experience.map((job) => (
            <Stop key={job.company} job={job} />
          ))}
        </ol>
      </div>
    </section>
  );
}
