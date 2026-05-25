// Variation C — Bento / Modular dashboard
// Modern, grounded card grid with subtle warmth.

const bentoStyles = {
  page: {
    width: '100%',
    height: '100%',
    background: '#ece8de',
    padding: '24px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    fontFamily: '"Bricolage Grotesque", system-ui, sans-serif',
    color: '#1a1812',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'auto auto 1fr auto',
    gap: '14px',
  },
  card: {
    background: '#fbf8f1',
    border: '1px solid #d8d2c2',
    borderRadius: '14px',
    padding: '18px 20px',
    boxSizing: 'border-box',
    boxShadow: '0 1px 0 rgba(0,0,0,0.02)',
  },
  cardDark: {
    background: '#1a1812',
    color: '#ece8de',
    border: '1px solid #1a1812',
    borderRadius: '14px',
    padding: '18px 20px',
    boxSizing: 'border-box',
  },
  cardAccent: {
    background: '#3a5a3e',
    color: '#f0ece0',
    borderRadius: '14px',
    padding: '18px 20px',
    boxSizing: 'border-box',
  },
  mono: { fontFamily: '"JetBrains Mono", ui-monospace, monospace', fontFeatureSettings: '"tnum"' },
  label: {
    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
    fontSize: '9.5px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'rgba(26,24,18,0.55)',
  },
};

function BoCard({ style, children, span = 4, rowSpan = 1, variant = 'light' }) {
  const base = variant === 'dark' ? bentoStyles.cardDark : variant === 'accent' ? bentoStyles.cardAccent : bentoStyles.card;
  return (
    <div style={{
      ...base,
      gridColumn: `span ${span}`,
      gridRow: `span ${rowSpan}`,
      overflow: 'hidden',
      ...style,
    }}>
      {children}
    </div>
  );
}

function BoLabel({ children, dark }) {
  return (
    <div style={{
      ...bentoStyles.label,
      color: dark ? 'rgba(236,232,222,0.55)' : 'rgba(26,24,18,0.55)',
    }}>{children}</div>
  );
}

function CVBento() {
  const d = window.CV_DATA;

  return (
    <div style={bentoStyles.page}>
      {/* Row 1: Hero (8 cols) + Contact (4 cols) */}
      <BoCard span={8}>
        <BoLabel>Curriculum Vitae · Frühjahr 2026</BoLabel>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '8px' }}>
          <div>
            <div style={{ fontSize: '52px', fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.03em' }}>
              {d.firstName}
            </div>
            <div style={{ fontSize: '52px', fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.03em', color: '#3a5a3e' }}>
              {d.lastName}<span style={{ color: '#c4533a' }}>.</span>
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(26,24,18,0.7)', marginTop: '12px', maxWidth: '380px', textWrap: 'pretty' }}>
              {d.tagline}
            </div>
          </div>
          <div style={{
            width: '92px', height: '92px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #3a5a3e 0%, #c4533a 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fbf8f1', fontSize: '36px', fontWeight: 500, letterSpacing: '-0.04em',
            flexShrink: 0,
          }}>
            tt
          </div>
        </div>
      </BoCard>

      <BoCard span={4} variant="dark">
        <BoLabel dark>Kontakt</BoLabel>
        <div style={{ marginTop: '10px', fontSize: '11.5px', lineHeight: 1.65, ...bentoStyles.mono }}>
          <div style={{ marginBottom: '6px' }}>
            <span style={{ color: 'rgba(236,232,222,0.5)' }}>↗</span> {d.email}
          </div>
          <div style={{ marginBottom: '6px' }}>
            <span style={{ color: 'rgba(236,232,222,0.5)' }}>☎</span> {d.phone}
          </div>
          <div style={{ marginBottom: '6px' }}>
            <span style={{ color: 'rgba(236,232,222,0.5)' }}>⌖</span> {d.address}
          </div>
          <div>
            <span style={{ color: 'rgba(236,232,222,0.5)' }}>◉</span> {d.location}
          </div>
        </div>
      </BoCard>

      {/* Row 2: Stats */}
      <BoCard span={3}>
        <BoLabel>Aktiv seit</BoLabel>
        <div style={{ fontSize: '40px', lineHeight: 1, fontWeight: 500, marginTop: '8px', letterSpacing: '-0.02em' }}>
          15<span style={{ color: '#c4533a' }}>y</span>
        </div>
        <div style={{ fontSize: '10px', color: 'rgba(26,24,18,0.6)', marginTop: '4px' }}>Hospitality → Medien → Gründung</div>
      </BoCard>
      <BoCard span={3}>
        <BoLabel>Aktuelle Rollen</BoLabel>
        <div style={{ fontSize: '40px', lineHeight: 1, fontWeight: 500, marginTop: '8px', letterSpacing: '-0.02em' }}>
          02
        </div>
        <div style={{ fontSize: '10px', color: 'rgba(26,24,18,0.6)', marginTop: '4px' }}>HS Offenburg · CodeCuisine</div>
      </BoCard>
      <BoCard span={3}>
        <BoLabel>Sprachen</BoLabel>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '8px' }}>
          <div style={{ fontSize: '40px', lineHeight: 1, fontWeight: 500, letterSpacing: '-0.02em' }}>3</div>
          <div style={{ fontSize: '14px', color: 'rgba(26,24,18,0.6)' }}>fließend</div>
        </div>
        <div style={{ fontSize: '10px', color: 'rgba(26,24,18,0.6)', marginTop: '4px' }}>DE · TR · EN</div>
      </BoCard>
      <BoCard span={3} variant="accent">
        <BoLabel dark>Methodik</BoLabel>
        <div style={{ fontSize: '15px', fontWeight: 500, lineHeight: 1.2, marginTop: '8px', letterSpacing: '-0.01em' }}>
          Design&nbsp;Thinking, Lean&nbsp;Startup, Workshop-Facilitation.
        </div>
      </BoCard>

      {/* Row 3: Timeline (full width) + Experience */}
      <BoCard span={12}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div>
            <BoLabel>§ Praktische Erfahrungen</BoLabel>
            <div style={{ fontSize: '16px', fontWeight: 500, marginTop: '2px' }}>
              Stationen 2011 → 2026
            </div>
          </div>
          <div style={{ ...bentoStyles.mono, fontSize: '10px', color: 'rgba(26,24,18,0.5)' }}>
            {d.experience.length} EINTRÄGE
          </div>
        </div>

        {/* Mini timeline */}
        <div style={{ marginTop: '12px', position: 'relative', height: '34px', display: 'flex' }}>
          {d.experience.map((e, i) => {
            const colors = ['#c4533a', '#3a5a3e', '#7a5a1a', '#3a5a3e', '#c4533a', '#7a5a1a', '#3a5a3e'];
            return (
              <div key={i} style={{ flex: 1, padding: '0 2px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <div style={{ background: colors[i % colors.length], height: i === 0 ? '28px' : `${10 + (d.experience.length - i) * 3}px`, borderRadius: '3px 3px 0 0' }}></div>
                <div style={{ ...bentoStyles.mono, fontSize: '8.5px', color: 'rgba(26,24,18,0.5)', marginTop: '3px', textAlign: 'center' }}>
                  {e.from}
                </div>
              </div>
            );
          })}
        </div>

        {/* Experience list */}
        <div style={{ marginTop: '14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px' }}>
          {d.experience.slice(0, 4).map((e, i) => (
            <div key={i} style={{
              padding: '10px 0',
              borderTop: '1px solid rgba(26,24,18,0.12)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ fontSize: '12.5px', fontWeight: 600, letterSpacing: '-0.005em' }}>{e.role}</div>
                <div style={{ ...bentoStyles.mono, fontSize: '9.5px', color: 'rgba(26,24,18,0.55)' }}>{e.from} — {e.to}</div>
              </div>
              <div style={{ fontSize: '11px', color: '#3a5a3e', marginTop: '1px' }}>{e.org}</div>
              <div style={{ fontSize: '10.5px', color: 'rgba(26,24,18,0.7)', marginTop: '4px', lineHeight: 1.45 }}>
                {e.bullets[0]}
              </div>
              <div style={{ marginTop: '4px', display: 'flex', flexWrap: 'wrap', gap: '3px' }}>
                {e.skills.slice(0, 4).map(s => (
                  <span key={s} style={{ ...bentoStyles.mono, fontSize: '8.5px', padding: '1px 6px', background: '#ece8de', color: 'rgba(26,24,18,0.7)', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* condensed remaining */}
        <div style={{ marginTop: '6px', padding: '8px 0 0', borderTop: '1px solid rgba(26,24,18,0.12)' }}>
          <BoLabel>Frühere Stationen</BoLabel>
          <div style={{ marginTop: '6px', display: 'flex', flexWrap: 'wrap', gap: '6px 14px' }}>
            {d.experience.slice(4).map((e, i) => (
              <div key={i} style={{ fontSize: '10.5px' }}>
                <span style={{ ...bentoStyles.mono, color: 'rgba(26,24,18,0.5)', marginRight: '4px' }}>{e.from}–{e.to}</span>
                <span style={{ color: '#1a1812' }}>{e.role}</span>
                <span style={{ color: 'rgba(26,24,18,0.55)' }}> @ {e.orgShort}</span>
              </div>
            ))}
          </div>
        </div>
      </BoCard>

      {/* Row 4: Ausbildung / Skills / Projekte */}
      <BoCard span={5}>
        <BoLabel>§ Ausbildung</BoLabel>
        <div style={{ marginTop: '10px' }}>
          {d.education.map((e, i) => (
            <div key={i} style={{ padding: '7px 0', borderTop: i === 0 ? 'none' : '1px solid rgba(26,24,18,0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ fontSize: '11.5px', fontWeight: 600 }}>{e.title}</div>
                <div style={{ ...bentoStyles.mono, fontSize: '9px', color: 'rgba(26,24,18,0.5)' }}>{e.from.split('/')[1]}–{e.to.split('/')[1] || 'jetzt'}</div>
              </div>
              <div style={{ fontSize: '10.5px', color: '#3a5a3e' }}>{e.org}{e.grade ? ` · ${e.grade}` : ''}</div>
            </div>
          ))}
        </div>
      </BoCard>

      <BoCard span={4}>
        <BoLabel>§ Kenntnisse</BoLabel>
        <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
          {d.skills.map(s => (
            <span key={s} style={{
              fontSize: '10.5px',
              padding: '4px 9px',
              background: '#ece8de',
              borderRadius: '999px',
              color: '#1a1812',
            }}>{s}</span>
          ))}
        </div>

        <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid rgba(26,24,18,0.1)' }}>
          <BoLabel>Sprachen</BoLabel>
          <div style={{ marginTop: '6px' }}>
            {d.languages.map(l => (
              <div key={l.name} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', padding: '2px 0' }}>
                <span>{l.name}</span>
                <span style={{ color: 'rgba(26,24,18,0.55)' }}>{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </BoCard>

      <BoCard span={3}>
        <BoLabel>§ Zertifikate</BoLabel>
        <div style={{ marginTop: '8px' }}>
          {d.certificates.map((c, i) => (
            <div key={i} style={{ fontSize: '10px', lineHeight: 1.4, padding: '4px 0', color: 'rgba(26,24,18,0.85)', borderTop: i === 0 ? 'none' : '1px solid rgba(26,24,18,0.1)' }}>
              <span style={{ color: '#c4533a' }}>◆</span> {c}
            </div>
          ))}
        </div>
        <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid rgba(26,24,18,0.12)' }}>
          <BoLabel>Initiativen</BoLabel>
          <div style={{ marginTop: '4px' }}>
            {d.initiatives.map((c, i) => (
              <div key={i} style={{ fontSize: '10px', lineHeight: 1.4, padding: '4px 0', color: 'rgba(26,24,18,0.85)' }}>
                <span style={{ color: '#3a5a3e' }}>●</span> {c}
              </div>
            ))}
          </div>
        </div>
      </BoCard>
    </div>
  );
}

window.CVBento = CVBento;
