// FirstBeat Case-Study content

const FB = {
  title: 'FirstBeat',
  subtitle: 'Ein Serious Game, das durch eigene Songs lernt.',
  tag: 'Bachelorprojekt · 2023 – 2024',
  role: 'Konzept · Game Design · Songwriting · Prototyping',
  duration: '8 Monate',
  team: '1 Person · Hochschule Offenburg',
  result: 'Vollständiger klickbarer Prototyp + Business-Modell · Note 2,1 im B.Sc. Medien & Informationswesen',
  context: 'Lerninhalte über Spiel und Musik verankern — ist das mehr als ein netter Gedanke? Im Bachelorprojekt habe ich genau diese Frage angefasst. Eigenes Konzept, eigener Prototyp, eigene Songs. Und ein Geschäftsmodell, das tragfähig sein könnte.',
};

function FBHero() {
  return (
    <section className="tt-hero-section" style={{ padding: '48px 32px 32px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div data-reveal style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '11px',
          color: 'var(--dim)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '24px',
          flexWrap: 'wrap',
        }}>
          <span style={{ padding: '3px 9px', background: 'var(--accent)', color: 'var(--paper)', borderRadius: '3px' }}>Case Study</span>
          № 02 · {FB.tag}
        </div>

        <h1 className="tt-hero-title" data-reveal style={{
          fontFamily: '"Newsreader", Georgia, serif',
          fontSize: 'clamp(56px, 11vw, 156px)',
          fontWeight: 400, lineHeight: 0.92, letterSpacing: '-0.03em',
          margin: 0, color: 'var(--ink)',
        }}>
          <span className="tt-mask"><span className="tt-rise" style={{ fontStyle: 'italic', animationDelay: '0ms' }}>First</span></span>
          <span className="tt-mask"><span className="tt-rise" style={{ animationDelay: '120ms' }}>Beat<span style={{ color: 'var(--accent)' }}>.</span></span></span>
        </h1>

        <p data-reveal style={{
          maxWidth: '720px',
          marginTop: '24px',
          fontFamily: '"Newsreader", Georgia, serif',
          fontSize: 'clamp(20px, 2.2vw, 30px)',
          lineHeight: 1.3,
          fontWeight: 300,
          color: 'var(--ink)',
          textWrap: 'pretty',
        }}>{FB.subtitle}</p>
      </div>
    </section>
  );
}

function FBMeta() {
  const rows = [
    { label: 'Rolle', value: FB.role },
    { label: 'Zeitraum', value: FB.duration },
    { label: 'Setup', value: FB.team },
    { label: 'Ergebnis', value: FB.result },
  ];
  return (
    <section style={{ padding: '24px 32px' }}>
      <div data-reveal style={{
        maxWidth: '1240px', margin: '0 auto',
        background: 'var(--paper)',
        border: '1px solid var(--line)',
        borderRadius: '16px',
        padding: '8px 28px',
      }}>
        {rows.map((r, i) => (
          <div key={r.label} style={{
            display: 'grid',
            gridTemplateColumns: '160px 1fr',
            gap: '20px',
            padding: '16px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--line)',
            alignItems: 'baseline',
          }}>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '11px', color: 'var(--accent)',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>{r.label}</div>
            <div style={{
              fontFamily: '"Newsreader", Georgia, serif',
              fontSize: '19px', lineHeight: 1.35,
              color: 'var(--ink)', fontWeight: 400,
              letterSpacing: '-0.005em',
            }}>{r.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.FBHero = FBHero;
window.FBMeta = FBMeta;
window.FB_DATA = FB;
