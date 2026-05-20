import React, { useState, useEffect, useRef } from "react";

const LEDGER_LOGS = [
  { time: "06:02", msg: "Shift A → B handover verified", status: "ok" },
  { time: "06:14", msg: "PSI sensor reading #41 locked", status: "ok" },
  { time: "06:31", msg: "Supervisor sign-off applied", status: "ok" },
  { time: "06:45", msg: "Version v2.4 adjustment logged", status: "ok" },
  { time: "07:02", msg: "Temp log compliance check pass", status: "ok" },
  { time: "07:18", msg: "Fatigue assessment cleared", status: "ok" },
  { time: "07:33", msg: "Checklist #17 auto-archived", status: "ok" },
  { time: "07:51", msg: "Shift B → C pre-handover init", status: "ok" },
];

const EXCEPTIONS = [
  { label: "Fatigue threshold check", latency: "1.2s", resolved: true },
  { label: "Digital signature verify", latency: "0.8s", resolved: true },
  { label: "Sensor calibration drift", latency: "2.1s", resolved: false },
  { label: "Checklist timeout alert", latency: "1.5s", resolved: true },
  { label: "Shift overlap detection", latency: "0.6s", resolved: true },
];

export default function AnalyticsSection() {
  const [logIndex, setLogIndex] = useState(0);
  const [exceptionIndex, setExceptionIndex] = useState(0);
  const logEndRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % LEDGER_LOGS.length);
      setExceptionIndex((prev) => (prev + 1) % EXCEPTIONS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Build visible logs: show last 4 entries based on cycling index
  const visibleLogs = [];
  for (let i = 0; i < 4; i++) {
    const idx = (logIndex - 3 + i + LEDGER_LOGS.length * 4) % LEDGER_LOGS.length;
    visibleLogs.push(LEDGER_LOGS[idx]);
  }

  const currentException = EXCEPTIONS[exceptionIndex];

  return (
    <section className="analytics-shell screen-section" id="analytics">
      <div className="section-copy">
        <h2>Turn plant floor noise into clean operational ledgers.</h2>
        <p className="section-subtitle" style={{ color: "var(--muted)", marginTop: "12px" }}>
          Watch raw operational signals align into verified, immutable records in real time.
        </p>
      </div>

      <div className="analytics-layout">
        {/* ── LEFT METRIC CARD: Shift Integrity ── */}
        <div className="analytics-metric-card">
          <div className="metric-header">
            <span className="metric-accent-label">Shift Integrity</span>
            <span className="metric-status-dot active" />
          </div>
          <h3 className="metric-big-number">99.98%</h3>
          <p className="metric-subtitle">Traceability</p>
          <p className="metric-desc">
            Immutable ledger logs capture every shift handover, supervisor sign-off, and version adjustment automatically.
          </p>
          {/* Live Ledger Terminal */}
          <div className="live-ledger-terminal">
            <div className="terminal-header">
              <span className="terminal-dot green" />
              <span className="terminal-title">LEDGER STREAM</span>
            </div>
            <div className="terminal-body">
              {visibleLogs.map((log, i) => (
                <div
                  key={`${log.time}-${i}`}
                  className={`terminal-line ${i === 3 ? "latest" : ""}`}
                >
                  <span className="terminal-time">{log.time}</span>
                  <span className="terminal-msg">{log.msg}</span>
                  <span className="terminal-check">✓</span>
                </div>
              ))}
              <div ref={logEndRef} />
            </div>
          </div>
        </div>

        {/* ── CENTER: 2D Automatic Transposition Visual ── */}
        <div className="transposition-visual-card">
          <div className="transposition-stage">
            {/* Alignment Gate vertical line */}
            <div className="alignment-gate">
              <div className="gate-line" />
              <div className="gate-label">ALIGN</div>
            </div>

            {/* Three parallel transposition rails */}
            {[0, 1, 2].map((railIdx) => (
              <div className="transposition-rail" key={railIdx}>
                <div className="rail-track" />
                {/* Three event packets per rail, staggered delays */}
                {[0, 1, 2].map((packetIdx) => (
                  <div
                    key={packetIdx}
                    className="event-packet"
                    style={{
                      "--scatter-y": `${(packetIdx - 1) * 14 + (railIdx % 2 === 0 ? 6 : -6)}px`,
                      "--delay": `${railIdx * 0.9 + packetIdx * 1.8}s`,
                      "--duration": `${4.5 + packetIdx * 0.6}s`,
                    }}
                  />
                ))}
              </div>
            ))}

            {/* HUD telemetry strip */}
            <div className="transposition-hud">
              <span className="hud-metric">
                <span className="hud-dot active" />
                RATE 2.4K/s
              </span>
              <span className="hud-metric">
                ALIGNED <strong>100%</strong>
              </span>
              <span className="hud-metric">
                DRIFT <strong>0.00</strong>
              </span>
            </div>
          </div>
          <p className="visual-caption">
            Raw signals scatter → pass alignment gate → lock onto clean ledger tracks
          </p>
        </div>

        {/* ── RIGHT METRIC CARD: Latency Reduction ── */}
        <div className="analytics-metric-card">
          <div className="metric-header">
            <span className="metric-accent-label">Latency Reduction</span>
            <span className="metric-status-dot active" />
          </div>
          <h3 className="metric-big-number">&lt; 3 Min</h3>
          <p className="metric-subtitle">Exception Loops</p>
          <p className="metric-desc">
            Radial shift alerts push pending checklist sign-offs and plant deviations to supervisors instantly.
          </p>
          {/* Live Exception Monitor */}
          <div className="exception-monitor">
            <div className="terminal-header">
              <span className={`terminal-dot ${currentException.resolved ? "green" : "amber"}`} />
              <span className="terminal-title">EXCEPTION MONITOR</span>
            </div>
            <div className="exception-body">
              <div className="exception-active">
                <div className="exception-label">{currentException.label}</div>
                <div className="exception-row">
                  <span className="exception-latency">{currentException.latency}</span>
                  <span className={`exception-badge ${currentException.resolved ? "resolved" : "pending"}`}>
                    {currentException.resolved ? "RESOLVED" : "PENDING"}
                  </span>
                </div>
              </div>
              <div className="exception-stats">
                {EXCEPTIONS.map((ex, i) => (
                  <div
                    key={i}
                    className={`exception-stat-bar ${i === exceptionIndex ? "active" : ""} ${ex.resolved ? "resolved" : "pending"}`}
                  >
                    <div className="stat-bar-fill" style={{ width: ex.resolved ? "100%" : "65%" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
