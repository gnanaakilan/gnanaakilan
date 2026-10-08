import SectionHeader from './SectionHeader.jsx';
import Contours from './Contours.jsx';
import { projects } from '../data/resume.js';

export default function Projects() {
  return (
    <section id="projects" className="section section--tint">
      <div className="container">
        <SectionHeader
          center
          eyebrow="Projects"
          title="Work that made an impact"
          text="Highlights from building GIS for electric and water utilities."
        />
        <div className="project-grid">
          {projects.map(({ icon: Icon, title, text, metric, color }, i) => (
            <article key={title} className="project" style={{ '--c': color }}>
              <Contours className="project__contours" cx={520} cy={40} rings={6} seed={i + 1} />
              <span className="project__icon"><Icon /></span>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="project__metric">{metric}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
