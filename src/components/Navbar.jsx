import { useEffect, useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import PinIcon from './PinIcon.jsx';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark">
            <PinIcon size={18} color="#fff" hole="var(--primary)" />
          </span>
          Gnana Akilan
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav__link ${active === l.id ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary btn--sm nav__cta" onClick={() => setOpen(false)}>
            Let's talk
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <LuX /> : <LuMenu />}
        </button>
      </div>
    </header>
  );
}
