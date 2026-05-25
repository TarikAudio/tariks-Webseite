// FirstBeat case study body — chapters, gallery, sticky aside

function FBChapter({ no, title, kicker, children }) {
  return (
    <section style={{ padding: '40px 32px' }}>
      <div data-reveal style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: '14px',
          marginBottom: '14px',
        }}>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '11px', color: 'var(--accent)',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            minWidth: '40px',
          }}>{no}</div>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '11px', color: 'var(--dim)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>{kicker}</div>
        </div>
        <h2 style={{
          fontFamily: '"Newsreader", Georgia, serif',
          fontSize: 'clamp(28px, 3.6vw, 52px)',
          lineHeight: 1.05, letterSpacing: '-0.02em',
          fontWeight: 400, margin: '0 0 24px',
          color: 'var(--ink)',
          maxWidth: '900px',
        }}>{title}</h2>
        <div className="tt-article-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 280px',
          gap: '48px',
          alignItems: 'start',
        }}>
          {children}
        </div>
      </div>
    </section>
  );
}

function FBProse({ children }) {
  return (
    <div style={{
      fontFamily: '"Newsreader", Georgia, serif',
      fontSize: '19px', lineHeight: 1.55,
      color: 'var(--ink)', fontWeight: 400,
      maxWidth: '680px',
    }}>{children}</div>
  );
}

function FBAside({ items }) {
  return (
    <aside className="tt-article-aside" style={{
      position: 'sticky', top: '88px',
      borderLeft: '1px solid var(--line)',
      paddingLeft: '24px',
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: '11.5px',
      color: 'var(--dim)',
      lineHeight: 1.7,
    }}>
      {items.map((it, i) => (
        <div key={i} style={{ marginBottom: '14px' }}>
          <div style={{ color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', marginBottom: '4px' }}>
            {it.label}
          </div>
          <div style={{ color: 'var(--ink)', fontFamily: '"Newsreader", Georgia, serif', fontSize: '16px' }}>
            {it.value}
          </div>
        </div>
      ))}
    </aside>
  );
}

function FBQuote({ children, cite }) {
  return (
    <blockquote data-reveal style={{
      margin: '40px auto',
      maxWidth: '900px',
      padding: '0 32px',
      fontFamily: '"Newsreader", Georgia, serif',
      fontStyle: 'italic',
      fontSize: 'clamp(24px, 3vw, 38px)',
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
      color: 'var(--ink)',
      fontWeight: 300,
      textAlign: 'center',
      position: 'relative',
    }}>
      <span style={{
        position: 'absolute', left: '32px', top: '-20px',
        fontSize: '80px', color: 'var(--accent)',
        fontFamily: '"Newsreader", Georgia, serif',
        lineHeight: 1, opacity: 0.4,
      }}>„</span>
      {children}
      {cite && (
        <div style={{
          marginTop: '14px',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '11px', color: 'var(--dim)',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          fontStyle: 'normal',
        }}>— {cite}</div>
      )}
    </blockquote>
  );
}

function FBGallery({ items }) {
  return (
    <section style={{ padding: '24px 32px 32px' }}>
      <div data-reveal style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
        }}>
          {items.map((it, i) => (
            <div key={i} style={{
              aspectRatio: '4 / 3',
              background: it.bg || 'var(--ink)',
              color: 'var(--bg)',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              padding: '18px 20px',
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
                fontSize: '10px', color: 'color-mix(in srgb, var(--bg) 60%, transparent)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>{it.label}</div>
              <div style={{
                position: 'relative',
                fontFamily: '"Newsreader", Georgia, serif',
                fontStyle: 'italic',
                fontSize: '34px', lineHeight: 1,
                fontWeight: 300, letterSpacing: '-0.02em',
              }}>{it.glyph}</div>
            </div>
          ))}
        </div>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '10.5px', color: 'var(--dim)',
          letterSpacing: '0.08em', textTransform: 'uppercase',
          marginTop: '14px', textAlign: 'right',
        }}>{items.length} Screens · Platzhalter</div>
      </div>
    </section>
  );
}

window.FBChapter = FBChapter;
window.FBProse = FBProse;
window.FBAside = FBAside;
window.FBQuote = FBQuote;
window.FBGallery = FBGallery;
