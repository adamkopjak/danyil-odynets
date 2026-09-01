import { useEffect, useState } from 'react'

const PALMARES = [
  { year: "'26", race: <>Ironman <em>Kalmar</em></>, loc: 'Kalmar · Sweden · 15 Aug 2026', time: '08:20:00', place: '—', small: 'IRONMAN PB', img: '/assets/finish-photos/kalmar.jpeg', pos: 'center 20%' },
  { year: "'26", race: <>Ironman <em>Klagenfurt</em></>, loc: 'Klagenfurt · Austria · 14 Jun 2026', time: '08:24:00', place: '—', small: 'FULL DISTANCE', img: '/assets/finish-photos/klagenfurt-2026.jpeg', pos: 'center 20%' },
  { year: "'26", race: <>Challenge <em>Salou</em></>, loc: 'Salou · Spain · 10 May 2026', time: '03:56:00', place: '—', small: 'HALF DISTANCE', img: '/assets/finish-photos/salou.jpeg' },
  { year: "'26", race: <>Austrian National <em>Duathlon</em> Championship</>, loc: 'Maissau · Austria', time: '—', place: '5', small: 'NATIONAL CHAMPS' },
  { year: "'25", race: <>Ironman World Championship <em>Nice</em></>, loc: 'Nice · France · U24 World Title', time: '09:09:42', place: '1', small: 'U24 / 10TH AG', img: '/assets/gal-nice.jpg' },
  { year: "'25", race: <>Ironman European Championship <em>Frankfurt</em></>, loc: 'Frankfurt · Germany · 29 Jun 2025', time: '08:34:49', place: '1', small: 'U24 / 3RD AG', img: '/assets/finish-photos/frankfurt-2025.jpeg' },
  { year: "'25", race: <>Challenge <em>St. Pölten</em></>, loc: 'St. Pölten · Austria · 25 May 2025', time: '04:12:31', place: '2', small: 'U24 / 4TH AG', img: '/assets/finish-photos/st-polten.jpeg' },
  { year: "'24", race: <>Ironman European Championship <em>Frankfurt</em></>, loc: 'Frankfurt · Germany', time: '08:58:00', place: '—', small: 'U24 / EUROPEAN CH.', img: '/assets/finish-photos/frankfurt.jpeg' },
  { year: "'24", race: <>Ironman <em>Klagenfurt</em></>, loc: 'Klagenfurt · Austria', time: '09:07:00', place: '3', small: 'U24 / 26TH AG', img: '/assets/finish-photos/klagenfurt.jpeg' },
  { year: "'23", race: <>Ironman World Championship <em>Nice</em></>, loc: 'Nice · France', time: '10:10:00', place: '12', small: 'U24 / 61ST AG', img: '/assets/finish-photos/nice-2023.jpeg' },
  { year: "'22", race: <>Ironman <em>Barcelona</em></>, loc: 'Calella · Spain', time: '09:53:00', place: '—', small: 'IRONMAN DEBUT', img: '/assets/finish-photos/barcelona.jpeg' },
]

const GOALS = [
  { n: '01', sub: 'Results', title: <>Get a good result among the <em>professional</em> category.</> },
  { n: '02', sub: 'Time barrier', title: <>Complete an Ironman in <em>under 8 hours</em>.</> },
  { n: '03', sub: 'World Championship', title: <>Qualify as a Pro for the <em>Ironman World Championship</em>, Hawaii.</> },
  { n: '04', sub: 'New format', title: <>Enter the new <em>T100</em> series.</> },
]

const SEASON = [
  { date: "Jun '26", block: 'A-RACE · RACED 14 JUN', name: <>Ironman <em>Klagenfurt</em></>, where: 'Klagenfurt · AT', dist: '3.8 — 180 — 42.2', pill: '8:24', target: false, done: true },
  { date: "Aug '26", block: 'SHARPEN', name: <>Ironman 70.3 <em>Gdynia</em></>, where: 'Gdynia · PL', dist: '1.9 — 90 — 21.1', pill: 'Probably', target: false },
  { date: "Aug '26", block: 'A-RACE · RACED 15 AUG', name: <>Ironman <em>Kalmar</em></>, where: 'Kalmar · SE', dist: '3.8 — 180 — 42.2', pill: '8:20 · PB', target: false, done: true },
  { date: "Sep '26", block: 'BUILD', name: <>Challenge <em>Amsterdam</em></>, where: 'Amsterdam · NL', dist: '3.8 — 180 — 42.2', pill: 'Confirmed', target: true },
  { date: "Oct '26", block: 'SEASON CLOSER', name: <>Challenge <em>Barcelona</em></>, where: 'Calella · ES', dist: '3.8 — 180 — 42.2', pill: 'Confirmed', target: true },
]

const PARTNERS = [
  { cls: 'l-pewag', tag: '01', cat: 'Chain technology', href: 'https://www.pewag.com', label: 'pewag', src: '/assets/logos/pewag.png' },
  { cls: 'l-sailfish', tag: '02', cat: 'Swim / wetsuits', href: 'https://www.sailfish.com', label: 'sailfish', src: '/assets/logos/sailfish.png' },
  { cls: 'l-castelli', tag: '03', cat: 'Apparel', href: 'https://www.castelli-cycling.com', label: 'Castelli', src: '/assets/logos/castelli.png' },
  { cls: 'l-limar', tag: '04', cat: 'Helmets', href: 'https://www.limar.com', label: 'Limar', src: '/assets/logos/limar.png' },
  { cls: 'l-xentis', tag: '05', cat: 'Carbon wheels', href: 'https://www.xentis.com', label: 'Xentis', src: '/assets/logos/xentis.png' },
  { cls: 'l-storck', tag: '06', cat: 'Bicycles', href: 'https://www.storck-bicycle.de', label: 'Storck', src: '/assets/logos/storck.png' },
  { cls: 'l-4end', tag: '07', cat: 'Nutrition', href: 'https://www.4endurance.eu', label: '4Endurance', src: '/assets/logos/4endurance.png' },
]

const GALLERY = [
  { extra: 'hero-tile', label: '01 — IRONMAN WORLD CHAMPIONSHIP / NICE 2025 · 1st U24', frame: 'FRAME 01', src: '/assets/gal-nice.jpg', alt: 'Ironman World Championship Nice 2025 finish line with leaderboard showing Danyil Odynets' },
  { extra: 'pos-upper', label: "02 — IRONMAN FRANKFURT '25 · 1st U24", frame: 'FRAME 02', src: '/assets/gal-proseries.jpg', alt: 'Finishing Ironman European Championship Frankfurt 2025' },
  { extra: 'pos-upper', label: "03 — CHALLENGE ST. PÖLTEN '25", frame: 'FRAME 03', src: '/assets/gal-stpolten.jpg', alt: 'Finish line at Challenge St. Pölten 2025' },
  { extra: 'pos-upper', label: '04 — FRANKFURT · RUN LEG', frame: 'FRAME 04', src: '/assets/gal-frankfurt-run.jpg', alt: 'Running by the river Main in Frankfurt' },
  { extra: 'pos-upper', label: '05 — SUNSET RIDE / LINZ', frame: 'FRAME 05', src: '/assets/sunset-linz.jpg', alt: 'Evening ride overlooking Linz' },
  { extra: 'pos-upper', label: '06 — TT BIKE PORTRAIT', frame: 'FRAME 06', src: '/assets/gal-bike-portrait.jpg', alt: 'Danyil with his Zeitjaeger TT bike' },
  { extra: 'pos-upper', label: '07 — RACE BIKE + TT', frame: 'FRAME 07', src: '/assets/gal-bothbikes.jpg', alt: 'Danyil with road bike and TT bike' },
  { extra: 'pos-upper', label: '08 — SWIM SET / POOL', frame: 'FRAME 08', src: '/assets/img-a.jpg', alt: 'Pool swim training' },
  { extra: 'pos-upper', label: '09 — TT POSITION / LAB', frame: 'FRAME 09', src: '/assets/img-j.jpg', alt: 'VO2 max testing on the bike' },
  { extra: 'pos-upper', label: '10 — RUN ECONOMY / LAB', frame: 'FRAME 10', src: '/assets/img-k.jpg', alt: 'Treadmill testing' },
  { extra: 'pos-upper', label: '11 — TRAINING CAMP / GROUP RUN', frame: 'FRAME 11', src: '/assets/img-n.jpg', alt: 'Group run training camp in Portugal' },
  { extra: 'pos-upper', label: '12 — POST-SWIM / SOLOTHURN', frame: 'FRAME 12', src: '/assets/gal-park.jpg', alt: 'Post-swim training day in the park' },
  { extra: 'pos-upper', label: '13 — STORCK + ZEITJAEGER', frame: 'FRAME 13', src: '/assets/img-i.jpg', alt: 'Danyil with his bikes' },
]

const CONTACT_TABS = [
  { key: 'general', label: 'General inquiry', subject: 'General inquiry', placeholder: 'Hi Danyil, I wanted to reach out about…' },
  { key: 'sponsorship', label: 'Sponsorship', subject: 'Partnership / Sponsorship', placeholder: 'Hi Danyil, our brand is interested in partnering for the 2026 season…' },
  { key: 'press', label: 'Press / Media', subject: 'Press / Media request', placeholder: 'Hi Danyil, I\'m writing for [outlet] and would love to set up an interview…' },
  { key: 'appearance', label: 'Speaking / Event', subject: 'Speaking / Event request', placeholder: 'Hi Danyil, we\'d like to invite you to speak at…' },
]

const FUNDING = [
  { n: '01', label: 'Bike', amt: '€15,000', w: '100%' },
  { n: '02', label: 'Accommodation', amt: '€9,000', w: '60%', sub: '€750 / mo' },
  { n: '03', label: 'Training camps & races', amt: '€8,500', w: '57%' },
  { n: '04', label: 'Equipment modification & testing', amt: '€7,000', w: '47%' },
  { n: '05', label: 'Food', amt: '€6,000', w: '40%', sub: '€500 / mo' },
  { n: '06', label: 'Diagnostics & medical', amt: '€3,500', w: '23%' },
  { n: '07', label: 'Swimming', amt: '€1,600', w: '11%' },
  { n: '08', label: 'Shoes & running gear', amt: '€1,250', w: '8%' },
]

function useClock() {
  const [t, setT] = useState('--:--:--')
  useEffect(() => {
    const tick = () => {
      const d = new Date()
      const pad = (n) => String(n).padStart(2, '0')
      setT(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return t
}

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function ContactForm() {
  const [tab, setTab] = useState('general')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')
  const [message, setMessage] = useState('')
  const active = CONTACT_TABS.find((t) => t.key === tab) || CONTACT_TABS[0]

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `[${active.subject}] ${name ? `from ${name}` : ''}`.trim()
    const lines = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      org && `Organisation: ${org}`,
      '',
      message,
    ].filter((l) => l !== undefined && l !== null).join('\n')
    const mailto = `mailto:danilodynets@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`
    window.location.href = mailto
  }

  return (
    <section className="section" id="contact-form">
      <div className="section-head reveal">
        <span className="idx"><b>07</b> / Contact</span>
        <h2 className="title">Get <em>in touch</em>.</h2>
      </div>

      <div className="contact-tabs reveal" role="tablist">
        {CONTACT_TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={tab === t.key}
            className={`contact-tab${tab === t.key ? ' active' : ''}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <form className="contact-form reveal" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="cf-name">Name</label>
          <input id="cf-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        </div>
        <div className="field field-wide">
          <label htmlFor="cf-org">Organisation / brand <span className="opt">— optional</span></label>
          <input id="cf-org" type="text" value={org} onChange={(e) => setOrg(e.target.value)} autoComplete="organization" />
        </div>
        <div className="field field-wide">
          <label htmlFor="cf-message">Message</label>
          <textarea id="cf-message" rows="5" required value={message} onChange={(e) => setMessage(e.target.value)} placeholder={active.placeholder} />
        </div>
        <div className="field-wide contact-submit-row">
          <button type="submit" className="cta">
            Send message
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </button>
          <span className="contact-note mono">Opens your mail app · or write directly to <a href="mailto:danilodynets@gmail.com">danilodynets@gmail.com</a></span>
        </div>
      </form>
    </section>
  )
}

function usePalette() {
  const [palette, setPalette] = useState(() => {
    if (typeof window === 'undefined') return 'rust'
    return localStorage.getItem('palette') || 'rust'
  })
  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette)
    localStorage.setItem('palette', palette)
  }, [palette])
  return [palette, setPalette]
}

export default function App() {
  const clock = useClock()
  useReveal()
  const [palette, setPalette] = usePalette()
  const isLight = palette === 'cream'
  const toggle = () => setPalette(isLight ? 'rust' : 'cream')

  return (
    <>
      <header className="topbar">
        <div className="brand">
          <span>Danyil Odynets · PEWAG RACING TEAM</span>
          <span className="live">Professional athlete</span>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#palmares">Palmarès</a>
          <a href="#goals">Goals</a>
          <a href="#gallery">Visuals</a>
          <a href="#sponsorship">Sponsorship</a>
          <a href="#contact-form">Contact</a>
        </nav>
        <div className="meta-right">
          <span><b>{clock}</b> &nbsp;LINZ · AT</span>
          <span>U24 · World Champion · 2025</span>
          <button className="theme-toggle" onClick={toggle} aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'} title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}>
            {isLight ? '☾' : '☀'}
          </button>
        </div>
      </header>

      <main className="shell">

        <section className="hero">
          <img className="hero-img" src="/assets/hero-tt.png" alt="Danyil Odynets in TT race position" />
          <span className="hero-frame-corner tl"></span>
          <span className="hero-frame-corner tr"></span>
          <span className="hero-frame-corner bl"></span>
          <span className="hero-frame-corner br"></span>

          <span className="hero-badge"><span className="pulse"></span>U24 World Champion · Ironman 2025</span>

          <div className="hero-content">
            <h1 className="hero-name">
              <span className="ln ln-1">Danyil</span>
              <span className="ln ln-2">Odynets<span className="accent-dot">.</span></span>
            </h1>

            <div className="hero-row">
              <div className="hero-tag">
                <span className="role">Ironman triathlete &nbsp;·&nbsp; <b>UKR → AT</b> &nbsp;·&nbsp; age 22</span>
                <p className="blurb">Reigning <em>U24 Ironman World Champion</em>. Three years ago I left Kyiv with a backpack — today I'm racing to make the jump from young talent to the international pro elite.</p>
              </div>
              <div></div>
            </div>

            <div className="hero-stats">
              <div><div className="k">Ironman PB</div><div className="v">8:20<sup>KALMAR '26</sup></div></div>
              <div><div className="k">U24 World Title</div><div className="v">1<sup>NICE 2025</sup></div></div>
              <div><div className="k">U24 Euro Title</div><div className="v">1<sup>FRANKFURT '25</sup></div></div>
              <div><div className="k">2026 Target</div><div className="v">&lt;8h<sup>SUB-8 IRONMAN</sup></div></div>
            </div>
          </div>

          <div className="marquee">
            <div className="marquee-track">
              <span>Swim <em>·</em></span><span className="dot"></span>
              <span>Bike <em>·</em></span><span className="dot"></span>
              <span>Run <em>·</em></span><span className="dot"></span>
              <span><em>Repeat</em></span><span className="dot"></span>
              <span>Available for partnerships — 2026 season</span><span className="dot"></span>
              <span>Swim <em>·</em></span><span className="dot"></span>
              <span>Bike <em>·</em></span><span className="dot"></span>
              <span>Run <em>·</em></span><span className="dot"></span>
              <span><em>Repeat</em></span><span className="dot"></span>
              <span>Available for partnerships — 2026 season</span><span className="dot"></span>
            </div>
          </div>
        </section>

        <section className="partners-wrap" aria-label="Current partners">
          <div className="partners-head">
            <span className="ttl">Current partners <b>— 2026</b></span>
            <span className="tag">Triathlon Section · PEWAG RACING TEAM</span>
          </div>
          <div className="partners">
            {PARTNERS.map((p) => (
              <a key={p.tag} className={`slot ${p.cls}`} data-tag={p.tag} data-cat={p.cat} href={p.href} target="_blank" rel="noopener" aria-label={p.label}>
                <img src={p.src} alt={p.label} />
              </a>
            ))}
            <div className="slot slot-open" data-tag="08" data-cat="Open" aria-label="Open partner slot">
              <span className="mark">Your brand here</span>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-head reveal">
            <span className="idx"><b>01</b> / Profile</span>
            <h2 className="title">The athlete <em>behind</em> the bib.</h2>
          </div>
          <div className="about-grid reveal">
            <div className="label">Bio<br /><span style={{ color: 'var(--fg-mute)' }}>b. 2004 — Kyiv, UA</span></div>
            <div className="copy">
              <p>I am Danyil Odynets, 22 years old. I fled Ukraine three years ago and am the reigning <em>U24 Ironman World Champion</em>.</p>
              <p>My journey out of Kyiv ran alone through Moldova, Romania, and Hungary. Along the way I volunteered translating and finding housing for other refugees. Eventually JKU Linz offered me a study place, a scholarship, and a roof — and that's where the next life started.</p>
              <p>I am studying Strategic Management at JKU Linz, close to finishing my Master's. I race for PEWAG RACING TEAM — Triathlon Section, and I'm at the turning point from <em>young talent</em> to international professional.</p>
            </div>
            <div className="portrait" aria-label="Portrait">
              <img src="/assets/img-l.jpg" alt="Danyil Odynets portrait" />
            </div>
          </div>
        </section>

        <hr className="rule" />

        <section className="section" id="voice">
          <div className="section-head reveal">
            <span className="idx"><b>02</b> / Voice</span>
            <h2 className="title">From the <em>coach</em>.</h2>
          </div>
          <figure className="quote reveal">
            <blockquote>
              “Danyil is an <em>extraordinary</em> personality, and his story deeply impressed me. After only two years of targeted training management, he has managed to connect with the international top tier — and his potential is far from exhausted.”
            </blockquote>
            <figcaption>
              <span className="who">Andreas Madlmair</span>
              <span className="what">Head Coach</span>
            </figcaption>
          </figure>
        </section>

        <hr className="rule" />

        <div className="bleed reveal" aria-hidden="true">
          <img src="/assets/sunset-linz.jpg" alt="Sunset training ride overlooking Linz" />
          <div className="bleed-label">
            <span className="bleed-quote">Train where you can <em>see</em> what you're training for.</span>
            <span>LINZ · AT &nbsp;·&nbsp; SUNSET BLOCK</span>
          </div>
        </div>

        <hr className="rule" />

        <section className="section" id="palmares">
          <div className="section-head reveal">
            <span className="idx"><b>03</b> / Palmarès</span>
            <h2 className="title">Results, in <em>order</em>.</h2>
          </div>
          <div className="palmares reveal">
            {PALMARES.map((r, i) => (
              <div
                key={i}
                className={`row${r.img ? ' has-photo' : ''}`}
                onMouseMove={r.img ? (e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  e.currentTarget.style.setProperty('--mx', `${x}px`)
                  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
                  e.currentTarget.classList.toggle('flip', x > rect.width * 0.6)
                } : undefined}
              >
                <div className="year">{r.year}</div>
                <div className="race">{r.race}</div>
                <div className="loc">{r.loc}</div>
                <div className="time">{r.time}</div>
                <div className="place">{r.place}<small>{r.small}</small></div>
                {r.img && (
                  <div className="row-photo" aria-hidden="true">
                    <img src={r.img} alt="" loading="lazy" style={r.pos ? { objectPosition: r.pos } : undefined} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mono" style={{ color: 'var(--fg-mute)', marginTop: 24, textAlign: 'right' }}>
            Full results sheet available on request → danilodynets@gmail.com
          </p>
        </section>

        <hr className="rule" />

        <section className="section" id="goals">
          <div className="section-head reveal">
            <span className="idx"><b>04</b> / Goals 2026</span>
            <h2 className="title">Four targets. <em>One</em> season.</h2>
          </div>

          <div className="goals reveal">
            {GOALS.map((g) => (
              <div key={g.n} className="col">
                <span className="n">Goal — {g.n}</span>
                <span className="sub">{g.sub}</span>
                <h3>{g.title}</h3>
              </div>
            ))}
          </div>

          <p className="mono" style={{ color: 'var(--fg-mute)', marginTop: 18 }}>
            Plotted, paced, and pinned to the wall — every training block this year answers to one of these four.
          </p>

          <div className="schedule-head reveal">
            <span className="idx-sub"><b>04 ·</b> Race calendar</span>
            <h3 className="title-sub">Where to <em>find me</em> this season.</h3>
          </div>

          <div className="season reveal">
            {SEASON.map((s, i) => (
              <div key={i} className="row">
                <div className="date">{s.date}<span>{s.block}</span></div>
                <div className="name">{s.name}</div>
                <div className="where">{s.where}</div>
                <div className="dist">{s.dist}</div>
                <div className={`pill${s.target ? ' target' : ''}${s.done ? ' done' : ''}`}>{s.pill}</div>
              </div>
            ))}
          </div>

          <p className="mono" style={{ color: 'var(--fg-mute)', marginTop: 18 }}>
            Dates subject to organiser confirmation. Five start lines — one road to the pro licence.
          </p>
        </section>

        <hr className="rule" />

        <section className="section" id="gallery">
          <div className="section-head reveal">
            <span className="idx"><b>05</b> / Visuals</span>
            <h2 className="title">Out on the <em>course</em>.</h2>
          </div>
          <div className="gallery reveal">
            {GALLERY.map((g, i) => (
              <div key={i} className={`tile ${g.extra}`} data-label={g.label}>
                <span className="frame-no">{g.frame}</span>
                <span className="corner tl"></span><span className="corner br"></span>
                <img src={g.src} alt={g.alt} />
              </div>
            ))}
          </div>
        </section>

        <hr className="rule" />

        <div className="bleed reveal" aria-hidden="true">
          <img src="/assets/challenge-salou.jpg" alt="Race day at Challenge Salou" style={{ objectPosition: 'center',  opacity: 0.7 }} />
          <div className="bleed-label">
            <span className="bleed-quote">From a backpack and a border crossing to <em>start lines</em> across Europe.</span>
            <span>SALOU · ES &nbsp;·&nbsp; RACE DAY</span>
          </div>
        </div>

        <hr className="rule" />

        <section className="section" id="sponsorship">
          <div className="section-head reveal">
            <span className="idx"><b>06</b> / Sponsorship</span>
            <h2 className="title">Reach the goal, <em>together</em>.</h2>
          </div>

          <div className="funding reveal">
            <div className="pitch-side">
              <p>As a student, I have financed my sport myself — through scholarships and shifts at a running store in Linz. For financial stability as a <em>pro</em> I need partners.</p>
              <p className="smalls">Your sponsorship is more than an investment in athletic success — it is a commitment to dedication, internationality, and future vision. As a partner you receive an exclusive relationship with a rising pro, social-media presence, and inclusion in corporate events: health days, team-building, panels, expo appearances.</p>
              <a className="cta" href="mailto:danilodynets@gmail.com?subject=Partnership%20—%20Danyil%20Odynets">
                Become a partner
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
            </div>

            <div className="totals">
              {FUNDING.map((f) => (
                <div key={f.n} className="line" style={{ '--w': f.w }}>
                  <span className="n">{f.n}</span>
                  <span className="label">{f.label}{f.sub && <span className="line-sub"> · {f.sub}</span>}</span>
                  <span className="bar"></span>
                  <span className="amt">{f.amt}</span>
                </div>
              ))}
              <div className="line sum">
                <span className="n">Σ</span>
                <span className="label">Annual <em>budget</em></span>
                <span></span>
                <span className="amt">€51,850</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="rule" />

        <ContactForm />

        <section className="foot shell" id="contact" style={{ maxWidth: 'none', paddingLeft: 'clamp(20px,4vw,56px)', paddingRight: 'clamp(20px,4vw,56px)' }}>
          <div className="sig reveal">
            Let's <em>build</em> 2026.
          </div>
          <div className="col">
            <h4>Reach</h4>
            <a href="mailto:danilodynets@gmail.com">danilodynets@gmail.com</a>
            <a href="tel:+436776287912">+43 677 62879125</a>
            <p style={{ color: 'var(--fg-dim)', fontSize: 14 }}>Linz / Gallneukirchen · Austria</p>
          </div>
          <div className="col">
            <h4>Social</h4>
            <a href="https://instagram.com/danyilodynets">Instagram <span className="mono" style={{ color: 'var(--fg-mute)' }}>@danyilodynets</span></a>
            <a href="#">Strava <span className="mono" style={{ color: 'var(--fg-mute)' }}>/danyil-odynets</span></a>
          </div>
          <div className="col">
            <h4>Affiliations</h4>
            <p>PEWAG RACING TEAM<br /><span className="mono" style={{ color: 'var(--fg-mute)', fontSize: 11 }}>TRIATHLON SECTION</span></p>
            <p>JKU Linz<br /><span className="mono" style={{ color: 'var(--fg-mute)', fontSize: 11 }}>STRATEGIC MANAGEMENT. (MSc)</span></p>
          </div>

          <div className="bottom">
            <span>© 2026 Danyil Odynets — All rights reserved</span>
            <span>Built for partnerships · Updated August 2026</span>
          </div>
        </section>

      </main>
    </>
  )
}
