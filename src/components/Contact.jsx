import { MapContainer, TileLayer, Marker, Circle } from 'react-leaflet';
import { LuMail, LuPhone, LuLinkedin, LuMapPin } from 'react-icons/lu';
import SectionHeader from './SectionHeader.jsx';
import { profile } from '../data/resume.js';
import { BASEMAPS, pinIcon } from './Hero.jsx';

const items = [
  { icon: LuMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: LuPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
  { icon: LuLinkedin, label: 'LinkedIn', value: 'in/gnanaakilan', href: profile.linkedin, external: true },
  { icon: LuMapPin, label: 'Location', value: profile.location },
];

export default function Contact() {
  return (
    <section id="contact" className="section section--tint">
      <div className="container">
        <div className="contact">
          <div className="contact__info">
            <SectionHeader
              eyebrow="Contact"
              title="Let's map something together"
              text="Have a GIS project, a utility network to digitize, or a team that needs a lead? I'd love to hear about it."
            />
            <ul className="contact__list">
              {items.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <span className="contact__icon"><Icon /></span>
                  <div>
                    <span className="contact__label">{label}</span>
                    {href ? (
                      <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                        {value}
                      </a>
                    ) : (
                      <span>{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              <LuMail /> Say hello
            </a>
          </div>

          <div className="contact__map">
            <MapContainer
              center={profile.coords}
              zoom={11}
              scrollWheelZoom={false}
              zoomControl={false}
              className="contact__leaflet"
            >
              <TileLayer url={BASEMAPS.light.url} attribution={BASEMAPS.light.attribution} />
              <Circle
                center={profile.coords}
                radius={4000}
                pathOptions={{ color: '#0f9b8e', weight: 1, fillOpacity: 0.08 }}
              />
              <Marker position={profile.coords} icon={pinIcon} />
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
