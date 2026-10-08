import { LuGraduationCap, LuMapPin } from 'react-icons/lu';
import SectionHeader from './SectionHeader.jsx';
import { education } from '../data/resume.js';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container container--narrow">
        <SectionHeader center eyebrow="Education" title="Where it started" />
        <div className="edu-grid">
          {education.map((e) => (
            <article key={e.school} className="edu">
              <span className="edu__icon"><LuGraduationCap /></span>
              <div>
                <span className="edu__period">{e.period}</span>
                <h3>{e.degree}</h3>
                <p>{e.school}</p>
                <span className="edu__place"><LuMapPin /> {e.place}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
