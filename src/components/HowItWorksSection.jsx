import React, { useState, useEffect, useRef } from "react";
import UiIcon from "./UiIcon";

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  const units = [
    {
      id: "01",
      title: "Logbook Forge",
      subtitle: "PHASE 01 // TEMPLATE DESIGN",
      desc: "Design modular logbook templates",
      detail: "Create structured, version-controlled template fields, question grids, and data validation rules.",
      icon: "builder",
      color: "mono",
      left: "16%",
      top: "15%",
      telemetry: "TEMPLATES: 24 | v2.1",
      colorHex: "#111827",
      rgb: "17, 24, 39",
    },
    {
      id: "02",
      title: "Shift Allocator",
      subtitle: "PHASE 02 // SCHEDULING",
      desc: "Define schedules & recurring shifts",
      detail: "Define shifts, recurring operational schedules, handover windows, and logging compliance windows.",
      icon: "clock",
      color: "mono",
      left: "33%",
      top: "48%",
      telemetry: "ACTIVE SHIFTS: AM/PM/NT",
      colorHex: "#111827",
      rgb: "17, 24, 39",
    },
    {
      id: "03",
      title: "Roster Matrix",
      subtitle: "PHASE 03 // PERSONNEL",
      desc: "Assign personnel via roster grid",
      detail: "Assign qualified personnel to shifts. Automatically checks certifications, fatigue levels, and rest periods.",
      icon: "calendar",
      color: "mono",
      left: "50%",
      top: "20%",
      telemetry: "ON-DUTY: 18 OPERATORS",
      colorHex: "#111827",
      rgb: "17, 24, 39",
    },
    {
      id: "04",
      title: "Operator Terminal",
      subtitle: "PHASE 04 // ENTRY FORM",
      desc: "Operators fill out active forms",
      detail: "On-duty operators log readings, checklist routines, and shift exceptions in a highly responsive mobile environment.",
      icon: "list",
      color: "mono",
      left: "67%",
      top: "52%",
      telemetry: "SUBMISSIONS: 100% IN TIME",
      colorHex: "#111827",
      rgb: "17, 24, 39",
    },
    {
      id: "05",
      title: "Validation Gate",
      subtitle: "PHASE 05 // SUPERVISOR",
      desc: "Supervisor audits & signs Logsheet",
      detail: "Supervisors verify data entries, audit anomalies, leave notes, and apply certified digital signatures.",
      icon: "check",
      color: "mono",
      left: "84%",
      top: "25%",
      telemetry: "COMPLIANCE: 100% SECURE",
      colorHex: "#111827",
      rgb: "17, 24, 39",
    },
  ];

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % units.length);
      }, 3500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handleNodeClick = (index) => {
    setActiveStep(index);
    setIsPlaying(false); // Pause auto-rotation when user manually interacts
  };

  const activeUnit = units[activeStep];

  return (
    <section className="how-shell screen-section" id="how-it-works">
      <div className="section-copy">
        <span className="section-label">OPERATIONS WORKFLOW</span>
        <h2>How workflow creation moves through the plant.</h2>
        <p className="section-subtitle">
          Watch real-time data flow from initial structural logsheets to shift schedules, personnel rosters, field entry, and supervisor audit gate.
        </p>

        {/* Technical Playback HUD Panel */}
        <div className="playback-hud-panel">
          <div className="hud-play-controls">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`hud-btn ${isPlaying ? "playing" : "paused"}`}
              aria-label={isPlaying ? "Pause Flow Loop" : "Play Flow Loop"}
            >
              <span className="hud-btn-icon" />
              {isPlaying ? "LIVE SEQUENCE RUNNING" : "SEQUENCE PAUSED"}
            </button>
          </div>

          <div className="hud-quick-selector">
            {units.map((unit, index) => (
              <button
                key={unit.id}
                onClick={() => handleNodeClick(index)}
                className={`hud-selector-dot ${activeStep === index ? "active" : ""}`}
                style={{ "--accent-color": unit.colorHex }}
                title={`Jump to Step ${unit.id}: ${unit.title}`}
              >
                <span className="dot-label">{unit.id}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        className="factory-console"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >


        {/* 3D Isometric Telemetry Platform */}
        <div className="factory-viewport">
          <div className="factory-plane">
            {/* SVG Fiber-Optic Conduit Piping Grid */}
            <svg className="factory-pipelines" viewBox="0 0 1000 1000" preserveAspectRatio="none">
              {/* Main Cable Trunk (Conduit backing) */}
              <path
                d="M 160 150 H 330 V 480 H 500 V 200 H 670 V 520 H 840 V 250"
                fill="none"
                stroke="rgba(15, 23, 42, 0.04)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Fiber-Optic Core Light Stream */}
              <path
                d="M 160 150 H 330 V 480 H 500 V 200 H 670 V 520 H 840 V 250"
                fill="none"
                stroke="rgba(15, 23, 42, 0.08)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Pulsing active signal line segment */}
              <path
                d="M 160 150 H 330 V 480 H 500 V 200 H 670 V 520 H 840 V 250"
                fill="none"
                stroke="#0f172a"
                strokeWidth="2.5"
                strokeDasharray="25 150"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="factory-pulse-line"
              />

              {/* Physical Floating Telemetry Packets (SVG animateMotion) */}
              <circle r="6" fill="#0f172a" className="flow-packet">
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  path="M 160 150 H 330 V 480 H 500 V 200 H 670 V 520 H 840 V 250"
                />
              </circle>

              {/* Pipeline grid turning coordinates */}
              <circle cx="330" cy="150" r="3.5" fill="rgba(15, 23, 42, 0.2)" />
              <circle cx="330" cy="480" r="3.5" fill="rgba(15, 23, 42, 0.2)" />
              <circle cx="500" cy="480" r="3.5" fill="rgba(15, 23, 42, 0.2)" />
              <circle cx="500" cy="200" r="3.5" fill="rgba(15, 23, 42, 0.2)" />
              <circle cx="670" cy="200" r="3.5" fill="rgba(15, 23, 42, 0.2)" />
              <circle cx="670" cy="520" r="3.5" fill="rgba(15, 23, 42, 0.2)" />
              <circle cx="840" cy="520" r="3.5" fill="rgba(15, 23, 42, 0.2)" />
            </svg>

            {/* 3D Stations Grid */}
            {units.map((unit, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={unit.id}
                  className={`factory-unit unit--${unit.color} ${isActive ? "active" : ""}`}
                  style={{
                    left: unit.left,
                    top: unit.top,
                    "--neon-color": unit.colorHex,
                    "--neon-color-rgb": unit.rgb,
                  }}
                  onClick={() => handleNodeClick(index)}
                >
                  {/* Camera-Facing Billboard HUD Card */}
                  <div className={`unit-label-card ${isActive ? "active" : ""}`}>
                    <div className="card-badge">
                      <span className="card-step">{unit.id}</span>
                      <span className="card-phase">{unit.subtitle}</span>
                    </div>
                    <h4 className="card-title">{unit.title}</h4>
                    <p className="card-desc">{unit.desc}</p>

                    <div className="card-expansion">
                      <p className="card-detail">{unit.detail}</p>
                      <div className="card-telemetry">
                        <span className="telemetry-label">TELEMETRY:</span>
                        <span className="telemetry-value">{unit.telemetry}</span>
                      </div>
                    </div>
                  </div>

                  {/* Volumetric 3D Glassmorphic Tower */}
                  <div className="tower-3d">
                    {/* Glowing coordinate base shadow ring under tower */}
                    <div className="tower-base-ring" />

                    {/* Cuboid 3D Faces */}
                    <div className="tower-face face--front" />
                    <div className="tower-face face--right" />
                    <div className="tower-face face--left" />
                    <div className="tower-face face--back" />
                    <div className="tower-face face--top" />

                    {/* Internally enclosed pulsing plasma core */}
                    <div className="tower-core" />

                    {/* Floating Holographic Dial & Icon above Top Roof Face */}
                    <div className="tower-hologram">
                      <div className="holo-ring" />
                      <div className="holo-icon">
                        <UiIcon name={unit.icon} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
}
