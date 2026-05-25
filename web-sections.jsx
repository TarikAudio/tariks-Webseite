// Page sections: Now/About, Work, Career, Methods, Contact, Footer

const Container = ({ children, style }) => (
  <div className="tt-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 32px', ...style }}>
    {children}
  </div>
);

const SectionHeader = ({ no, label, title }) => (
  <div data-reveal className="tt-section-header" style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '32px' }}>
    <div style={{
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: '11px',
      color: 'var(--accent)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      paddingTop: '6px',
      minWidth: '60px',
    }}>§ {no}</div>
    <div style={{ flex: 1 }}>
      <div style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '11px',
        color: 'var(--dim)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: '4px',
      }}>{label}</div>
      <h2 style={{
        fontFamily: '"Newsreader", Georgia, serif',
        fontSize: 'clamp(32px, 4.2vw, 56px)',
        fontWeight: 400,
        margin: 0,
        letterSpacing: '-0.02em',
        color: 'var(--ink)',
        lineHeight: 1.05,
      }}>{title}</h2>
    </div>
    <div style={{ flex: 1, height: '1px', background: 'var(--line)', marginTop: '24px' }}></div>
  </div>
);

// — Jetzt / About ————————————————————————————————————————————————
const Jetzt = () => {
  const d = window.CV_DATA;
  return (
    <section id="jetzt" style={{ padding: '64px 0 32px' }}>
      <Container>
        <SectionHeader no="01" label="Aktuell" title={<><em style={{ fontStyle: 'italic' }}>Jetzt</em> gerade</>} />

        <div className="tt-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div data-reveal style={{
            background: 'var(--paper)',
            border: '1px solid var(--line)',
            borderRadius: '16px',
            padding: '28px 30px',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              fontFamily: '"JetBrains Mono", monospace', fontSize: '11px',
              color: 'var(--dim)', letterSpacing: '0.08em', textTransform: 'uppercase',
              marginBottom: '14px',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7fc97f' }} className="tt-pulse-dot"></span>
              Live · seit Januar 2025
            </div>
            <div style={{
              fontFamily: '"Newsreader", Georgia, serif',
              fontSize: '32px', lineHeight: 1.1, fontStyle: 'italic',
              fontWeight: 400, marginBottom: '6px', letterSpacing: '-0.01em',
            }}>
              Gründungs&shy;berater
            </div>
            <div style={{ fontSize: '14px', color: 'var(--accent)', marginBottom: '12px' }}>
              Hochschule Offenburg — Open Game and Fablab
            </div>
            <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.55, color: 'var(--dim)', textWrap: 'pretty' }}>
              Ich begleite gründungs&shy;interessierte Teams, konzipiere Innovations&shy;workshops und kümmere mich um
              Community-Events rund ums Lab. Was mich dabei antreibt: wenn ein Gespräch jemanden ins Denken — und dann ins Handeln — bringt.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['Design Thinking', 'Coaching', 'Workshop-Design', 'Community-Building'].map(s => (
                <span key={s} style={tagStyle}>{s}</span>
              ))}
            </div>
          </div>

          <div data-reveal style={{
            background: 'var(--ink)',
            color: 'var(--bg)',
            borderRadius: '16px',
            padding: '28px 30px',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              fontFamily: '"JetBrains Mono", monospace', fontSize: '11px',
              color: 'color-mix(in srgb, var(--bg) 60%, transparent)',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              marginBottom: '14px',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#e8a23a' }}></span>
              Beta · seit Juni 2025
            </div>
            <div style={{
              fontFamily: '"Newsreader", Georgia, serif',
              fontSize: '32px', lineHeight: 1.1, fontStyle: 'italic',
              fontWeight: 400, marginBottom: '6px', letterSpacing: '-0.01em',
            }}>
              Mit&shy;gründer
            </div>
            <div style={{ fontSize: '14px', color: 'var(--accent-light, #e8a23a)', marginBottom: '12px' }}>
              CodeCuisine — Webhandwerk für KMU
            </div>
            <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.55, color: 'color-mix(in srgb, var(--bg) 75%, transparent)', textWrap: 'pretty' }}>
              Mit Louis baue ich gerade CodeCuisine auf — eine Web-Agentur für kleine Unternehmen. Wir fangen mit Websites an. Wo es hingeht, werden wir sehen.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['WordPress', 'Wireframing', 'Kundenakquise', 'Prozessdesign'].map(s => (
                <span key={s} style={{
                  ...tagStyle,
                  background: 'color-mix(in srgb, var(--bg) 12%, transparent)',
                  borderColor: 'color-mix(in srgb, var(--bg) 18%, transparent)',
                  color: 'var(--bg)',
                }}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Verfügbarkeit row */}
        <div data-reveal style={{
          marginTop: '24px',
          padding: '20px 24px',
          background: 'color-mix(in srgb, var(--accent) 8%, var(--bg))',
          border: '1px solid color-mix(in srgb, var(--accent) 25%, var(--line))',
          borderRadius: '12px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px',
          flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
              Lass uns reden
            </div>
            <div style={{ fontSize: '17px', fontWeight: 500, color: 'var(--ink)' }}>
              Du willst über KI, Gründung oder Web reden? Schreib mir.
            </div>
          </div>
          <a href="#kontakt" style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '12px',
            color: 'var(--accent)',
            textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '6px',
            padding: '8px 14px',
            border: '1px solid var(--accent)',
            borderRadius: '999px',
          }}>
            Schreib mir ↗
          </a>
        </div>
      </Container>
    </section>
  );
};

const tagStyle = {
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: '10.5px',
  padding: '3px 9px',
  borderRadius: '999px',
  border: '1px solid var(--line)',
  background: 'color-mix(in srgb, var(--bg) 60%, transparent)',
  color: 'var(--ink)',
  letterSpacing: '0.02em',
};

// — Arbeit / Selected work ————————————————————————————————————————
const Arbeit = () => {
  const featured = [
    {
      tag: '2025 — laufend',
      title: 'CodeCuisine',
      kind: 'Mitgründung · Web-Studio für KMU',
      role: 'Mitgründer · Kundenkontakt · Web',
      context: 'Viele kleine Unternehmen in der Region brauchen Websites, die mehr leisten als ein One-Pager, kommen aber mit klassischen Agentur-Preisen nicht zurecht. Wir bauen pragmatisch, transparent und im engen Takt mit den Kund:innen.',
      contribution: [
        'Akquise & Erstgespräche mit Interessierten',
        'Wireframes und Prototypen in Figma',
        'Umsetzung auf WordPress, Übergabe & Einweisung',
        'Aufbau unserer Marke und internen Prozesse',
      ],
      outcome: 'Erste Kunden gewonnen, Workflow steht — und das Studio wächst mit jedem Projekt.',
      tags: ['WordPress', 'Wireframing', 'Kundenakquise', 'SEO', 'Prozessdesign'],
      accent: 'terra',
    },
    {
      tag: '2026 — im Aufbau',
      title: 'Voice Agent · Gastronomie',
      kind: 'Startup · KI & Automation',
      role: 'Konzept · Entwicklung · ElevenLabs',
      context: 'Wer in einem vollen Restaurant gearbeitet hat, weiß: Der Flaschenhals ist selten die Küche — sondern die Kommunikation dazwischen. Bestellungen gehen verloren. Kellner rennen. Gäste warten.',
      contribution: [
        'Voice Agent mit ElevenLabs entwickelt',
        'n8n-Orchestrierung aufgebaut',
        'Prototype läuft intern — Output via Slack, bald Küchendisplay',
        'Louis Heffner baut die Webapp drumherum',
      ],
      outcome: 'Prototype läuft. Erster Restauranttest in Kürze.',
      tags: ['KI', 'ElevenLabs', 'n8n', 'Gastronomie', 'Automation'],
      accent: 'moss',
    },
  ];

  const compact = [
    {
      tag: '2023 — laufend',
      title: 'OGFLab Community',
      kind: 'Programm · Hochschule Offenburg',
      blurb: 'Vom Junior Mentor zum Berater. Workshops, Coachings und Community-Events für studentische Gründungsteams im Open Game and Fablab.',
      tags: ['Design Thinking', 'Moderation', 'Eventorganisation'],
      accent: 'ink',
    },
    {
      tag: '2023 — 2024 · Bachelorprojekt',
      title: 'FirstBeat',
      kind: 'Serious Game · Lernspiel mit Songs',
      blurb: 'Lerninhalte über Spiel und Musik verankern — eigenes Konzept, eigene Songs, klickbarer Prototyp in Figma. Geschäftsmodell entwickelt, Customer Interviews geführt.',
      tags: ['Game Design', 'Figma', 'Lean Startup', 'Songwriting'],
      accent: 'terra',
    },
  ];

  return (
    <section id="arbeit" style={{ padding: '64px 0 32px' }}>
      <Container>
        <SectionHeader no="02" label="Auswahl" title={<><em style={{ fontStyle: 'italic' }}>Arbeit</em>, die zählt</>} />

        {/* Featured — full case studies */}
        <div className="tt-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'stretch' }}>
          {featured.map((p, i) => (
            <div key={p.title} data-reveal style={{ display: 'flex' }}>
              <FeatureCard p={p} idx={i} />
            </div>
          ))}
        </div>

        {/* Subhead */}
        <div data-reveal style={{
          margin: '40px 0 16px',
          display: 'flex', alignItems: 'baseline', gap: '14px',
        }}>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '11px', color: 'var(--dim)',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>· Weitere Arbeit</div>
          <div style={{ flex: 1, height: '1px', background: 'var(--line)' }}></div>
        </div>

        {/* Compact */}
        <div className="tt-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'stretch' }}>
          {compact.map((p, i) => (
            <div key={p.title} data-reveal style={{ display: 'flex' }}>
              <ProjectCard p={p} idx={i + featured.length} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const FeatureCard = ({ p, idx }) => {
  const [hover, setHover] = React.useState(false);
  const accentMap = {
    terra: { bg: 'color-mix(in srgb, #c4533a 6%, var(--paper))', stroke: '#c4533a' },
    moss: { bg: 'color-mix(in srgb, #3a5a3e 6%, var(--paper))', stroke: '#3a5a3e' },
    ink: { bg: 'var(--paper)', stroke: 'var(--ink)' },
  };
  const a = accentMap[p.accent];
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: a.bg,
        border: '1px solid var(--line)',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'transform .3s cubic-bezier(.2,.7,.3,1), box-shadow .3s',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hover ? '0 22px 50px rgba(26,24,18,0.1)' : '0 0 0 rgba(0,0,0,0)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}>
      {/* Typo header */}
      <div style={{
        height: '220px',
        background: a.stroke,
        color: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '20px 24px',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
          backgroundSize: '10px 10px',
        }}></div>
        <div style={{
          fontFamily: '"Newsreader", Georgia, serif',
          fontStyle: 'italic',
          fontSize: '92px',
          lineHeight: 0.88,
          letterSpacing: '-0.035em',
          fontWeight: 300,
          position: 'relative',
        }}>{p.title.split(' ')[0]}</div>
        <div style={{
          position: 'absolute', top: '18px', right: '20px',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '10.5px', color: 'color-mix(in srgb, var(--bg) 70%, transparent)',
          letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          Case № 0{idx + 1}
        </div>
        <div style={{
          position: 'absolute', top: '18px', left: '24px',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '10.5px', color: 'color-mix(in srgb, var(--bg) 70%, transparent)',
          letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>{p.tag}</div>
      </div>

      <div style={{ padding: '24px 26px 26px', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div>
          <h3 style={{
            fontFamily: '"Newsreader", Georgia, serif',
            fontSize: '32px', lineHeight: 1.05,
            fontWeight: 400, margin: 0,
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px',
          }}>
            <span>{p.title}</span>
            <span className="tt-card-arrow" style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '18px', color: a.stroke, flexShrink: 0,
            }}>↗</span>
          </h3>
          <div style={{ fontSize: '13px', color: a.stroke, marginTop: '2px' }}>{p.kind}</div>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '10.5px', color: 'var(--dim)',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            marginTop: '6px',
          }}>{p.role}</div>
        </div>

        <p style={{
          margin: 0,
          fontSize: '14px',
          lineHeight: 1.55,
          color: 'var(--ink)',
          textWrap: 'pretty',
        }}>{p.context}</p>

        <div>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '10.5px', color: 'var(--accent)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: '6px',
          }}>↳ Was ich beigetragen habe</div>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {p.contribution.map((c, i) => (
              <li key={i} style={{
                fontSize: '13.5px',
                color: 'var(--ink)',
                lineHeight: 1.5,
                padding: '2px 0',
                paddingLeft: '14px',
                position: 'relative',
              }}>
                <span style={{ position: 'absolute', left: 0, color: a.stroke }}>—</span>{c}
              </li>
            ))}
          </ul>
        </div>

        <div style={{
          padding: '12px 14px',
          background: 'color-mix(in srgb, var(--bg) 55%, transparent)',
          borderLeft: `2px solid ${a.stroke}`,
          fontSize: '13px',
          lineHeight: 1.5,
          color: 'var(--ink)',
        }}>
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '10px', color: a.stroke,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            marginRight: '8px',
          }}>Ergebnis</span>
          {p.outcome}
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '4px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {p.tags.map(t => <span key={t} style={tagStyle}>{t}</span>)}
        </div>
      </div>
    </article>
  );
};

const ProjectCard = ({ p, idx }) => {
  const [hover, setHover] = React.useState(false);
  const accentMap = {
    terra: { bg: 'color-mix(in srgb, #c4533a 8%, var(--paper))', stroke: '#c4533a' },
    moss: { bg: 'color-mix(in srgb, #3a5a3e 8%, var(--paper))', stroke: '#3a5a3e' },
    ink: { bg: 'var(--paper)', stroke: 'var(--ink)' },
  };
  const a = accentMap[p.accent];
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: a.bg,
        border: '1px solid var(--line)',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'transform .3s cubic-bezier(.2,.7,.3,1), box-shadow .3s',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hover ? '0 18px 40px rgba(26,24,18,0.08)' : '0 0 0 rgba(0,0,0,0)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}>
      {/* "image" placeholder — typographic composition */}
      <div style={{
        height: '180px',
        background: a.stroke,
        color: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '16px 18px',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
          backgroundSize: '8px 8px',
        }}></div>
        <div style={{
          fontFamily: '"Newsreader", Georgia, serif',
          fontStyle: 'italic',
          fontSize: '64px',
          lineHeight: 0.9,
          letterSpacing: '-0.03em',
          fontWeight: 300,
          position: 'relative',
          opacity: 0.96,
        }}>
          {p.title.split('')[0]}{p.title.split('')[1]}
        </div>
        <div style={{
          position: 'absolute', top: '14px', right: '16px',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '10px', color: 'color-mix(in srgb, var(--bg) 70%, transparent)',
          letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          № 0{idx + 1}
        </div>
      </div>

      <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '10.5px',
          color: 'var(--dim)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: '8px',
        }}>{p.tag}</div>
        <h3 style={{
          fontFamily: '"Newsreader", Georgia, serif',
          fontSize: '28px', lineHeight: 1.1,
          fontWeight: 400, margin: 0,
          letterSpacing: '-0.015em',
          color: 'var(--ink)',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: '12px',
        }}>
          <span>{p.title}</span>
          <span className="tt-card-arrow" style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '16px',
            color: a.stroke,
            flexShrink: 0,
          }}>↗</span>
        </h3>
        <div style={{ fontSize: '12px', color: a.stroke, marginTop: '2px' }}>{p.kind}</div>
        <p style={{
          margin: '12px 0 0',
          fontSize: '13.5px',
          lineHeight: 1.55,
          color: 'var(--dim)',
          textWrap: 'pretty',
        }} dangerouslySetInnerHTML={{ __html: p.blurb }}></p>
        <div style={{ marginTop: 'auto', paddingTop: '14px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {p.tags.map(t => <span key={t} style={tagStyle}>{t}</span>)}
        </div>
      </div>
    </article>
  );
};

// — Karriere / Teaser ————————————————————————————————————————
const Karriere = () => {
  const d = window.CV_DATA;
  const highlight = d.experience.slice(0, 3);

  return (
    <section id="karriere" style={{ padding: '64px 0 32px' }}>
      <Container>
        <SectionHeader no="03" label="Werdegang" title={<><em style={{ fontStyle: 'italic' }}>Karriere</em> auf einen Blick</>} />

        {/* Stats bar */}
        <div data-reveal style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0',
          marginBottom: '28px',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
        }}>
          {[
            { label: 'Berufserfahrung', value: 'seit 2011' },
            { label: 'Studium', value: 'B.Sc. Medien & Informationswesen' },
            { label: 'Sprachen', value: 'DE · TR · EN' },
          ].map((s, i) => (
            <div key={i} style={{
              flex: '1 1 200px',
              padding: '16px 24px',
              borderRight: i < 2 ? '1px solid var(--line)' : 'none',
            }}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '10.5px',
                color: 'var(--dim)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}>{s.label}</div>
              <div style={{
                fontFamily: '"Newsreader", Georgia, serif',
                fontSize: '18px',
                fontWeight: 400,
                color: 'var(--ink)',
                letterSpacing: '-0.01em',
              }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Top 3 roles */}
        <div data-reveal className="tt-grid-3" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          marginBottom: '28px',
        }}>
          {highlight.map((e, i) => (
            <div key={i} style={{
              padding: '20px 22px',
              background: i === 0 ? 'var(--ink)' : 'var(--paper)',
              color: i === 0 ? 'var(--bg)' : 'var(--ink)',
              border: '1px solid var(--line)',
              borderRadius: '14px',
            }}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '10.5px',
                color: i === 0 ? 'color-mix(in srgb, var(--bg) 55%, transparent)' : 'var(--dim)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}>{e.from} — {e.to}</div>
              <div style={{
                fontFamily: '"Newsreader", Georgia, serif',
                fontSize: '22px',
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
                marginBottom: '6px',
              }}>{e.role}</div>
              <div style={{
                fontSize: '13px',
                color: i === 0 ? 'color-mix(in srgb, var(--bg) 70%, transparent)' : 'var(--dim)',
                lineHeight: 1.4,
              }}>{e.orgShort} · {e.place}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-reveal style={{ textAlign: 'center' }}>
          <a href="Profil.html" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 22px',
            background: 'transparent',
            border: '1px solid var(--line)',
            borderRadius: '999px',
            textDecoration: 'none',
            color: 'var(--ink)',
            fontSize: '14px',
            transition: 'border-color .2s, background .2s',
          }}>
            <span style={{ fontFamily: '"Newsreader", Georgia, serif', fontStyle: 'italic', fontSize: '16px' }}>Vollständiges Profil</span>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: 'var(--accent)' }}>— Lebenslauf & Methoden ↗</span>
          </a>
        </div>
      </Container>
    </section>
  );
};

// — Methoden / Skills ————————————————————————————————————————
const Methoden = () => {
  const d = window.CV_DATA;
  const groups = [
    {
      title: 'Methoden',
      items: ['Design Thinking', 'Workshop-Facilitation', 'Lean Startup', 'Customer Interviews', 'Business Model Canvas', 'Prozess Mapping', 'Coaching'],
    },
    {
      title: 'Tech & Werkzeuge',
      items: ['WordPress', 'Figma', 'n8n Automation', 'Adobe Premiere', 'Adobe Audition', 'SEO Grundlagen', 'Python (Grundlagen)', 'Rasa'],
    },
    {
      title: 'Sprachen',
      items: ['Deutsch · Muttersprache', 'Türkisch · Muttersprache', 'Englisch · Fließend'],
    },
  ];

  return (
    <section id="methoden" style={{ padding: '64px 0 32px' }}>
      <Container>
        <SectionHeader no="04" label="Werkzeugkasten" title={<><em style={{ fontStyle: 'italic' }}>Methoden</em> & Werkzeuge</>} />

        <div className="tt-grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
          {groups.map(g => (
            <div key={g.title} data-reveal style={{
              padding: '24px 24px 28px',
              background: 'var(--paper)',
              border: '1px solid var(--line)',
              borderRadius: '16px',
            }}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '11px',
                color: 'var(--accent)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '16px',
                paddingBottom: '10px',
                borderBottom: '1px solid var(--line)',
              }}>{g.title}</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {g.items.map(it => (
                  <li key={it} style={{
                    fontFamily: '"Newsreader", Georgia, serif',
                    fontSize: '19px',
                    lineHeight: 1.4,
                    color: 'var(--ink)',
                    fontWeight: 400,
                    letterSpacing: '-0.005em',
                  }}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certs & initiatives */}
        <div className="tt-grid-2" style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {[
            { title: 'Zertifikate', items: d.certificates, icon: '◆' },
            { title: 'Initiativen', items: d.initiatives, icon: '●' },
          ].map(g => (
            <div key={g.title} style={{ padding: '20px 24px', borderTop: '1px solid var(--line)' }}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '11px', color: 'var(--dim)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                marginBottom: '10px',
              }}>{g.title}</div>
              {g.items.map((it, i) => (
                <div key={i} style={{ fontSize: '14px', color: 'var(--ink)', lineHeight: 1.55, padding: '4px 0' }}>
                  <span style={{ color: 'var(--accent)', marginRight: '6px' }}>{g.icon}</span>{it}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// — Notizen / Blog ———————————————————————————————————————————
const Notizen = () => {
  const posts = [
    {
      date: '24. Mai 26',
      read: '3 Min',
      kind: 'Reflexion',
      title: 'Grübeln kostet mehr als Scheitern',
      blurb: 'Ich habe heute gemerkt, dass ich in der Zeit, die ich mit Nachdenken verbringe, schon drei Dinge hätte ausprobieren können.',
      tags: ['Mindset', 'Notiz', 'Freiburg'],
    },
    {
      date: '28. Mär 26',
      read: '4 Min',
      kind: 'Werkstatt',
      title: 'WordPress reicht — und zwar öfter, als man denkt',
      blurb: 'Warum für 80% der KMU, mit denen ich bei CodeCuisine spreche, der klassische Stack völlig genug ist — und wo wir trotzdem weitergehen.',
      tags: ['WordPress', 'KMU', 'Studio'],
    },
    {
      date: '14. Mär 26',
      read: '5 Min',
      kind: 'Werdegang',
      title: 'Was Hotelfach mit Gründungsberatung zu tun hat',
      blurb: 'Empfangs\u00adschalter, Beschwerden, Sonderwünsche, Sprachen. Fast alles, was ich heute mit Teams übe, habe ich an einer Rezeption gelernt.',
      tags: ['Soft Skills', 'Werdegang', 'Reflexion'],
    },
    {
      date: '02. Feb 26',
      read: '7 Min',
      kind: 'Werkzeug',
      title: 'n8n als kleines Studio-Brain',
      blurb: 'Drei Workflows, die CodeCuisine seit ein paar Monaten unauffällig am Laufen halten — vom ersten Lead bis zur Rechnung.',
      tags: ['n8n', 'Automation', 'Prozesse'],
    },
  ];
  const [featured, ...rest] = posts;

  return (
    <section id="notizen" style={{ padding: '64px 0 32px' }}>
      <Container>
        <SectionHeader no="04" label="Werkstattbuch" title={<><em style={{ fontStyle: 'italic' }}>Notizen</em> aus der Werkstatt</>} />

        <div data-reveal className="tt-grid-2" style={{
          background: 'var(--paper)',
          border: '1px solid var(--line)',
          borderRadius: '20px',
          padding: '36px 40px',
          marginBottom: '20px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px',
          alignItems: 'center',
        }}>
          <div>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '11px', color: 'var(--accent)',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              marginBottom: '14px',
              display: 'flex', alignItems: 'center', gap: '10px',
              flexWrap: 'wrap',
            }}>
              <span style={{ padding: '2px 8px', background: 'var(--accent)', color: 'var(--paper)', borderRadius: '3px' }}>Neu</span>
              {featured.date} · {featured.read} · {featured.kind}
            </div>
            <h3 style={{
              fontFamily: '"Newsreader", Georgia, serif',
              fontSize: 'clamp(28px, 3.4vw, 44px)',
              fontWeight: 400, lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: 0, color: 'var(--ink)',
            }}>{featured.title}</h3>
            <p style={{
              marginTop: '14px',
              fontSize: '15px', lineHeight: 1.55, color: 'var(--dim)',
              textWrap: 'pretty',
            }}>{featured.blurb}</p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
              {featured.tags.map(t => <span key={t} style={tagStyle}>{t}</span>)}
            </div>
            <a href="#notizen" style={{
              marginTop: '20px',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '12px',
              color: 'var(--accent)',
              textDecoration: 'none',
              padding: '8px 14px',
              border: '1px solid var(--accent)',
              borderRadius: '999px',
            }}>Weiterlesen ↗</a>
          </div>

          <div style={{
            aspectRatio: '4 / 3',
            background: 'var(--ink)',
            color: 'var(--bg)',
            borderRadius: '14px',
            position: 'relative',
            overflow: 'hidden',
            padding: '20px 22px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--bg) 12%, transparent) 1px, transparent 0)',
              backgroundSize: '10px 10px',
              opacity: 0.6,
            }}></div>
            <div style={{
              position: 'relative',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '10.5px',
              color: 'color-mix(in srgb, var(--bg) 60%, transparent)',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              display: 'flex', justifyContent: 'space-between',
            }}>
              <span>→ post / 01</span>
              <span>{featured.read}</span>
            </div>
            <div style={{
              position: 'relative',
              fontFamily: '"Newsreader", Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(56px, 7vw, 96px)',
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              fontWeight: 300,
            }}>„Machen."</div>
          </div>
        </div>

        <div data-reveal style={{
          background: 'var(--paper)',
          border: '1px solid var(--line)',
          borderRadius: '16px',
          overflow: 'hidden',
        }}>
          {rest.map((post, i) => (
            <a key={i} href="#notizen" className="tt-post-row" style={{
              display: 'grid',
              gridTemplateColumns: '110px 110px 1fr 80px',
              gap: '20px',
              padding: '18px 24px',
              borderTop: i === 0 ? 'none' : '1px solid var(--line)',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'var(--ink)',
              transition: 'background .15s, padding-left .2s cubic-bezier(.2,.7,.3,1)',
            }}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '11px',
                color: 'var(--dim)',
                letterSpacing: '0.04em',
              }}>{post.date}</div>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '10px',
                color: 'var(--accent)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>{post.kind}</div>
              <div>
                <div style={{
                  fontFamily: '"Newsreader", Georgia, serif',
                  fontSize: '22px', lineHeight: 1.2,
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  color: 'var(--ink)',
                }}>{post.title}</div>
                <div style={{ fontSize: '13.5px', color: 'var(--dim)', marginTop: '4px', lineHeight: 1.5, textWrap: 'pretty' }}>
                  {post.blurb}
                </div>
                <div style={{ marginTop: '8px', display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                  {post.tags.map(t => <span key={t} style={tagStyle}>{t}</span>)}
                </div>
              </div>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '11px',
                color: 'var(--dim)',
                whiteSpace: 'nowrap',
                textAlign: 'right',
              }}>
                {post.read}
                <span style={{ marginLeft: '10px', color: 'var(--accent)' }}>↗</span>
              </div>
            </a>
          ))}
        </div>

        <div style={{
          marginTop: '16px',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '11px', color: 'var(--dim)',
          textAlign: 'center',
        }}>
          · Mehr im <a href="#notizen" style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Archiv</a> ·
        </div>
      </Container>
    </section>
  );
};

// — Kontakt / Contact —————————————————————————————————————————
const Kontakt = () => {
  const d = window.CV_DATA;
  return (
    <section id="kontakt" style={{ padding: '88px 0 64px' }}>
      <Container>
        <div data-reveal className="tt-kontakt-card" style={{
          background: 'var(--ink)',
          color: 'var(--bg)',
          borderRadius: '24px',
          padding: '64px 48px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--bg) 10%, transparent) 1px, transparent 0)',
            backgroundSize: '14px 14px',
            opacity: 0.5,
          }}></div>

          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '48px', alignItems: 'end' }} className="tt-contact-grid">
            <div>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '11px',
                color: 'color-mix(in srgb, var(--bg) 60%, transparent)',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                marginBottom: '20px',
              }}>§ 05 · Kontakt</div>
              <h2 style={{
                fontFamily: '"Newsreader", Georgia, serif',
                fontSize: 'clamp(48px, 6vw, 88px)',
                lineHeight: 0.95,
                fontWeight: 400, margin: 0,
                letterSpacing: '-0.025em',
              }}>
                Lass uns <em style={{ color: 'var(--accent)' }}>reden</em>.
              </h2>
              <p style={{
                marginTop: '20px',
                fontSize: 'clamp(16px, 1.6vw, 20px)',
                lineHeight: 1.5,
                color: 'color-mix(in srgb, var(--bg) 80%, transparent)',
                maxWidth: '520px',
                textWrap: 'pretty',
              }}>
                Workshop-Idee, Web-Projekt für dein KMU, oder einfach mal Kaffee in Freiburg — schreib mir
                eine Mail oder ruf an. Ich melde mich meist innerhalb von 24 Stunden.
              </p>

              <div style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a href={`mailto:${d.email}`} style={{
                  padding: '14px 22px',
                  background: 'var(--bg)',
                  color: 'var(--ink)',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 500,
                  letterSpacing: '-0.005em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                }}>
                  {d.email}
                  <span style={{ fontFamily: '"JetBrains Mono", monospace' }}>↗</span>
                </a>
                <a href={`tel:${d.phone.replace(/\s/g, '')}`} style={{
                  padding: '14px 22px',
                  background: 'transparent',
                  color: 'var(--bg)',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  fontSize: '15px',
                  border: '1px solid color-mix(in srgb, var(--bg) 25%, transparent)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  letterSpacing: '-0.005em',
                }}>
                  {d.phone}
                </a>
              </div>
            </div>

            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '12px',
              lineHeight: 1.8,
              color: 'color-mix(in srgb, var(--bg) 70%, transparent)',
              paddingTop: '24px',
              borderTop: '1px solid color-mix(in srgb, var(--bg) 18%, transparent)',
            }}>
              <div style={{ color: 'var(--bg)', marginBottom: '14px' }}>↘ Auch hier</div>
              <div>LinkedIn — linkedin.com/in/tariktasci</div>
              <div>Adresse — {d.address}</div>
              <div>{d.location}</div>
              <div style={{ marginTop: '14px', color: 'color-mix(in srgb, var(--bg) 50%, transparent)' }}>
                — Aktuell verfügbar für Q3/26
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Footer = () => (
  <footer style={{
    padding: '32px 0 48px',
    borderTop: '1px solid var(--line)',
    marginTop: '24px',
  }}>
    <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
      <div style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '11px',
        color: 'var(--dim)',
      }}>
        © 2026 Tarik Tasci · Freiburg im Breisgau · v26.05
      </div>
      <div style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '11px',
        color: 'var(--dim)',
      }}>
        Set in Newsreader, Bricolage Grotesque &amp; JetBrains Mono
      </div>
      <a href="#top" style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: '11px',
        color: 'var(--ink)',
        textDecoration: 'none',
        padding: '6px 12px',
        border: '1px solid var(--line)',
        borderRadius: '999px',
      }}>↑ Nach oben</a>
    </Container>
  </footer>
);

window.WebSections = { Jetzt, Arbeit, Karriere, Methoden, Notizen, Kontakt, Footer };
