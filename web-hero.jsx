// Hero + Navigation for Tarik's personal website
// Reads CV_DATA from cv-data.js

const StatusTicker = () => {
  return (
    <div style={{
      background: 'var(--ink)',
      color: 'var(--bg)',
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: '11px',
      letterSpacing: '0.04em',
      padding: '6px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        display: 'flex',
        whiteSpace: 'nowrap',
        animation: 'tt-ticker 60s linear infinite',
        gap: '40px',
      }}>
        {[0, 1].map(k => (
          <div key={k} style={{ display: 'flex', gap: '40px', paddingLeft: '40px' }}>
            <span><span style={{ color: '#7fc97f' }}>●</span> Verfügbar für Web-Projekte &amp; KI-Lösungen ab Q3/26</span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>Aktuell — Gründungsberatung @ Hochschule Offenburg</span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>Aktuell — Mitgründer @ CodeCuisine</span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>Freiburg im Breisgau · 47.999° N, 7.842° E</span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>{new Date().toLocaleString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span style={{ opacity: 0.5 }}>/</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const NavBar = ({ activeSection, accent }) => {
  const items = [
    { id: 'jetzt', label: 'Jetzt' },
    { id: 'arbeit', label: 'Arbeit' },
    { id: 'karriere', label: 'Karriere' },
    { id: 'notizen', label: 'Notizen' },
    { id: 'kontakt', label: 'Kontakt' },
    { id: 'profil', label: 'Profil', href: 'Profil.html' },
  ];
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'color-mix(in srgb, var(--bg) 86%, transparent)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--line)',
    }}>
      <div className="tt-nav-inner" style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '14px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
      }}>
        <a href="#top" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
          color: 'var(--ink)',
        }}>
          <div style={{
            width: '30px', height: '30px',
            background: 'var(--ink)',
            color: 'var(--bg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: '12px', fontWeight: 600, letterSpacing: '-0.02em',
            borderRadius: '6px',
          }}>tt</div>
          <div style={{ fontFamily: '"Newsreader", Georgia, serif', fontSize: '17px', fontStyle: 'italic' }}>
            Tarik Tasci
          </div>
        </a>

        <div className="tt-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {items.map(it => (
            <a key={it.id} href={it.href || `#${it.id}`} style={{
              padding: '8px 14px',
              fontSize: '13px',
              color: activeSection === it.id ? 'var(--ink)' : 'var(--dim)',
              textDecoration: 'none',
              borderRadius: '999px',
              background: activeSection === it.id ? 'var(--paper)' : 'transparent',
              border: activeSection === it.id ? '1px solid var(--line)' : '1px solid transparent',
              transition: 'all .15s',
            }}>{it.label}</a>
          ))}
        </div>

        <a href="#kontakt" style={{
          padding: '9px 16px',
          fontSize: '13px',
          color: 'var(--bg)',
          background: 'var(--ink)',
          textDecoration: 'none',
          borderRadius: '999px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          letterSpacing: '-0.005em',
        }}>
          Schreib mir
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px' }}>↗</span>
        </a>
      </div>
    </nav>
  );
};

// Three hero variants
const HeroEditorial = () => {
  const d = window.CV_DATA;
  return (
    <section id="top" className="tt-hero-section" style={{ padding: '88px 32px 64px', position: 'relative' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Eyebrow */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '11px',
          color: 'var(--dim)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '36px',
          flexWrap: 'wrap',
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7fc97f' }} className="tt-pulse-dot"></span>
          Persönliches Werkverzeichnis · Frühjahr 26
          <span style={{ flex: 1, height: '1px', background: 'var(--line)', maxWidth: '120px' }}></span>
          № 01
        </div>

        <h1 className="tt-hero-title" style={{
          fontFamily: '"Newsreader", Georgia, serif',
          fontSize: 'clamp(64px, 13vw, 220px)',
          lineHeight: 0.86,
          letterSpacing: '-0.035em',
          fontWeight: 400,
          margin: 0,
          color: 'var(--ink)',
        }}>
          <span className="tt-mask"><span className="tt-rise" style={{ fontStyle: 'italic', animationDelay: '0ms' }}>Tarik</span></span><br />
          <span className="tt-mask"><span className="tt-rise" style={{ animationDelay: '120ms' }}>Tasci<span style={{ color: 'var(--accent)' }}>.</span></span></span>
        </h1>

        <div className="tt-hero-grid" style={{
          marginTop: '36px',
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr',
          gap: '48px',
          alignItems: 'start',
        }}>
          <p style={{
            fontFamily: '"Newsreader", Georgia, serif',
            fontSize: 'clamp(22px, 2.4vw, 32px)',
            lineHeight: 1.25,
            color: 'var(--ink)',
            margin: 0,
            fontWeight: 300,
            textWrap: 'pretty',
            maxWidth: '720px',
          }}>
            Ich weiß noch nicht genau wo die Reise hingeht. Aber ich bin unterwegs — mit einem <em style={{ color: 'var(--accent)' }}>Voice Agent</em>, einer Web-Agentur und zu viel Kaffee. Freiburg.
          </p>

          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '12px',
            lineHeight: 1.7,
            color: 'var(--dim)',
            paddingTop: '8px',
            borderTop: '1px solid var(--line)',
          }}>
            <div style={{ color: 'var(--ink)', marginBottom: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>↳</span> Aktuelle Rollen
            </div>
            <div style={{ marginBottom: '4px' }}>· Gründungsberater · HS Offenburg · OGFLab</div>
            <div style={{ marginBottom: '4px' }}>· Mitgründer · CodeCuisine</div>
            <div style={{ marginBottom: '12px' }}>· Voice Agent · Gastronomie · im Aufbau</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['Web', 'KI & Automation', 'Coaching', 'Prototyping'].map(t => (
                <span key={t} style={{ padding: '2px 8px', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '999px', fontSize: '10.5px' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroGrotesk = () => {
  const d = window.CV_DATA;
  return (
    <section id="top" className="tt-hero-section" style={{ padding: '64px 32px 48px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', letterSpacing: '0.08em',
          color: 'var(--dim)', textTransform: 'uppercase', marginBottom: '24px',
        }}>
          ↘ Gründungsberatung · Webhandwerk · KI & Automation
        </div>
        <h1 className="tt-hero-title" style={{
          fontFamily: '"Bricolage Grotesque", system-ui, sans-serif',
          fontSize: 'clamp(56px, 11vw, 180px)',
          lineHeight: 0.94,
          letterSpacing: '-0.05em',
          fontWeight: 600,
          margin: 0,
          color: 'var(--ink)',
        }}>
          <span className="tt-mask"><span className="tt-rise">Tarik Tasci<span style={{ color: 'var(--accent)' }}>.</span></span></span>
        </h1>
        <p style={{
          marginTop: '32px',
          fontSize: 'clamp(20px, 2vw, 28px)',
          lineHeight: 1.35,
          color: 'var(--ink)',
          fontWeight: 400,
          maxWidth: '780px',
          letterSpacing: '-0.015em',
          textWrap: 'pretty',
        }}>
          Ich begleite Gründerteams an der Hochschule Offenburg, baue mit CodeCuisine
          Web&shy;handwerk für kleine Unternehmen — und denke gerne in Workshops, Prototypen und Geschäftsmodellen.
        </p>
      </div>
    </section>
  );
};

const HeroMono = () => {
  return (
    <section id="top" className="tt-hero-section" style={{ padding: '72px 32px 56px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', fontFamily: '"JetBrains Mono", monospace' }}>
        <pre style={{
          margin: 0,
          fontSize: 'clamp(13px, 1.4vw, 18px)',
          lineHeight: 1.2,
          color: 'var(--ink)',
          fontWeight: 500,
        }}>
{`┌─────────────────────────────────────────────────┐
│  TARIK TASCI · v26.05 · Freiburg im Breisgau   │
└─────────────────────────────────────────────────┘`}
        </pre>
        <h1 className="tt-hero-title" style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 'clamp(44px, 9.5vw, 156px)',
          lineHeight: 0.95,
          letterSpacing: '-0.05em',
          fontWeight: 700,
          margin: '24px 0 0',
          color: 'var(--ink)',
        }}>
          <span className="tt-mask"><span className="tt-rise" style={{ animationDelay: '0ms' }}>tarik</span></span><br />
          <span className="tt-mask"><span className="tt-rise" style={{ animationDelay: '120ms' }}><span style={{ color: 'var(--accent)' }}>./</span>tasci</span></span>
        </h1>
        <p style={{
          marginTop: '28px',
          fontFamily: '"Bricolage Grotesque", system-ui, sans-serif',
          fontSize: 'clamp(18px, 1.8vw, 24px)',
          lineHeight: 1.4,
          color: 'var(--ink)',
          maxWidth: '720px',
        }}>
          Gründungsberater, Mitgründer & Medien&shy;macher. Workshops, Web,
          Geschäftsmodelle — aus Freiburg.
        </p>
      </div>
    </section>
  );
};

window.WebHero = { StatusTicker, NavBar, HeroEditorial, HeroGrotesk, HeroMono };
