import { useState, type ReactNode } from "react";

type Screen = "home" | "register" | "form" | "saved" | "calendar" | "cases";
type IconName =
  | "home" | "calendar" | "plus" | "cases" | "users" | "pulse" | "pencil"
  | "building" | "stethoscope" | "wifi" | "globe" | "volume" | "shield"
  | "mic" | "camera" | "write" | "sparkles" | "chevron" | "check"
  | "clock" | "alert" | "user" | "question" | "save" | "sync" | "cloudOff"
  | "thermometer" | "pill" | "activity" | "heart" | "arrow";

const paths: Record<IconName, ReactNode> = {
  home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M16 3v4M8 3v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></>,
  plus: <path d="M12 5v14M5 12h14"/>,
  cases: <><path d="M9 5V3h6v2"/><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 11h18M10 11v2h4v-2"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
  pulse: <><path d="M3 12h4l2.5-6 4 12 2.5-6h5"/><circle cx="12" cy="12" r="10"/></>,
  pencil: <><path d="m4 20 4.5-1 10-10a2.12 2.12 0 0 0-3-3l-10 10L4 20Z"/><path d="m14 7 3 3"/></>,
  building: <><path d="M4 21V5l8-3 8 3v16"/><path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h6M12 17v4"/></>,
  stethoscope: <><path d="M6 3v6a5 5 0 0 0 10 0V3M4 3h4M14 3h4"/><path d="M11 14v2a5 5 0 0 0 10 0v-1"/><circle cx="21" cy="13" r="2"/></>,
  wifi: <><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><path d="M12 20h.01"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
  volume: <><path d="M11 5 6 9H3v6h3l5 4V5ZM15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12"/></>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/></>,
  mic: <><rect x="8" y="2" width="8" height="13" rx="4"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8"/></>,
  camera: <><path d="M14.5 5 13 3h-2L9.5 5H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-4.5Z"/><circle cx="12" cy="13" r="4"/></>,
  write: <><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z"/></>,
  sparkles: <><path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3ZM19 14l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14ZM5 13l.7 2.3L8 16l-2.3.7L5 19l-.7-2.3L2 16l2.3-.7L5 13Z"/></>,
  chevron: <path d="m9 18 6-6-6-6"/>,
  check: <path d="m5 12 4 4L19 6"/>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  alert: <><path d="M10.3 3.6 2.5 18a2 2 0 0 0 1.8 3h15.4a2 2 0 0 0 1.8-3L13.7 3.6a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/></>,
  user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
  question: <><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.5 2.5 0 1 1 3.2 2.4c-.7.3-1 1-1 1.6v.5M12 17h.01"/></>,
  save: <><path d="M5 3h12l3 3v15H4V3Z"/><path d="M8 3v6h8V3M8 21v-7h8v7"/></>,
  sync: <><path d="M20 7h-5V2M4 17h5v5"/><path d="M18.4 17A8 8 0 0 1 5.6 7L4 9M5.6 7A8 8 0 0 1 18.4 17L20 15"/></>,
  cloudOff: <><path d="m3 3 18 18M7 7.5A6 6 0 0 1 18 11h1a4 4 0 0 1 2 7.5M6 19h10"/><path d="M5 19a4 4 0 0 1-1-7.9"/></>,
  thermometer: <><path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0Z"/><path d="M12 9v8"/></>,
  pill: <><path d="m10.5 20.5-7-7a5 5 0 0 1 7-7l7 7a5 5 0 0 1-7 7Z"/><path d="m7 10 7 7"/></>,
  activity: <path d="M3 12h4l2-6 4 12 2-6h6"/>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
};

function Icon({ name, size = 28 }: { name: IconName; size?: number }) {
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function IconButton({ icon, label, onClick, className = "" }: { icon: IconName; label: string; onClick?: () => void; className?: string }) {
  return <button className={`icon-button ${className}`} onClick={onClick} aria-label={label}><Icon name={icon} /></button>;
}

const navItems: { screen: Screen; icon: IconName; label: string }[] = [
  { screen: "home", icon: "home", label: "Home" },
  { screen: "calendar", icon: "calendar", label: "Calendar" },
  { screen: "register", icon: "plus", label: "Record" },
  { screen: "cases", icon: "cases", label: "Cases" },
];

function Navigation({ screen, go }: { screen: Screen; go: (screen: Screen) => void }) {
  const active = screen === "form" || screen === "saved" ? "register" : screen;
  return <nav className="navigation" aria-label="Main navigation">
    <div className="brand"><span className="brand-mark"><Icon name="heart" size={24} /></span><span>meshCare<small>MEDICAL</small></span></div>
    <div className="nav-list">
      {navItems.map((item) => <button key={item.screen} className={`nav-item ${active === item.screen ? "active" : ""} ${item.screen === "register" ? "primary" : ""}`} onClick={() => go(item.screen)}>
        <span className="nav-icon"><Icon name={item.icon} size={item.screen === "register" ? 30 : 26} /></span><span>{item.label}</span>
      </button>)}
    </div>
  </nav>;
}

function TopBar({ network, cycleNetwork }: { network: number; cycleNetwork: () => void }) {
  const states = [
    { icon: "wifi" as IconName, text: "Online", className: "online" },
    { icon: "cloudOff" as IconName, text: "Offline", className: "offline" },
    { icon: "sync" as IconName, text: "Syncing", className: "syncing" },
  ];
  const state = states[network];
  return <div className="topbar">
    <button className={`network-badge ${state.className}`} onClick={cycleNetwork}><Icon name={state.icon} size={19} /><span>{state.text}</span></button>
    <div className="top-actions"><button className="language"><Icon name="globe" size={21} /><span>EN</span></button><IconButton icon="volume" label="Read aloud" /></div>
  </div>;
}

function SafetyBanner({ uncertain = false }: { uncertain?: boolean }) {
  return <div className={`safety-banner ${uncertain ? "uncertain" : ""}`}>
    <span className="banner-icon"><Icon name={uncertain ? "question" : "shield"} size={22} /></span>
    <span>{uncertain ? "Review with a person" : "The doctor's decision is final"}</span>
  </div>;
}

function PageTitle({ eyebrow, children }: { eyebrow?: string; children: ReactNode }) {
  return <div className="page-heading">{eyebrow && <div className="eyebrow">{eyebrow}</div>}<div className="page-title">{children}</div></div>;
}

function MetricTile({ icon, value, label, sublabel, accent, onClick }: { icon: IconName; value: string; label: string; sublabel?: string; accent?: boolean; onClick?: () => void }) {
  return <button className={`metric-tile ${accent ? "accent" : ""}`} onClick={onClick}>
    <span className="metric-icon"><Icon name={icon} size={34} /></span>
    <span className="metric-value">{value}</span>
    <span className="metric-label">{label}</span>
    {sublabel && <span className="metric-sub">{sublabel}</span>}
    <span className="metric-arrow"><Icon name="arrow" size={20} /></span>
  </button>;
}

function HomeScreen({ go }: { go: (screen: Screen) => void }) {
  return <div className="screen home-screen">
    <section className="hero-grid">
      <div className="profile-blob">
        <div className="blob-ring ring-one"/><div className="blob-ring ring-two"/>
        <div className="profile-content">
          <div className="avatar"><span>AM</span><span className="avatar-status"><Icon name="check" size={15} /></span></div>
          <div>
            <div className="welcome">Good morning</div>
            <PageTitle>Dr. Ana Martínez</PageTitle>
            <div className="profile-meta">
              <span><Icon name="building" size={21} /> Central Clinic</span>
              <span><Icon name="stethoscope" size={21} /> Family medicine</span>
            </div>
          </div>
        </div>
      </div>
      <div className="today-card">
        <div className="today-icon"><Icon name="calendar" size={32} /></div>
        <div><span>TODAY</span><strong>12</strong><small>appointments</small></div>
        <button onClick={() => go("calendar")} aria-label="View calendar"><Icon name="chevron" size={24}/></button>
      </div>
    </section>
    <section className="metrics-section">
      <div className="section-intro"><div><div className="eyebrow">OVERVIEW</div><div className="section-title">What do you need?</div></div><div className="date-pill">WED · JUN 18</div></div>
      <div className="metrics-grid">
        <MetricTile icon="users" value="24" label="Assigned" />
        <MetricTile icon="pulse" value="8" label="Active" />
        <MetricTile icon="pencil" value="3" label="Update" sublabel="to review" onClick={() => go("cases")} />
        <MetricTile icon="plus" value="+" label="New" sublabel="Create case" accent onClick={() => go("register")} />
      </div>
    </section>
  </div>;
}

function MicButton({ listening, onClick }: { listening: boolean; onClick: () => void }) {
  return <div className={`mic-stage ${listening ? "listening" : ""}`}>
    <span className="wave wave-a"/><span className="wave wave-b"/><span className="wave wave-c"/>
    <button className="mic-button" onClick={onClick} aria-label={listening ? "Stop recording" : "Start recording"}><Icon name={listening ? "activity" : "mic"} size={54} /></button>
  </div>;
}

function RegisterScreen({ go }: { go: (screen: Screen) => void }) {
  const [listening, setListening] = useState(false);
  const start = () => {
    if (!listening) {
      setListening(true);
      window.setTimeout(() => go("form"), 1400);
    }
  };
  return <div className="screen register-screen">
    <div className="register-copy"><div className="eyebrow">NEW RECORD</div><PageTitle>{listening ? "I’m listening…" : "Tell me the case"}</PageTitle><p>{listening ? "Speak naturally" : "Tap the microphone to begin"}</p></div>
    <MicButton listening={listening} onClick={start} />
    <div className={`voice-status ${listening ? "visible" : ""}`}><span/><span/><span/><span/><span/> Recording</div>
    <div className="register-options">
      <button className="option active" onClick={start}><span><Icon name="mic" size={28}/></span>Voice</button>
      <button className="option"><span><Icon name="camera" size={28}/></span>Photo note</button>
      <button className="option" onClick={() => go("form")}><span><Icon name="write" size={28}/></span>Type</button>
    </div>
    <SafetyBanner />
  </div>;
}

const fields: { icon: IconName; label: string; value: string }[] = [
  { icon: "thermometer", label: "Symptoms", value: "Fever · dry cough" },
  { icon: "clock", label: "Duration", value: "3 days" },
  { icon: "pill", label: "Treatment", value: "Paracetamol" },
  { icon: "activity", label: "Outcome", value: "Under observation" },
];

function AIChip() {
  return <span className="ai-chip"><Icon name="sparkles" size={15}/> AI suggested</span>;
}

function FormScreen({ go, offline }: { go: (screen: Screen) => void; offline: boolean }) {
  return <div className="screen form-screen">
    <div className="form-header"><div><div className="eyebrow">VOICE RECORD</div><PageTitle>Review details</PageTitle><p>Everything is ready to save</p></div><div className="progress-pill"><Icon name="check" size={18}/> 4 fields</div></div>
    <div className="patient-strip"><div className="patient-avatar"><Icon name="user" size={30}/></div><div><span>PATIENT</span><strong>Unnamed case</strong></div><button><Icon name="pencil" size={22}/> Edit</button></div>
    <div className="form-fields">
      {fields.map((field) => <button className="field-card" key={field.label}>
        <span className="field-icon"><Icon name={field.icon} size={28}/></span>
        <span className="field-copy"><small>{field.label}</small><strong>{field.value}</strong><AIChip /></span>
        <Icon name="pencil" size={20}/>
      </button>)}
    </div>
    <SafetyBanner uncertain />
    <button className="save-button" onClick={() => go("saved")}><Icon name="save" size={27}/> Save</button>
    {offline && <div className="offline-note"><Icon name="cloudOff" size={19}/> Saved on this device</div>}
  </div>;
}

function SavedScreen({ go, offline }: { go: (screen: Screen) => void; offline: boolean }) {
  return <div className="screen saved-screen">
    <div className="success-art"><span className="success-orbit orbit-a"/><span className="success-orbit orbit-b"/><div className="success-check"><Icon name="check" size={60}/></div><span className="spark s1">+</span><span className="spark s2">+</span><span className="spark s3">·</span></div>
    <PageTitle>{offline ? "Saved on this device" : "Saved"}</PageTitle>
    <p>{offline ? "It will sync when you’re back online" : "The case is now on your list"}</p>
    <button className="save-button compact" onClick={() => go("cases")}><Icon name="cases" size={25}/> View cases</button>
    <button className="text-button" onClick={() => go("register")}><Icon name="plus" size={20}/> New record</button>
    <SafetyBanner />
  </div>;
}

const appointments = [
  { day: 1, time: "09:00", name: "Laura G.", type: "Follow-up", tone: "green" },
  { day: 2, time: "10:30", name: "Mateo R.", type: "Consultation", tone: "blue" },
  { day: 3, time: "08:30", name: "Elena V.", type: "Urgent", tone: "red" },
  { day: 3, time: "12:00", name: "Luis P.", type: "Follow-up", tone: "green" },
  { day: 4, time: "11:15", name: "Sara M.", type: "Consultation", tone: "amber" },
];

function CalendarScreen() {
  const [selected, setSelected] = useState(appointments[2]);
  const [confirmed, setConfirmed] = useState(false);
  const days = ["MON 16", "TUE 17", "WED 18", "THU 19", "FRI 20"];
  return <div className="screen calendar-screen">
    <div className="calendar-header"><div><div className="eyebrow">SCHEDULE</div><PageTitle>This week</PageTitle></div><div className="week-controls"><button>‹</button><span>JUNE 2025</span><button>›</button></div></div>
    <div className="week-grid">
      {days.map((day, index) => <div className={`day-column ${index === 2 ? "today" : ""}`} key={day}>
        <div className="day-name">{day.split(" ")[0]}<strong>{day.split(" ")[1]}</strong></div>
        <div className="appointments">
          {appointments.filter((a) => a.day === index).map((a) => <button key={a.time} className={`appointment ${a.tone}`} onClick={() => {setSelected(a); setConfirmed(false);}}>
            <span className="status-dot"/><strong>{a.time}</strong><small>{a.name}</small>
          </button>)}
        </div>
      </div>)}
    </div>
    <div className="appointment-detail">
      <div className="detail-time">{selected.time}</div><div className="patient-avatar"><Icon name="user" size={30}/></div>
      <div className="detail-copy"><small>NEXT APPOINTMENT</small><strong>{selected.name}</strong><span>{selected.type}</span></div>
      <div className="detail-actions">
        <button className={`confirm ${confirmed ? "done" : ""}`} onClick={() => setConfirmed(true)}><Icon name="check" size={22}/>{confirmed ? "Confirmed" : "Confirm"}</button>
        <button className="change"><Icon name="calendar" size={22}/>Change</button>
      </div>
    </div>
  </div>;
}

type CaseState = "urgent" | "normal" | "pending";
const cases = [
  { name: "Elena Vargas", age: 68, symptom: "Chest pain", state: "urgent" as CaseState, time: "20 min ago", mine: true },
  { name: "Mateo Ruiz", age: 8, symptom: "High fever", state: "pending" as CaseState, time: "1 hr ago", mine: true },
  { name: "Laura Gómez", age: 42, symptom: "Dry cough", state: "normal" as CaseState, time: "Yesterday", mine: false },
  { name: "Luis Pérez", age: 56, symptom: "Back pain", state: "normal" as CaseState, time: "Yesterday", mine: true },
];
const stateMeta = {
  urgent: { icon: "alert" as IconName, label: "Urgent" },
  normal: { icon: "check" as IconName, label: "Normal" },
  pending: { icon: "clock" as IconName, label: "Pending" },
};

function CaseCard({ item }: { item: typeof cases[number] }) {
  const meta = stateMeta[item.state];
  return <button className="case-card">
    <span className={`case-status ${item.state}`}><Icon name={meta.icon} size={24}/></span>
    <span className="case-main"><span className="case-name">{item.name}</span><span className="case-symptom">{item.age} yrs <i/> {item.symptom}</span></span>
    <span className="case-meta"><span className={`state-label ${item.state}`}><Icon name={meta.icon} size={15}/>{meta.label}</span><small>{item.time}</small></span>
    <Icon name="chevron" size={22}/>
  </button>;
}

function CasesScreen() {
  const [filter, setFilter] = useState<"all" | "urgent" | "mine">("all");
  const filtered = cases.filter((item) => filter === "all" || (filter === "urgent" ? item.state === "urgent" : item.mine));
  return <div className="screen cases-screen">
    <div className="cases-header"><div><div className="eyebrow">FOLLOW-UP</div><PageTitle>My cases</PageTitle></div><div className="case-count"><strong>{filtered.length}</strong><span>cases</span></div></div>
    <div className="filter-row">
      <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}><Icon name="cases" size={22}/>All</button>
      <button className={filter === "urgent" ? "active urgent" : ""} onClick={() => setFilter("urgent")}><Icon name="alert" size={22}/>Urgent</button>
      <button className={filter === "mine" ? "active" : ""} onClick={() => setFilter("mine")}><Icon name="user" size={22}/>Mine</button>
    </div>
    <div className="case-list">{filtered.map((item) => <CaseCard item={item} key={item.name}/>)}</div>
    <SafetyBanner />
  </div>;
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [network, setNetwork] = useState(0);
  const go = (next: Screen) => { setScreen(next); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return <div className="app-shell">
    <Navigation screen={screen} go={go} />
    <main className="main-area">
      <TopBar network={network} cycleNetwork={() => setNetwork((network + 1) % 3)} />
      <div className="content">
        {screen === "home" && <HomeScreen go={go} />}
        {screen === "register" && <RegisterScreen go={go} />}
        {screen === "form" && <FormScreen go={go} offline={network === 1} />}
        {screen === "saved" && <SavedScreen go={go} offline={network === 1} />}
        {screen === "calendar" && <CalendarScreen />}
        {screen === "cases" && <CasesScreen />}
      </div>
    </main>
  </div>;
}
