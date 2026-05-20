// SolutionsSection.jsx
import React, { useRef, useEffect } from "react";
import UiIcon from "./UiIcon";

const solutions = [
  {
    title: "Digital logbook",
    description:
      "Replace scattered paper trails with structured operational forms, versioned templates, and submission-ready records.",
    tone: "blue",
  },
  {
    title: "Scheduling assistant",
    description:
      "Coordinate shift assignments, open forms, and review timing so teams always know what needs attention next.",
    tone: "slate",
  },
  {
    title: "Analytical dashboard",
    description:
      "Surface live workflow states, approval queues, and operational trends from a single plant-friendly dashboard.",
    tone: "gray",
  },
];

const marqueeSolutions = [
  {
    title: "Logsheet builder",
    description:
      "Build and adjust forms fast with less setup copy on screen.",
    tone: "blue",
    icon: "builder",
    points: [
      { icon: "stack", label: "Sections" },
      { icon: "spark", label: "Live edits" },
      { icon: "eye", label: "Preview" },
    ],
  },
  {
    title: "Notifications",
    description:
      "Push the next action to supervisors without crowding the dashboard.",
    tone: "gray",
    icon: "bell",
    points: [
      { icon: "bell", label: "Alerts" },
      { icon: "clock", label: "Pending" },
      { icon: "users", label: "Shift team" },
    ],
  },
  {
    title: "Logsheet submission",
    description:
      "Guide operators to the next Logsheet with clear status cues.",
    tone: "blue",
    icon: "send",
    points: [
      { icon: "send", label: "Submit" },
      { icon: "check", label: "Review" },
      { icon: "route", label: "Next up" },
    ],
  },
  {
    title: "Shift status",
    description:
      "Scan shift completion and exceptions from one compact view.",
    tone: "slate",
    icon: "chart",
    points: [
      { icon: "chart", label: "Trend" },
      { icon: "clock", label: "History" },
      { icon: "check", label: "Done" },
    ],
  },
  {
    title: "Role Based Authority",
    description:
      "Distribute tasks across secure access levels without complex permission gates.",
    tone: "slate",
    icon: "users",
    points: [
      { icon: "users", label: "Multi-role" },
      { icon: "route", label: "Access gates" },
      { icon: "check", label: "Approvals" },
    ],
  },
  ...solutions,
];

// ─── Individual Visual Components ────────────────────────────────────────────

function LogsheetBuilderVisual() {
  return (
    <div className="sol-visual sol-builder">
      <div className="sol-builder__scene">
        {/* Floating puzzle blocks that assemble */}
        <div className="sol-builder__block block--tl">
          <div className="block-face face--front">
            <span className="block-dot" />
            <span className="block-line" />
            <span className="block-line short" />
          </div>
          <div className="block-face face--right" />
          <div className="block-face face--bottom" />
        </div>

        <div className="sol-builder__block block--tr">
          <div className="block-face face--front">
            <span className="block-dot accent" />
            <span className="block-line" />
          </div>
          <div className="block-face face--right" />
          <div className="block-face face--bottom" />
        </div>

        <div className="sol-builder__block block--bl">
          <div className="block-face face--front">
            <span className="block-line" />
            <span className="block-line short" />
            <span className="block-line" />
          </div>
          <div className="block-face face--right" />
          <div className="block-face face--bottom" />
        </div>

        <div className="sol-builder__block block--br">
          <div className="block-face face--front">
            <span className="block-check">✓</span>
          </div>
          <div className="block-face face--right" />
          <div className="block-face face--bottom" />
        </div>

        {/* Center lock indicator */}
        <div className="sol-builder__lock">
          <div className="lock-ring" />
          <div className="lock-core" />
        </div>

        {/* Connector lines */}
        <svg className="sol-builder__connectors" viewBox="0 0 160 120" aria-hidden="true">
          <line x1="60" y1="45" x2="80" y2="60" stroke="rgba(37,99,235,0.3)" strokeWidth="1.5" strokeDasharray="3 3" className="connector-line" />
          <line x1="100" y1="45" x2="80" y2="60" stroke="rgba(37,99,235,0.3)" strokeWidth="1.5" strokeDasharray="3 3" className="connector-line" />
          <line x1="60" y1="80" x2="80" y2="65" stroke="rgba(37,99,235,0.3)" strokeWidth="1.5" strokeDasharray="3 3" className="connector-line" />
          <line x1="100" y1="80" x2="80" y2="65" stroke="rgba(37,99,235,0.3)" strokeWidth="1.5" strokeDasharray="3 3" className="connector-line" />
        </svg>
      </div>

      <div className="sol-visual__label">
        <span className="label-pill">Template locked</span>
      </div>
    </div>
  );
}

function NotificationsVisual() {
  const [activeAlert, setActiveAlert] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveAlert((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sol-visual sol-notifications">
      <div className="sol-notifications__scene">
        {/* Glowing laser beams from central nexus to alert pills */}
        <svg className="notif-connectors" viewBox="0 0 200 160" aria-hidden="true">
          <path d="M100,75 Q135,35 150,30" fill="none" stroke="rgba(239, 68, 68, 0.2)" strokeWidth="1.5" />
          <path d="M100,75 Q140,110 160,115" fill="none" stroke="rgba(34, 197, 94, 0.2)" strokeWidth="1.5" />
          <path d="M100,75 Q60,115 45,120" fill="none" stroke="rgba(245, 158, 11, 0.2)" strokeWidth="1.5" />

          <circle r="3" fill="#ef4444" className={`notif-laser-dot ${activeAlert === 0 ? "active" : ""}`}>
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M100,75 Q135,35 150,30" />
          </circle>
          <circle r="3" fill="#22c55e" className={`notif-laser-dot ${activeAlert === 1 ? "active" : ""}`}>
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M100,75 Q140,110 160,115" />
          </circle>
          <circle r="3" fill="#f59e0b" className={`notif-laser-dot ${activeAlert === 2 ? "active" : ""}`}>
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M100,75 Q60,115 45,120" />
          </circle>
        </svg>

        {/* 3D Glass Nexus Center */}
        <div className="notif-nexus">
          <div className="nexus-glow" />
          <div className="nexus-card">
            <div className="nexus-bell-wrap">
              <UiIcon name="bell" />
              <span className="nexus-badge-dot" />
            </div>
          </div>
        </div>

        {/* Floating cards with active states */}
        <div className={`notif-card glass-card card--a ${activeAlert === 0 ? "active" : ""}`}>
          <span className="card-dot urgent" />
          <span className="card-text">Shift overdue</span>
        </div>
        <div className={`notif-card glass-card card--b ${activeAlert === 1 ? "active" : ""}`}>
          <span className="card-dot ok" />
          <span className="card-text">Approved</span>
        </div>
        <div className={`notif-card glass-card card--c ${activeAlert === 2 ? "active" : ""}`}>
          <span className="card-dot pending" />
          <span className="card-text">Pending review</span>
        </div>
      </div>

      <div className="sol-visual__label">
        <span className="label-pill">3 active alerts</span>
      </div>
    </div>
  );
}

function SubmissionVisual() {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const progressPercent = step === 0 ? 10 : step === 1 ? 40 : step === 2 ? 70 : 100;
  const strokeDashoffset = 263.9 - (263.9 * progressPercent) / 100;

  const innerProgressPercent = step === 0 ? 20 : step === 1 ? 50 : step === 2 ? 80 : 100;
  const innerStrokeDashoffset = 188.5 - (188.5 * innerProgressPercent) / 100;

  return (
    <div className="sol-visual sol-submission">
      <div className="sol-submission__scene">
        {/* Horizontal Laser Scanning Line */}
        <div className={`submission-scanner-beam step-${step}`} />

        {/* 3D Concentric progress gauge */}
        <div className="submission-rings">
          <svg viewBox="0 0 120 120" className="ring-svg" aria-hidden="true">
            <defs>
              <linearGradient id="ring-grad-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="42" ry="10" fill="rgba(15,23,42,0.06)" />
            <circle cx="60" cy="58" r="42" fill="none" stroke="rgba(15,23,42,0.05)" strokeWidth="8" />
            <circle
              cx="60" cy="58" r="42"
              fill="none"
              stroke="url(#ring-grad-glow)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="263.9"
              strokeDashoffset={strokeDashoffset}
              className="ring-progress-active"
              transform="rotate(-90 60 58)"
              style={{ transition: "stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)" }}
            />
            <circle cx="60" cy="58" r="30" fill="none" stroke="rgba(37,99,235,0.08)" strokeWidth="5" />
            <circle
              cx="60" cy="58" r="30"
              fill="none"
              stroke="#2563eb"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="188.5"
              strokeDashoffset={innerStrokeDashoffset}
              className="ring-progress-inner-active"
              transform="rotate(-90 60 58)"
              style={{ transition: "stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)" }}
            />
          </svg>

          <div className="submission-center">
            <strong style={{ transition: "all 0.5s" }}>{progressPercent}%</strong>
            <span>{step === 3 ? "Ready" : "Pending"}</span>
          </div>
        </div>

        {/* Dynamic Checklist items */}
        <div className="submission-items">
          <div className={`sub-item glass-item ${step >= 1 ? "done" : "active"}`}>
            <span className={`sub-check ${step >= 1 ? "checked" : "pending"}`}>{step >= 1 ? "✓" : "○"}</span>
            <span>PSI reading</span>
          </div>
          <div className={`sub-item glass-item ${step >= 2 ? "done" : step === 1 ? "active" : ""}`}>
            <span className={`sub-check ${step >= 2 ? "checked" : "pending"}`}>{step >= 2 ? "✓" : "○"}</span>
            <span>Temp log</span>
          </div>
          <div className={`sub-item glass-item ${step >= 3 ? "done" : step === 2 ? "active" : ""}`}>
            <span className={`sub-check ${step >= 3 ? "checked" : "pending"}`}>{step >= 3 ? "✓" : "○"}</span>
            <span>Sign-off</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShiftStatusVisual() {
  const [phaseIndex, setPhaseIndex] = React.useState(0);
  const phases = ["AM", "PM", "NT"];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPhaseIndex((prev) => (prev + 1) % 3);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const activePhase = phases[phaseIndex];

  const getFillWidth = (bar) => {
    if (activePhase === "AM") {
      if (bar === "Morning") return "65%";
      if (bar === "Afternoon") return "0%";
      return "0%";
    }
    if (activePhase === "PM") {
      if (bar === "Morning") return "100%";
      if (bar === "Afternoon") return "70%";
      return "0%";
    }
    if (activePhase === "NT") {
      if (bar === "Morning") return "100%";
      if (bar === "Afternoon") return "100%";
      return "45%";
    }
    return "0%";
  };

  const getNodeAngle = () => {
    if (phaseIndex === 0) return 0;
    if (phaseIndex === 1) return 120;
    return 240;
  };

  return (
    <div className="sol-visual sol-shift">
      <div className="sol-shift__scene">
        {/* Tilted 3D Chronometer Cylinder */}
        <div className="shift-disc">
          <div className="disc-face" />
          <div className="disc-edge" />

          {/* Clock radar sweep element */}
          <div className="disc-radar-line" style={{ transform: `rotateZ(${phaseIndex * 120}deg)` }} />

          <svg className="disc-segments" viewBox="0 0 120 120" aria-hidden="true">
            <path
              d="M60,60 L60,18 A42,42 0 0,1 96.4,81 Z"
              fill={activePhase === "AM" ? "rgba(251,191,36,0.22)" : "rgba(251,191,36,0.06)"}
              stroke="rgba(251,191,36,0.25)"
              strokeWidth="1"
              style={{ transition: "fill 0.5s ease" }}
            />
            <path
              d="M60,60 L96.4,81 A42,42 0 0,1 23.6,81 Z"
              fill={activePhase === "PM" ? "rgba(37,99,235,0.2)" : "rgba(37,99,235,0.05)"}
              stroke="rgba(37,99,235,0.2)"
              strokeWidth="1"
              style={{ transition: "fill 0.5s ease" }}
            />
            <path
              d="M60,60 L23.6,81 A42,42 0 0,1 60,18 Z"
              fill={activePhase === "NT" ? "rgba(99,102,241,0.2)" : "rgba(15,23,42,0.04)"}
              stroke="rgba(99,102,241,0.15)"
              strokeWidth="1"
              style={{ transition: "fill 0.5s ease" }}
            />
            <circle cx="60" cy="60" r="10" fill="#fff" stroke="rgba(15,23,42,0.08)" strokeWidth="1.5" />
            <circle cx="60" cy="60" r="4.5" fill="#2563eb" className="shift-hub-pulse" />
          </svg>

          {/* Smooth-glide 3D orbit pointer */}
          <div
            className="orbit-node-3d"
            style={{
              transform: `rotate(${getNodeAngle()}deg) translate(0, -42px) rotate(-${getNodeAngle()}deg)`,
              transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)"
            }}
          />
        </div>

        {/* Phase selector glass pills */}
        <div className="shift-phases glass-phases">
          <span className={`phase glass-phase ${activePhase === "AM" ? "active morning" : ""}`}>AM</span>
          <span className={`phase glass-phase ${activePhase === "PM" ? "active afternoon" : ""}`}>PM</span>
          <span className={`phase glass-phase ${activePhase === "NT" ? "active night" : ""}`}>NT</span>
        </div>

        {/* Shift completion bars */}
        <div className="shift-bars">
          <div className="shift-bar">
            <span className="bar-label">Morning</span>
            <div className="bar-track">
              <div
                className={`bar-fill ${activePhase === "AM" ? "active-glow" : ""}`}
                style={{ width: getFillWidth("Morning"), transition: "width 0.8s ease" }}
              />
            </div>
          </div>
          <div className="shift-bar">
            <span className="bar-label">Afternoon</span>
            <div className="bar-track">
              <div
                className={`bar-fill ${activePhase === "PM" ? "active-glow" : ""}`}
                style={{ width: getFillWidth("Afternoon"), transition: "width 0.8s ease" }}
              />
            </div>
          </div>
          <div className="shift-bar">
            <span className="bar-label">Night</span>
            <div className="bar-track">
              <div
                className={`bar-fill ${activePhase === "NT" ? "active-glow" : ""}`}
                style={{ width: getFillWidth("Night"), transition: "width 0.8s ease" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoleDelegationVisual() {
  return (
    <div className="sol-visual sol-roles">
      <div className="sol-roles__scene">
        {/* Central hub block */}
        <div className="roles-hub">
          <div className="hub-face face--front">
            <span className="hub-icon">⬡</span>
          </div>
          <div className="hub-face face--right" />
          <div className="hub-face face--bottom" />
        </div>

        {/* Role nodes orbiting as fancy 3D glassmorphic capsules */}
        <div className="role-node node--admin">
          <div className="role-face face--front">
            <span className="role-badge badge--admin">A</span>
            <span className="role-text">Admin</span>
          </div>
          <div className="role-face face--right" />
          <div className="role-pulse" />
        </div>

        <div className="role-node node--super">
          <div className="role-face face--front">
            <span className="role-badge badge--super">S</span>
            <span className="role-text">Supervisor</span>
          </div>
          <div className="role-face face--right" />
          <div className="role-pulse" />
        </div>

        <div className="role-node node--oper">
          <div className="role-face face--front">
            <span className="role-badge badge--oper">O</span>
            <span className="role-text">Operator</span>
          </div>
          <div className="role-face face--right" />
          <div className="role-pulse" />
        </div>

        {/* Connector rays SVG */}
        <svg className="roles-connectors" viewBox="0 0 180 160" aria-hidden="true">
          <line x1="90" y1="72" x2="45" y2="40" stroke="rgba(37,99,235,0.25)" strokeWidth="1.5" strokeDasharray="4 3" className="ray-line" />
          <line x1="90" y1="72" x2="139" y2="50" stroke="rgba(37,99,235,0.25)" strokeWidth="1.5" strokeDasharray="4 3" className="ray-line" />
          <line x1="90" y1="72" x2="90" y2="128" stroke="rgba(37,99,235,0.25)" strokeWidth="1.5" strokeDasharray="4 3" className="ray-line" />
          {/* Traveling dots */}
          <circle r="3" fill="#2563eb" className="ray-dot dot--1">
            <animateMotion dur="2s" repeatCount="indefinite" path="M90,72 L45,40" />
          </circle>
          <circle r="3" fill="#2563eb" className="ray-dot dot--2">
            <animateMotion dur="2.4s" repeatCount="indefinite" path="M90,72 L139,50" />
          </circle>
          <circle r="3" fill="#2563eb" className="ray-dot dot--3">
            <animateMotion dur="1.8s" repeatCount="indefinite" path="M90,72 L90,128" />
          </circle>
        </svg>
      </div>
    </div>
  );
}

function DigitalLogbookVisual() {
  return (
    <div className="sol-visual sol-logbook">
      <div className="sol-logbook__scene">
        {/* Stacked layer cards with 3D offset */}
        <div className="logbook-stack">
          <div className="log-layer layer--4">
            <div className="layer-face face--front">
              <span className="layer-line" /><span className="layer-line short" />
            </div>
            <div className="layer-face face--right" />
            <div className="layer-face face--bottom" />
          </div>
          <div className="log-layer layer--3">
            <div className="layer-face face--front">
              <span className="layer-line" /><span className="layer-line" /><span className="layer-line short" />
            </div>
            <div className="layer-face face--right" />
            <div className="layer-face face--bottom" />
          </div>
          <div className="log-layer layer--2">
            <div className="layer-face face--front">
              <span className="layer-line" /><span className="layer-line short" />
            </div>
            <div className="layer-face face--right" />
            <div className="layer-face face--bottom" />
          </div>
          <div className="log-layer layer--1 active">
            <div className="layer-face face--front">
              <span className="layer-badge">v4</span>
              <span className="layer-line accent" />
              <span className="layer-line" />
            </div>
            <div className="layer-face face--right" />
            <div className="layer-face face--bottom" />
          </div>
        </div>

        {/* Version spine */}
        <div className="logbook-spine">
          <div className="spine-tick active" /><span>v4</span>
          <div className="spine-tick" /><span>v3</span>
          <div className="spine-tick" /><span>v2</span>
          <div className="spine-tick dim" /><span>v1</span>
        </div>
      </div>

      <div className="sol-visual__label">
        <span className="label-pill">Versioned & locked</span>
      </div>
    </div>
  );
}

function SchedulingVisual() {
  const slots = [
    { id: "a", label: "06:00", filled: true, name: "J. Ramos" },
    { id: "b", label: "14:00", filled: true, name: "A. Singh" },
    { id: "c", label: "22:00", filled: false, name: "" },
    { id: "d", label: "06:00", filled: true, name: "K. Osei" },
    { id: "e", label: "14:00", filled: false, name: "" },
    { id: "f", label: "22:00", filled: true, name: "L. Mota" },
  ];

  return (
    <div className="sol-visual sol-scheduling">
      <div className="sol-scheduling__scene">
        {/* 3D Grid board */}
        <div className="sched-board">
          <div className="board-face face--top" />
          <div className="board-face face--front">
            <div className="sched-grid">
              {slots.map((slot) => (
                <div key={slot.id} className={`sched-slot ${slot.filled ? "filled" : "empty"}`}>
                  <span className="slot-time">{slot.label}</span>
                  {slot.filled ? (
                    <span className="slot-avatar">{slot.name.charAt(0)}</span>
                  ) : (
                    <span className="slot-open">+</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="board-face face--right" />
        </div>

        {/* Floating assignment pin */}
        <div className="assign-pin">
          <div className="pin-head" />
          <div className="pin-tail" />
          <div className="pin-pulse" />
        </div>
      </div>

      <div className="sol-visual__label">
        <span className="label-pill">4 of 6 assigned</span>
      </div>
    </div>
  );
}

function AnalyticalVisual() {
  const [dataIndex, setDataIndex] = React.useState(0);

  const datasets = [
    [
      { width: "95%" },
      { width: "78%" },
      { width: "92%" },
      { width: "65%" },
      { width: "88%" },
    ],
    [
      { width: "80%" },
      { width: "88%" },
      { width: "70%" },
      { width: "85%" },
      { width: "95%" },
    ],
    [
      { width: "100%" },
      { width: "60%" },
      { width: "85%" },
      { width: "75%" },
      { width: "90%" },
    ]
  ];

  const metrics = [
    { value: "98%", change: "↑12", valLabel: "On-time", changeLabel: "This week" },
    { value: "99%", change: "↑15", valLabel: "On-time", changeLabel: "Live now" },
    { value: "97%", change: "↑10", valLabel: "Efficiency", changeLabel: "This shift" }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDataIndex((prev) => (prev + 1) % datasets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentDataset = datasets[dataIndex];
  const currentMetric = metrics[dataIndex];

  return (
    <div className="sol-visual sol-analytics">
      <div className="sol-analytics__scene">
        {/* 3D Base platform */}
        <div className="analytics-platform">
          <div className="platform-face face--top" />
          <div className="platform-face face--front" />
          <div className="platform-face face--right" />
        </div>

        {/* Transposition rails */}
        <div className="transpo-rails">
          {currentDataset.map((rail, i) => (
            <div className="transpo-rail" key={i}>
              <div className="rail-track">
                <div className="rail-fill" style={{ width: rail.width }} />
                <div className="rail-node" style={{ left: rail.width }} />
              </div>
            </div>
          ))}
        </div>

        {/* Floating metric badges */}
        <div className="metric-badge badge--a">
          <strong style={{ transition: "all 0.5s" }}>{currentMetric.value}</strong>
          <span>{currentMetric.valLabel}</span>
        </div>
        <div className="metric-badge badge--b">
          <strong style={{ transition: "all 0.5s" }}>{currentMetric.change}</strong>
          <span>{currentMetric.changeLabel}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Visual Router ────────────────────────────────────────────────────────────

function SolutionVisual({ title }) {
  switch (title) {
    case "Logsheet builder": return <LogsheetBuilderVisual />;
    case "Notifications": return <NotificationsVisual />;
    case "Logsheet submission": return <SubmissionVisual />;
    case "Shift status": return <ShiftStatusVisual />;
    case "Role Based Authority": return <RoleDelegationVisual />;
    case "Digital logbook": return <DigitalLogbookVisual />;
    case "Scheduling assistant": return <SchedulingVisual />;
    case "Analytical dashboard": return <AnalyticalVisual />;
    default: return null;
  }
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function SolutionsSection() {
  return (
    <section className="solutions-shell screen-section" id="solutions">
      <div className="section-copy">
        <h2>Purpose-built modules for the work Eqnce handles best.</h2>
      </div>

      <div className="solutions-marquee" aria-hidden="true">
        <div className="solutions-track">
          {[...marqueeSolutions, ...marqueeSolutions].map((solution, index) => (
            <article
              className={`solution-card marquee-card ${solution.tone}`}
              key={`${solution.title}-${index}`}
            >
              <div className="solution-card-head">
                <span className="solution-icon-badge">
                  <UiIcon name={solution.icon || "chart"} />
                </span>
                <div className="solution-copy">
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                </div>
              </div>

              <SolutionVisual title={solution.title} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}