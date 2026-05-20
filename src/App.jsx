// App.jsx
import React, { useEffect, useRef } from "react";
import SolutionsSection from "./components/SolutionsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import AnalyticsSection from "./components/AnalyticsSection";
import CompanySection from "./components/CompanySection";
import FutureSection from "./components/FutureSection";

function HeroBackground() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const nodesRef = useRef([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    // ── Grid nodes ──────────────────────────────────────────
    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    const COLS = 14;
    const ROWS = 8;

    const buildGrid = () => {
      nodesRef.current = [];
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          nodesRef.current.push({
            baseX: (c / (COLS - 1)) * W(),
            baseY: (r / (ROWS - 1)) * H(),
            phase: Math.random() * Math.PI * 2,
            speed: 0.3 + Math.random() * 0.4,
            amp: 4 + Math.random() * 8,
            r: c,
            col: c,
            row: r,
          });
        }
      }
    };
    buildGrid();
    window.addEventListener("resize", buildGrid);

    // ── Floating 3-D cuboids ─────────────────────────────────
    const CUBOIDS = Array.from({ length: 18 }, (_, i) => ({
      x: Math.random() * 1,
      y: Math.random() * 1,
      z: Math.random(),
      rotX: Math.random() * Math.PI,
      rotY: Math.random() * Math.PI,
      rotZ: Math.random() * Math.PI,
      dRX: (Math.random() - 0.5) * 0.004,
      dRY: (Math.random() - 0.5) * 0.006,
      dRZ: (Math.random() - 0.5) * 0.003,
      size: 14 + Math.random() * 28,
      opacity: 0.025 + Math.random() * 0.055,
      vx: (Math.random() - 0.5) * 0.00012,
      vy: (Math.random() - 0.5) * 0.00008,
    }));

    // ── Orbital rings ────────────────────────────────────────
    const RINGS = [
      { cx: 0.72, cy: 0.38, rx: 180, ry: 55, rot: -0.3, speed: 0.0003, opacity: 0.055 },
      { cx: 0.18, cy: 0.62, rx: 140, ry: 42, rot: 0.5, speed: -0.0004, opacity: 0.045 },
      { cx: 0.5, cy: 0.5, rx: 260, ry: 80, rot: 0.1, speed: 0.00018, opacity: 0.03 },
    ];

    // ── Particles ────────────────────────────────────────────
    const PARTICLES = Array.from({ length: 55 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.8 + Math.random() * 1.6,
      vx: (Math.random() - 0.5) * 0.00018,
      vy: -0.00005 - Math.random() * 0.00012,
      opacity: 0.06 + Math.random() * 0.12,
      phase: Math.random() * Math.PI * 2,
    }));

    // ── Draw helpers ─────────────────────────────────────────
    function project3D(px, py, pz) {
      // simple isometric-ish
      const ix = px - py * 0.5;
      const iy = pz - py * 0.35;
      return [ix, iy];
    }

    function rotatePt(x, y, z, rx, ry, rz) {
      // rotate Z
      let x1 = x * Math.cos(rz) - y * Math.sin(rz);
      let y1 = x * Math.sin(rz) + y * Math.cos(rz);
      let z1 = z;
      // rotate X
      let y2 = y1 * Math.cos(rx) - z1 * Math.sin(rx);
      let z2 = y1 * Math.sin(rx) + z1 * Math.cos(rx);
      let x2 = x1;
      // rotate Y
      let x3 = x2 * Math.cos(ry) + z2 * Math.sin(ry);
      let z3 = -x2 * Math.sin(ry) + z2 * Math.cos(ry);
      let y3 = y2;
      return [x3, y3, z3];
    }

    function cuboidFaces(size) {
      const s = size / 2;
      const verts = [
        [-s, -s, -s], [s, -s, -s], [s, s, -s], [-s, s, -s],
        [-s, -s, s], [s, -s, s], [s, s, s], [-s, s, s],
      ];
      return {
        verts,
        faces: [
          [0, 1, 2, 3], [4, 5, 6, 7], [0, 1, 5, 4],
          [2, 3, 7, 6], [0, 3, 7, 4], [1, 2, 6, 5],
        ],
      };
    }

    function drawCuboid(ctx, cub, W, H) {
      const { x, y, rotX, rotY, rotZ, size, opacity } = cub;
      const { verts, faces } = cuboidFaces(size);
      const cx = x * W;
      const cy = y * H;

      const rotated = verts.map(([vx, vy, vz]) =>
        rotatePt(vx, vy, vz, rotX, rotY, rotZ)
      );

      const projected = rotated.map(([vx, vy, vz]) => {
        const scale = 1 + vz / 400;
        return [cx + vx * scale, cy + vy * scale];
      });

      const faceShades = [0.9, 0.6, 0.75, 0.55, 0.8, 0.5];

      faces.forEach((face, fi) => {
        const pts = face.map((i) => projected[i]);
        // backface cull via cross product
        const ax = pts[1][0] - pts[0][0];
        const ay = pts[1][1] - pts[0][1];
        const bx = pts[2][0] - pts[0][0];
        const by = pts[2][1] - pts[0][1];
        if (ax * by - ay * bx > 0) return;

        ctx.beginPath();
        ctx.moveTo(pts[0][0], pts[0][1]);
        for (let k = 1; k < pts.length; k++) ctx.lineTo(pts[k][0], pts[k][1]);
        ctx.closePath();
        const shade = faceShades[fi];
        const a = opacity * shade;
        ctx.fillStyle = `rgba(15,23,42,${a})`;
        ctx.strokeStyle = `rgba(15,23,42,${a * 1.6})`;
        ctx.lineWidth = 0.6;
        ctx.fill();
        ctx.stroke();
      });
    }

    // ── Main render loop ────────────────────────────────────
    const draw = () => {
      const w = W();
      const h = H();
      timeRef.current += 0.008;
      const t = timeRef.current;

      ctx.clearRect(0, 0, w, h);

      // — Orbital rings —
      RINGS.forEach((ring) => {
        ring.rot += ring.speed;
        ctx.save();
        ctx.translate(ring.cx * w, ring.cy * h);
        ctx.rotate(ring.rot);
        ctx.beginPath();
        ctx.ellipse(0, 0, ring.rx, ring.ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(15,23,42,${ring.opacity})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([6, 10]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();

        // dot on ring
        const angle = ring.rot * 3;
        const dx = Math.cos(angle) * ring.rx;
        const dy = Math.sin(angle) * ring.ry;
        const rotDx = dx * Math.cos(ring.rot) - dy * Math.sin(ring.rot);
        const rotDy = dx * Math.sin(ring.rot) + dy * Math.cos(ring.rot);
        ctx.beginPath();
        ctx.arc(ring.cx * w + rotDx, ring.cy * h + rotDy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(15,23,42,${ring.opacity * 2.5})`;
        ctx.fill();
      });

      // — Grid mesh —
      const nodes = nodesRef.current;
      if (nodes.length) {
        nodes.forEach((n) => {
          n.x = n.baseX + Math.sin(t * n.speed + n.phase) * n.amp;
          n.y = n.baseY + Math.cos(t * n.speed * 0.7 + n.phase) * n.amp * 0.6;
        });

        // draw edges
        for (let r = 0; r < ROWS; r++) {
          for (let c = 0; c < COLS; c++) {
            const i = r * COLS + c;
            const n = nodes[i];
            // horizontal
            if (c < COLS - 1) {
              const nb = nodes[i + 1];
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(nb.x, nb.y);
              ctx.strokeStyle = "rgba(15,23,42,0.055)";
              ctx.lineWidth = 0.7;
              ctx.stroke();
            }
            // vertical
            if (r < ROWS - 1) {
              const nb = nodes[i + COLS];
              ctx.beginPath();
              ctx.moveTo(n.x, n.y);
              ctx.lineTo(nb.x, nb.y);
              ctx.strokeStyle = "rgba(15,23,42,0.055)";
              ctx.lineWidth = 0.7;
              ctx.stroke();
            }
          }
        }

        // draw nodes
        nodes.forEach((n, i) => {
          const pulse = Math.sin(t * n.speed * 2 + n.phase) * 0.5 + 0.5;
          const r2 = 1.2 + pulse * 1.2;
          ctx.beginPath();
          ctx.arc(n.x, n.y, r2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(15,23,42,${0.08 + pulse * 0.07})`;
          ctx.fill();
        });
      }

      // — Cuboids —
      CUBOIDS.forEach((cub) => {
        cub.rotX += cub.dRX;
        cub.rotY += cub.dRY;
        cub.rotZ += cub.dRZ;
        cub.x += cub.vx;
        cub.y += cub.vy;
        if (cub.x < -0.05) cub.x = 1.05;
        if (cub.x > 1.05) cub.x = -0.05;
        if (cub.y < -0.05) cub.y = 1.05;
        if (cub.y > 1.05) cub.y = -0.05;
        drawCuboid(ctx, cub, w, h);
      });

      // — Particles —
      PARTICLES.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.phase += 0.02;
        if (p.y < -0.01) { p.y = 1.01; p.x = Math.random(); }
        if (p.x < -0.01) p.x = 1.01;
        if (p.x > 1.01) p.x = -0.01;
        const op = p.opacity * (0.6 + 0.4 * Math.sin(p.phase));
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(15,23,42,${op})`;
        ctx.fill();
      });

      // — Flowing data lines —
      for (let li = 0; li < 3; li++) {
        const yBase = [0.22, 0.5, 0.78][li];
        const speed = [0.6, 0.4, 0.5][li];
        const offset = [0, 2, 4][li];
        const progress = ((t * speed + offset) % 6) / 6;
        const x = progress * w;
        const y = yBase * h + Math.sin(t * 0.4 + li) * 18;

        const grd = ctx.createRadialGradient(x, y, 0, x, y, 60);
        grd.addColorStop(0, "rgba(15,23,42,0.09)");
        grd.addColorStop(1, "rgba(15,23,42,0)");
        ctx.beginPath();
        ctx.arc(x, y, 60, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", buildGrid);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-bg-canvas"
      aria-hidden="true"
    />
  );
}

export default function App() {
  return (
    <div className="page">
      <svg
        style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
        aria-hidden="true"
      >
        <defs>
          <filter id="neon-glow-blue" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur1" />
            <feGaussianBlur stdDeviation="8" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="laser-grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
      </svg>

      <header className="header-shell" id="top">
        <div className="header">
          <a className="brand" href="#top" aria-label="Eqnce home">
            <img className="brand-wordmark" src="/EQNCE 1.svg" alt="Eqnce" />
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#solutions">Solutions</a>
            <a href="#how-it-works">How it works</a>
            <a href="#analytics">Analytics</a>
            <a href="#company">Company</a>
            <a href="#future">Future</a>
          </nav>
          <div className="header-actions">
            <a className="button subtle" href="#solutions">View product</a>
            <a className="button strong" href="#contact">Get started</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-shell">
          {/* ── Immersive 3-D background ── */}
          <HeroBackground />

          {/* ── Radial vignette overlay ── */}
          <div className="hero-vignette" aria-hidden="true" />

          {/* ── Copy ── */}
          <div className="hero-copy">

            <h1>The better way to run operational workflows.</h1>

            <p className="hero-sub">
              Eqnce connects your plant floor to your approval chain — replacing
              scattered paper logs, missed handoffs, and siloed data with one
              structured, real-time workflow layer your entire team can trust.
            </p>

            <div className="hero-actions">
              <a className="button strong large" href="#contact">
                Start with Eqnce
              </a>
              <a className="button subtle large" href="#how-it-works">
                See how it works
              </a>
            </div>

            {/* Social proof strip */}
            <div className="hero-proof">
              <div className="proof-avatars">
                {["J", "R", "A", "K", "L"].map((l, i) => (
                  <span key={i} className="proof-avatar" style={{ zIndex: 5 - i }}>
                    {l}
                  </span>
                ))}
              </div>
              <span className="proof-text">
                Trusted by <strong>60+ plant operators</strong> across 3 facilities
              </span>
            </div>
          </div>

          {/* ── Widgets ── */}
          <div className="hero-widgets" aria-hidden="true">
            <article className="widget widget-main">
              <div className="widget-logo-row">
                <div className="widget-app-icon">EQ</div>
              </div>
              <div className="widget-title-block">
                <strong>Create Logsheet version</strong>
              </div>

              <div className="abstract-input-flowchart isometric-board">
                <div className="ambient-glow" />
                <div className="board-base">
                  <svg viewBox="0 0 320 160" className="pipeline-canvas">
                    <path
                      d="M 20 40 C 80 40, 60 120, 120 120 C 180 120, 160 40, 220 40 H 300"
                      fill="none"
                      stroke="rgba(15,23,42,0.06)"
                      strokeWidth="4"
                    />
                    <path
                      d="M 20 40 C 80 40, 60 120, 120 120 C 180 120, 160 40, 220 40 H 300"
                      fill="none"
                      stroke="url(#laser-grad-blue)"
                      strokeWidth="4"
                      filter="url(#neon-glow-blue)"
                      strokeDasharray="8 8"
                      className="pipeline-flow-active"
                    />
                    <circle cx="170" cy="80" r="10" fill="rgba(37,99,235,0.1)" stroke="rgba(37,99,235,0.3)" strokeWidth="1.5" />
                    <circle cx="0" cy="0" r="5.5" fill="#2563eb" className="traveling-bubble bubble-1" />
                    <circle cx="0" cy="0" r="4.5" fill="#111827" className="traveling-bubble bubble-2" />
                    <circle cx="0" cy="0" r="5.5" fill="#2563eb" className="traveling-bubble bubble-3" />
                    <line x1="250" y1="30" x2="300" y2="30" stroke="rgba(15,23,42,0.15)" strokeWidth="3" strokeLinecap="round" className="ledger-line" />
                    <line x1="250" y1="42" x2="290" y2="42" stroke="rgba(15,23,42,0.15)" strokeWidth="3" strokeLinecap="round" className="ledger-line" />
                    <line x1="250" y1="54" x2="300" y2="54" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" className="ledger-line ledger-line-active" />
                  </svg>
                  <div className="validator-lens-3d">
                    <div className="lens-ring outer" />
                    <div className="lens-ring inner" />
                    <div className="lens-core" />
                  </div>
                </div>
                <div className="flowchart-label">
                  <strong>Ingested ledger</strong>
                  <span>Active pipeline validation</span>
                </div>
              </div>

              <div className="builder-save-row" aria-hidden="true">
                <span className="builder-save-indicator">Ready to publish</span>
              </div>
            </article>

            <article className="widget widget-queue review-session">
              <div className="bifurcated-decision-gate isometric-board">
                <div className="ambient-glow" />
                <div className="gate-header">
                  <strong>Review Decision Gate</strong>
                  <span className="gate-status">Active Routing</span>
                </div>
                <div className="svg-container">
                  <div className="board-base">
                    <svg viewBox="0 0 300 160" className="gate-svg">
                      <path d="M 20 80 H 100 Q 130 80 150 50 T 200 30 H 260" fill="none" stroke="rgba(15,23,42,0.08)" strokeWidth="4" />
                      <path d="M 20 80 H 100 Q 130 80 150 110 T 200 130 H 260" fill="none" stroke="rgba(15,23,42,0.08)" strokeWidth="4" />
                      <path d="M 20 80 H 100 Q 130 80 150 50 T 200 30 H 260" fill="none" stroke="url(#laser-grad-blue)" strokeWidth="4" filter="url(#neon-glow-blue)" strokeDasharray="6 6" className="flow-path-approved" />
                      <path d="M 20 80 H 100 Q 130 80 150 110 T 200 130 H 260" fill="none" stroke="#111827" strokeWidth="4" strokeDasharray="6 6" className="flow-path-revision" />
                      <circle cx="20" cy="80" r="6" fill="#2563eb" />
                      <circle cx="100" cy="80" r="8" fill="#111827" stroke="#fff" strokeWidth="2" />
                      <circle cx="260" cy="30" r="10" fill="#2563eb" />
                      <circle cx="260" cy="130" r="10" fill="#e2e8f0" stroke="#111827" strokeWidth="2" />
                    </svg>
                    <div className="gate-lens-3d">
                      <div className="lens-ring outer" />
                      <div className="lens-core" />
                    </div>
                  </div>
                  <div className="gate-labels">
                    <div className="label-approved">
                      <span className="dot dot-blue" />
                      <strong>Approved</strong>
                      <span>Sent to Ledger</span>
                    </div>
                    <div className="label-revision">
                      <span className="dot dot-dark" />
                      <strong>Revision</strong>
                      <span>Requires Change</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <SolutionsSection />
        <HowItWorksSection />
        <AnalyticsSection />
        <CompanySection />
        <FutureSection />

        <section className="cta-shell" id="contact">
          <div>
            <h2>Bring Eqnce to the front of your plant workflow.</h2>
          </div>
          <div className="cta-actions">
            <a className="button strong" href="mailto:hello@eqnce.com">
              hello@eqnce.com
            </a>
            <a className="button subtle top-link" href="#top">
              <span className="top-link-arrow">↑</span>
              <span>Back to top</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}