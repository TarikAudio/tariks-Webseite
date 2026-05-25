// Variation B — Terminal / IDE
// Light-theme IDE-like layout: file tree, tabs, monospace, status bar.

const ideStyles = {
  shell: {
    width: '100%',
    height: '100%',
    background: '#fafaf7',
    color: '#1a1a1a',
    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
    fontSize: '11px',
    lineHeight: 1.55,
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  topbar: {
    height: '34px',
    background: '#f0eee8',
    borderBottom: '1px solid #e0ddd4',
    display: 'flex',
    alignItems: 'center',
    padding: '0 14px',
    gap: '8px',
    flexShrink: 0,
  },
  dots: { display: 'flex', gap: '6px' },
  dot: (c) => ({ width: '11px', height: '11px', borderRadius: '50%', background: c }),
  tab: (active) => ({
    height: '28px',
    padding: '0 14px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: active ? '#fafaf7' : 'transparent',
    borderRight: '1px solid #e0ddd4',
    borderTop: active ? '2px solid #2a6a5a' : '2px solid transparent',
    fontSize: '10.5px',
    color: active ? '#1a1a1a' : '#7a7a72',
    cursor: 'default',
  }),
  body: { flex: 1, display: 'flex', minHeight: 0 },
  sidebar: {
    width: '210px',
    background: '#f5f3ec',
    borderRight: '1px solid #e0ddd4',
    padding: '14px 0',
    overflowY: 'auto',
    flexShrink: 0,
    fontSize: '11px',
  },
  main: { flex: 1, overflow: 'auto', padding: '24px 36px 28px', minWidth: 0 },
  panel: {
    width: '230px',
    background: '#f5f3ec',
    borderLeft: '1px solid #e0ddd4',
    padding: '16px 16px',
    flexShrink: 0,
    fontSize: '10.5px',
    overflowY: 'auto',
  },
  statusbar: {
    height: '24px',
    background: '#2a6a5a',
    color: '#e9ecda',
    display: 'flex',
    alignItems: 'center',
    padding: '0 14px',
    gap: '14px',
    fontSize: '10px',
    flexShrink: 0,
  },
  comment: { color: '#8a8a80' },
  string: { color: '#a14a2e' },
  key: { color: '#2a6a5a' },
  num: { color: '#7a5a1a' },
  punct: { color: '#9a9a90' },
};

function TreeItem({ icon, name, depth = 0, active, indent }) {
  return (
    <div style={{
      padding: `2px 14px 2px ${10 + depth * 14}px`,
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      background: active ? '#e6e2d4' : 'transparent',
      color: active ? '#1a1a1a' : '#3a3a32',
      cursor: 'default',
    }}>
      <span style={{ color: '#9a9a90', width: '12px', textAlign: 'center', fontSize: '10px' }}>{icon}</span>
      <span style={{ fontSize: '10.5px' }}>{name}</span>
    </div>
  );
}

function Comment({ children }) {
  return <span style={ideStyles.comment}>{'// '}{children}</span>;
}

function CVTerminal() {
  const d = window.CV_DATA;
  return (
    <div style={ideStyles.shell}>
      {/* Top bar */}
      <div style={ideStyles.topbar}>
        <div style={ideStyles.dots}>
          <div style={ideStyles.dot('#e8a23a')}></div>
          <div style={ideStyles.dot('#c9c4b4')}></div>
          <div style={ideStyles.dot('#c9c4b4')}></div>
        </div>
        <div style={{ fontSize: '10.5px', color: '#7a7a72', marginLeft: '10px' }}>
          ~/career/tarik-tasci — <span style={{ color: '#2a6a5a' }}>● main</span>
        </div>
        <div style={{ marginLeft: 'auto', fontSize: '10px', color: '#9a9a90' }}>
          v26.05 · 2 files · 132 lines
        </div>
      </div>

      {/* Tab strip */}
      <div style={{ display: 'flex', background: '#f0eee8', borderBottom: '1px solid #e0ddd4', height: '30px', flexShrink: 0 }}>
        <div style={ideStyles.tab(true)}>
          <span style={{ color: '#2a6a5a' }}>▾</span> profile.md
        </div>
        <div style={ideStyles.tab(false)}>
          <span style={{ color: '#9a9a90' }}>{}</span> career.json
        </div>
        <div style={ideStyles.tab(false)}>
          <span style={{ color: '#9a9a90' }}>$</span> skills.sh
        </div>
      </div>

      <div style={ideStyles.body}>
        {/* Sidebar — file tree */}
        <div style={ideStyles.sidebar}>
          <div style={{ padding: '0 14px 8px', fontSize: '9.5px', color: '#9a9a90', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Explorer</div>
          <TreeItem icon="▾" name="tarik-tasci" />
          <TreeItem icon="▾" name="about" depth={1} />
          <TreeItem icon="◦" name="profile.md" depth={2} active />
          <TreeItem icon="◦" name="contact.yml" depth={2} />
          <TreeItem icon="▾" name="career" depth={1} />
          {d.experience.map((e, i) => (
            <TreeItem key={i} icon="·" name={`${e.from.replace('/', '-')}_${e.orgShort.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 14)}.md`} depth={2} />
          ))}
          <TreeItem icon="▾" name="education" depth={1} />
          {d.education.map((e, i) => (
            <TreeItem key={i} icon="·" name={`${e.from.split('/')[1]}-${e.to.split('/')[1] || 'now'}.md`} depth={2} />
          ))}
          <TreeItem icon="▾" name="projects" depth={1} />
          {d.projects.map((p, i) => (
            <TreeItem key={i} icon="·" name={p.title.toLowerCase().split(/[ —-]/)[0] + '.md'} depth={2} />
          ))}
          <TreeItem icon="◦" name="README.md" depth={1} />
          <TreeItem icon="◦" name="skills.json" depth={1} />
          <TreeItem icon="◦" name=".env" depth={1} />
        </div>

        {/* Main — content */}
        <div style={ideStyles.main}>
          {/* line numbers gutter via padding-left + counter, simplified */}
          <div style={{ color: '#9a9a90', fontSize: '9.5px', marginBottom: '14px' }}>
            <Comment>profile.md — generated {new Date().toLocaleDateString('de-DE')}</Comment>
          </div>

          <div style={{ fontSize: '32px', fontWeight: 500, color: '#1a1a1a', letterSpacing: '-0.02em' }}>
            <span style={{ color: '#2a6a5a' }}># </span>{d.name}
          </div>
          <div style={{ fontSize: '12px', color: '#5a5a52', marginTop: '4px' }}>
            <Comment>{d.tagline}</Comment>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 24px', marginTop: '16px', fontSize: '10.5px', color: '#3a3a32' }}>
            <div><span style={ideStyles.key}>location</span><span style={ideStyles.punct}>:</span> <span style={ideStyles.string}>"{d.location}"</span></div>
            <div><span style={ideStyles.key}>email</span><span style={ideStyles.punct}>:</span> <span style={ideStyles.string}>"{d.email}"</span></div>
            <div><span style={ideStyles.key}>phone</span><span style={ideStyles.punct}>:</span> <span style={ideStyles.string}>"{d.phone}"</span></div>
            <div><span style={ideStyles.key}>address</span><span style={ideStyles.punct}>:</span> <span style={ideStyles.string}>"{d.address}"</span></div>
          </div>

          <div style={{ marginTop: '16px', padding: '12px 14px', background: '#f5f3ec', borderLeft: '2px solid #2a6a5a', fontSize: '11px', lineHeight: 1.6, color: '#3a3a32', fontFamily: '"Bricolage Grotesque", system-ui, sans-serif' }}>
            <span style={{ color: '#2a6a5a', fontFamily: '"JetBrains Mono", monospace', fontSize: '10px' }}>{'> '}</span>
            {d.about}
          </div>

          {/* Experience as commit log */}
          <div style={{ marginTop: '24px' }}>
            <div style={{ fontSize: '14px', color: '#1a1a1a', marginBottom: '4px' }}>
              <span style={{ color: '#2a6a5a' }}>## </span>git log --career
            </div>
            <div style={{ fontSize: '9.5px', color: '#9a9a90', marginBottom: '12px' }}>
              <Comment>{d.experience.length} commits · chronological</Comment>
            </div>

            {d.experience.map((e, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '14px 1fr', gap: '10px', marginBottom: '14px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === 0 ? '#c9572e' : '#2a6a5a', marginTop: '4px' }}></div>
                  {i < d.experience.length - 1 && <div style={{ width: '1px', flex: 1, background: '#d8d4c8', marginTop: '2px' }}></div>}
                </div>
                <div style={{ paddingBottom: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '12px' }}>
                    <div>
                      <span style={{ color: '#7a5a1a', fontSize: '10.5px' }}>commit </span>
                      <span style={{ color: '#9a9a90', fontSize: '10.5px' }}>{Math.random().toString(16).slice(2, 9)}</span>
                    </div>
                    <span style={{ color: '#9a9a90', fontSize: '10px' }}>{e.from} → {e.to}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#1a1a1a', marginTop: '2px' }}>
                    <span style={{ color: '#2a6a5a' }}>+</span> {e.role} <span style={{ color: '#9a9a90' }}>@</span> <span style={{ color: '#c9572e' }}>{e.org}</span>
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#5a5a52', marginTop: '4px', paddingLeft: '14px', fontFamily: '"Bricolage Grotesque", system-ui, sans-serif' }}>
                    {e.bullets.map((b, j) => (
                      <div key={j}>· {b}</div>
                    ))}
                  </div>
                  <div style={{ marginTop: '4px', display: 'flex', flexWrap: 'wrap', gap: '3px' }}>
                    {e.skills.map(s => (
                      <span key={s} style={{ fontSize: '9px', padding: '1px 6px', background: '#e9ecda', color: '#2a6a5a', borderRadius: '3px' }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education + Projects */}
          <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              <div style={{ fontSize: '14px', color: '#1a1a1a', marginBottom: '8px' }}>
                <span style={{ color: '#2a6a5a' }}>## </span>education
              </div>
              {d.education.map((e, i) => (
                <div key={i} style={{ marginBottom: '10px', fontSize: '10.5px' }}>
                  <div style={{ color: '#9a9a90' }}>[{e.from} — {e.to}]</div>
                  <div style={{ color: '#1a1a1a' }}>{e.title}</div>
                  <div style={{ color: '#c9572e' }}>{e.org}{e.grade ? ` · ${e.grade}` : ''}</div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '14px', color: '#1a1a1a', marginBottom: '8px' }}>
                <span style={{ color: '#2a6a5a' }}>## </span>projects
              </div>
              {d.projects.map((p, i) => (
                <div key={i} style={{ marginBottom: '10px' }}>
                  <div style={{ color: '#1a1a1a', fontSize: '11px' }}>{p.title}</div>
                  <div style={{ color: '#5a5a52', fontSize: '10.5px', fontFamily: '"Bricolage Grotesque", system-ui, sans-serif' }}>{p.blurb}</div>
                </div>
              ))}

              <div style={{ fontSize: '14px', color: '#1a1a1a', marginTop: '14px', marginBottom: '8px' }}>
                <span style={{ color: '#2a6a5a' }}>## </span>certs & init
              </div>
              {[...d.certificates, ...d.initiatives].map((c, i) => (
                <div key={i} style={{ fontSize: '10.5px', color: '#3a3a32', marginBottom: '4px' }}>
                  <span style={{ color: '#2a6a5a' }}>✓</span> {c}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '20px', color: '#9a9a90', fontSize: '10.5px' }}>
            <Comment>EOF</Comment>
          </div>
        </div>

        {/* Right panel — skills */}
        <div style={ideStyles.panel}>
          <div style={{ fontSize: '9.5px', color: '#9a9a90', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>Outline</div>

          <div style={{ marginBottom: '14px' }}>
            <div style={{ color: '#1a1a1a', fontSize: '11px', marginBottom: '6px' }}>$ skills --list</div>
            {d.skills.map((s, i) => (
              <div key={s} style={{ fontSize: '10px', color: '#3a3a32', padding: '2px 0', display: 'flex', justifyContent: 'space-between' }}>
                <span><span style={{ color: '#2a6a5a' }}>›</span> {s}</span>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: '14px' }}>
            <div style={{ color: '#1a1a1a', fontSize: '11px', marginBottom: '6px' }}>$ lang --list</div>
            {d.languages.map(l => (
              <div key={l.name} style={{ fontSize: '10px', padding: '2px 0' }}>
                <span style={{ color: '#3a3a32' }}>{l.name}</span>
                <span style={{ color: '#9a9a90' }}> — </span>
                <span style={{ color: '#c9572e' }}>{l.level}</span>
              </div>
            ))}
          </div>

          <div>
            <div style={{ color: '#1a1a1a', fontSize: '11px', marginBottom: '6px' }}>$ tools</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px' }}>
              {['Figma', 'n8n', 'WordPress', 'Premiere', 'Audition', 'Python', 'Rasa', 'Notion'].map(t => (
                <span key={t} style={{ fontSize: '9px', padding: '2px 5px', background: '#fafaf7', border: '1px solid #d8d4c8', borderRadius: '3px', color: '#3a3a32' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div style={ideStyles.statusbar}>
        <span>● main</span>
        <span>↑ 26 ↓ 0</span>
        <span style={{ opacity: 0.7 }}>profile.md · Markdown · UTF-8</span>
        <span style={{ marginLeft: 'auto', opacity: 0.7 }}>Ln 132, Col 1</span>
        <span style={{ opacity: 0.7 }}>Freiburg · CET</span>
      </div>
    </div>
  );
}

window.CVTerminal = CVTerminal;
