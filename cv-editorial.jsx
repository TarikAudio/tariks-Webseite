// Variation A — Editorial / Print
// Paper-feel CV with big italic serif name, fine rules, mono labels, terra accent.

const editorialStyles = {
  page: {
    width: '100%',
    height: '100%',
    background: '#efeae0',
    color: '#1a1812',
    fontFamily: '"Bricolage Grotesque", system-ui, sans-serif',
    fontSize: '11px',
    lineHeight: 1.5,
    padding: '48px 56px 56px',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
  },
  mono: {
    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
    fontFeatureSettings: '"tnum"',
  },
  serif: {
    fontFamily: '"Newsreader", "Cormorant Garamond", Georgia, serif',
    fontWeight: 300,
  },
  rule: { borderTop: '1px solid #1a1812' },
  fineRule: { borderTop: '0.5px solid rgba(26,24,18,0.25)' },
};

function EdMonoLabel({ children, style }) {
  return (
    <div style={{
      ...editorialStyles.mono,
      fontSize: '9px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#1a1812',
      ...style,
    }}>{children}</div>
  );
}

function EdSectionHeader({ no, title, count }) {
  return (
    <div style={{ marginTop: '22px', marginBottom: '12px' }}>
      <div style={{ ...editorialStyles.rule, marginBottom: '6px' }}></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
          <EdMonoLabel style={{ color: '#b04a2e' }}>§ {no}</EdMonoLabel>
          <div style={{ ...editorialStyles.serif, fontSize: '20px', fontStyle: 'italic' }}>{title}</div>
        </div>
        <EdMonoLabel style={{ color: 'rgba(26,24,18,0.5)' }}>{count}</EdMonoLabel>
      </div>
    </div>
  );
}

function EdExperience({ item, idx }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: '14px', padding: '10px 0', borderTop: idx === 0 ? 'none' : '0.5px solid rgba(26,24,18,0.15)' }}>
      <div>
        <div style={{ ...editorialStyles.mono, fontSize: '10px', lineHeight: 1.35, color: '#1a1812' }}>
          {item.from}<br />
          <span style={{ color: 'rgba(26,24,18,0.45)' }}>↓</span><br />
          {item.to}
        </div>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '12px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '-0.005em' }}>{item.role}</div>
          <EdMonoLabel style={{ color: 'rgba(26,24,18,0.55)', flexShrink: 0 }}>{item.place}</EdMonoLabel>
        </div>
        <div style={{ ...editorialStyles.serif, fontStyle: 'italic', fontSize: '13px', color: '#b04a2e', marginTop: '1px' }}>
          {item.org}
        </div>
        <ul style={{ margin: '6px 0 0', padding: 0, listStyle: 'none' }}>
          {item.bullets.map((b, i) => (
            <li key={i} style={{ position: 'relative', paddingLeft: '12px', fontSize: '10.5px', color: 'rgba(26,24,18,0.78)', marginBottom: '2px' }}>
              <span style={{ position: 'absolute', left: 0, top: 0, color: '#b04a2e' }}>—</span>{b}
            </li>
          ))}
        </ul>
        <div style={{ marginTop: '6px', display: 'flex', flexWrap: 'wrap', gap: '3px 8px' }}>
          {item.skills.map(s => (
            <span key={s} style={{ ...editorialStyles.mono, fontSize: '8.5px', color: 'rgba(26,24,18,0.55)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CVEditorial() {
  const d = window.CV_DATA;
  return (
    <div style={editorialStyles.page}>
      {/* Masthead */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
        <EdMonoLabel>Curriculum № 26 — Frühjahr 2026</EdMonoLabel>
        <EdMonoLabel style={{ color: 'rgba(26,24,18,0.55)' }}>Lebenslauf / Edition I</EdMonoLabel>
      </div>
      <div style={editorialStyles.rule}></div>

      {/* Name display */}
      <div style={{ marginTop: '28px', marginBottom: '20px', position: 'relative' }}>
        <div style={{ ...editorialStyles.serif, fontSize: '88px', lineHeight: 0.92, letterSpacing: '-0.025em', fontStyle: 'italic' }}>
          Tarik
        </div>
        <div style={{ ...editorialStyles.serif, fontSize: '88px', lineHeight: 0.92, letterSpacing: '-0.025em', marginTop: '2px' }}>
          Tasci<span style={{ color: '#b04a2e' }}>.</span>
        </div>
        <div style={{ position: 'absolute', right: 0, top: '6px', textAlign: 'right', maxWidth: '210px' }}>
          <EdMonoLabel style={{ color: '#b04a2e', marginBottom: '6px' }}>↘ Kontakt</EdMonoLabel>
          <div style={{ ...editorialStyles.mono, fontSize: '10px', lineHeight: 1.7, color: '#1a1812' }}>
            {d.address}<br />
            {d.location}<br />
            <span style={{ color: 'rgba(26,24,18,0.55)' }}>—</span><br />
            {d.email}<br />
            {d.phone}<br />
            {d.linkedin}
          </div>
        </div>
      </div>

      {/* Tagline + about */}
      <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '24px', marginTop: '6px' }}>
        <div>
          <EdMonoLabel style={{ color: 'rgba(26,24,18,0.55)', marginBottom: '6px' }}>Rollen</EdMonoLabel>
          <div style={{ ...editorialStyles.serif, fontStyle: 'italic', fontSize: '15px', lineHeight: 1.25, color: '#1a1812' }}>
            Gründungs­berater, Mitgründer, Designer & Medien­macher.
          </div>
        </div>
        <div>
          <EdMonoLabel style={{ color: 'rgba(26,24,18,0.55)', marginBottom: '6px' }}>Notiz</EdMonoLabel>
          <div style={{ fontSize: '11.5px', lineHeight: 1.55, color: 'rgba(26,24,18,0.85)', textWrap: 'pretty' }}>
            {d.about}
          </div>
        </div>
      </div>

      <EdSectionHeader no="01" title="Praktische Erfahrungen" count={`${d.experience.length} Stationen`} />
      <div>
        {d.experience.map((x, i) => <EdExperience key={i} item={x} idx={i} />)}
      </div>

      {/* Two columns: Education + Sidebar */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '32px', marginTop: '4px' }}>
        <div>
          <EdSectionHeader no="02" title="Ausbildung" count={`${d.education.length} Einträge`} />
          {d.education.map((e, i) => (
            <div key={i} style={{ padding: '8px 0', borderTop: i === 0 ? 'none' : '0.5px solid rgba(26,24,18,0.15)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ fontSize: '12px', fontWeight: 600 }}>{e.title}</div>
                <EdMonoLabel style={{ color: 'rgba(26,24,18,0.55)' }}>{e.from} — {e.to}</EdMonoLabel>
              </div>
              <div style={{ ...editorialStyles.serif, fontStyle: 'italic', fontSize: '12px', color: '#b04a2e' }}>
                {e.org}{e.grade ? ` · ${e.grade}` : ''}
              </div>
              <div style={{ ...editorialStyles.mono, fontSize: '8.5px', color: 'rgba(26,24,18,0.55)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '3px' }}>
                {e.skills.join(' · ')}
              </div>
            </div>
          ))}

          <EdSectionHeader no="03" title="Projekte" count={`${d.projects.length}`} />
          {d.projects.map((p, i) => (
            <div key={i} style={{ padding: '8px 0', borderTop: i === 0 ? 'none' : '0.5px solid rgba(26,24,18,0.15)' }}>
              <div style={{ fontSize: '12px', fontWeight: 600 }}>{p.title}</div>
              <div style={{ fontSize: '10.5px', color: 'rgba(26,24,18,0.78)', marginTop: '2px' }}>{p.blurb}</div>
              <div style={{ ...editorialStyles.mono, fontSize: '8.5px', color: 'rgba(26,24,18,0.55)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '3px' }}>
                {p.skills.join(' · ')}
              </div>
            </div>
          ))}
        </div>

        <div>
          <EdSectionHeader no="04" title="Kenntnisse" count="" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 6px' }}>
            {d.skills.map(s => (
              <span key={s} style={{
                ...editorialStyles.mono,
                fontSize: '9px',
                padding: '3px 7px',
                border: '0.5px solid rgba(26,24,18,0.4)',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.4)',
              }}>{s}</span>
            ))}
          </div>

          <EdSectionHeader no="05" title="Sprachen" count="" />
          {d.languages.map((l, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderTop: i === 0 ? 'none' : '0.5px solid rgba(26,24,18,0.15)' }}>
              <span style={{ ...editorialStyles.serif, fontStyle: 'italic', fontSize: '14px' }}>{l.name}</span>
              <EdMonoLabel style={{ color: 'rgba(26,24,18,0.55)', alignSelf: 'center' }}>{l.level}</EdMonoLabel>
            </div>
          ))}

          <EdSectionHeader no="06" title="Zertifikate" count="" />
          {d.certificates.map((c, i) => (
            <div key={i} style={{ fontSize: '10.5px', lineHeight: 1.4, padding: '4px 0', color: 'rgba(26,24,18,0.85)', borderTop: i === 0 ? 'none' : '0.5px solid rgba(26,24,18,0.15)' }}>
              <span style={{ color: '#b04a2e' }}>◆</span> {c}
            </div>
          ))}

          <EdSectionHeader no="07" title="Initiativen" count="" />
          {d.initiatives.map((c, i) => (
            <div key={i} style={{ fontSize: '10.5px', lineHeight: 1.4, padding: '4px 0', color: 'rgba(26,24,18,0.85)', borderTop: i === 0 ? 'none' : '0.5px solid rgba(26,24,18,0.15)' }}>
              <span style={{ color: '#b04a2e' }}>◆</span> {c}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: 'absolute', bottom: '24px', left: '56px', right: '56px' }}>
        <div style={editorialStyles.fineRule}></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
          <EdMonoLabel style={{ color: 'rgba(26,24,18,0.55)' }}>Set in Newsreader & JetBrains Mono</EdMonoLabel>
          <EdMonoLabel style={{ color: 'rgba(26,24,18,0.55)' }}>Pg. 01 / 01</EdMonoLabel>
        </div>
      </div>
    </div>
  );
}

window.CVEditorial = CVEditorial;
