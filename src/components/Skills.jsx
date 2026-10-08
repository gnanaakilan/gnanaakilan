import SectionHeader from './SectionHeader.jsx';
import { skillGroups, softSkills } from '../data/resume.js';

export default function Skills() {
  return (
    <section id="skills" className="section section--tint">
      <div className="container">
        <SectionHeader
          center
          eyebrow="Skills"
          title="My toolkit"
          text="Each group is a layer on my map, from GIS platforms to the code that ties them together."
        />

        <div className="skill-groups">
          {skillGroups.map((g) => (
            <div key={g.name} className="skill-group" style={{ '--c': g.color }}>
              <h3>
                <span className="legend-dot" /> {g.name}
              </h3>
              <ul className="skill-tiles">
                {g.items.map(({ name, icon: Icon }) => (
                  <li key={name} className="skill-tile">
                    <span className="skill-tile__icon"><Icon /></span>
                    <span className="skill-tile__name">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="soft-skills">
          {softSkills.map(({ name, icon: Icon }) => (
            <span key={name} className="soft-skill">
              <Icon /> {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
