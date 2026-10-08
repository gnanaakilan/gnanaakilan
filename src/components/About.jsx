import SectionHeader from './SectionHeader.jsx';
import { profile, services } from '../data/resume.js';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about">
          <div className="about__intro">
            <SectionHeader eyebrow="About me" title="Mapping the networks that power cities" />
            <p className="lead">{profile.summary}</p>
            <p>{profile.summary2}</p>
          </div>

          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <div key={title} className="service">
                <span className="service__icon"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
