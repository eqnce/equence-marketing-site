// App.jsx
import React, { useEffect, useRef } from "react";
import SolutionsSection from "./components/SolutionsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import AnalyticsSection from "./components/AnalyticsSection";
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
        
        const px = p.x * w;
        const py = p.y * h;
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(15,23,42,${op})`;
        ctx.fill();
      });

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

function BrandAffiliation() {
  return (
    <section className="brand-affiliation-shell" id="brand-affiliation">
      <div className="affiliation-background-grid" />
      <div className="affiliation-glow-vignette" />
      
      <div className="affiliation-box-container">
        {/* Dynamic laser connecting thread */}
        <div className="affiliation-connector-line" />
        
        {/* The Sliding Product Card (Eqnce) */}
        <div className="affiliation-card">
          <div className="affiliation-card-inner">
            <span className="affiliation-card-tag">PRODUCT</span>
            <svg className="affiliation-logo logo-eqnce" viewBox="0 0 401 85">
              <path d="M129.545 46.1034C129.545 46.1034 136.735 62.7753 159.71 70.6183C182.685 78.4613 196.972 71.7685 196.972 71.7685" stroke="currentColor" strokeWidth="12" fill="none" strokeLinecap="round" />
              <path d="M18.5907 45.2071C18.7152 49.2463 19.6806 52.8815 21.4867 56.1128C23.2928 59.3441 25.9397 61.8918 29.4274 63.756C32.9774 65.5581 37.3059 66.4592 42.4129 66.4592C46.8348 66.4592 50.6339 65.8688 53.8102 64.6881C57.0488 63.4453 59.7268 61.985 61.8443 60.3073C63.9619 58.5673 65.5189 56.9517 66.5154 55.4603L75.3903 67.4845C73.4596 70.0944 71.0307 72.4246 68.1035 74.4753C65.1763 76.5259 61.5329 78.1105 57.1733 79.229C52.876 80.4097 47.551 81 41.1984 81C32.8529 81 25.5972 79.2911 19.4315 75.8734C13.2657 72.4557 8.47012 67.6398 5.0447 61.4258C1.68157 55.2117 0 47.9413 0 39.6145C0 32.1577 1.55701 25.4465 4.67102 19.481C7.78504 13.4534 12.3004 8.69965 18.217 5.21979C24.1959 1.73993 31.3581 0 39.7037 0C47.4887 0 54.2461 1.55351 59.9759 4.66053C65.7057 7.76755 70.1276 12.2417 73.2416 18.0829C76.4179 23.8619 78.0061 30.8527 78.0061 39.0552C78.0061 39.5524 77.9749 40.5777 77.9127 42.1312C77.9127 43.6847 77.8504 44.71 77.7258 45.2071H18.5907ZM59.322 30.6663C59.2597 28.6778 58.5746 26.4097 57.2667 23.8619C56.0211 21.3142 53.997 19.1082 51.1944 17.244C48.3918 15.3176 44.655 14.3544 39.984 14.3544C35.1884 14.3544 31.2959 15.2865 28.3064 17.1507C25.3169 18.9528 23.106 21.1277 21.6735 23.6755C20.2411 26.1611 19.4003 28.4914 19.1512 30.6663H59.322Z" fill="currentColor"/>
              <path d="M122.179 81C114.145 81 106.983 79.2601 100.693 75.7802C94.4646 72.2382 89.5756 67.4534 86.0256 61.4258C82.4756 55.336 80.7007 48.4384 80.7007 40.733C80.7007 33.0276 82.4756 26.099 86.0256 19.9471C89.5756 13.7952 94.4646 8.94822 100.693 5.40621C106.983 1.80207 114.145 0 122.179 0C130.214 0 137.313 1.80207 143.479 5.40621C149.645 8.94822 154.472 13.7952 157.959 19.9471C161.509 26.099 163.284 33.0276 163.284 40.733C163.284 48.4384 161.509 55.336 157.959 61.4258C154.472 67.4534 149.645 72.2382 143.479 75.7802C137.313 79.2601 130.214 81 122.179 81ZM122.179 64.2221C126.664 64.2221 130.556 63.1968 133.857 61.1461C137.158 59.0955 139.711 56.2992 141.517 52.7572C143.324 49.2152 144.227 45.1761 144.227 40.6398C144.227 36.1036 143.324 32.0644 141.517 28.5224C139.711 24.9183 137.158 22.0598 133.857 19.9471C130.556 17.8343 126.664 16.7779 122.179 16.7779C117.695 16.7779 113.772 17.8343 110.408 19.9471C107.108 22.0598 104.523 24.9183 102.654 28.5224C100.848 32.0644 99.9453 36.1036 99.9453 40.6398C99.9453 45.1761 100.848 49.2152 102.654 52.7572C104.523 56.2992 107.108 59.0955 110.408 61.1461C113.772 63.1968 117.695 64.2221 122.179 64.2221Z" fill="currentColor"/>
              <path d="M216.695 0C221.864 0 226.877 1.05639 231.735 3.16916C236.593 5.28193 240.579 8.66859 243.693 13.3291C246.869 17.9275 248.458 23.9241 248.458 31.3188V78.7629H228.372V34.954C228.372 28.0564 226.722 22.9919 223.421 19.7606C220.182 16.4672 215.978 14.8205 210.809 14.8205C207.384 14.8205 204.114 15.7837 201 17.71C197.886 19.6364 195.332 22.2463 193.339 25.5397C191.409 28.8331 190.443 32.6237 190.443 36.9114V61.8918H170.451V2.23705H190.443V15.1001C191.004 12.9873 192.499 10.7814 194.928 8.48217C197.419 6.12083 200.564 4.13233 204.363 2.51669C208.162 0.838895 212.273 0 216.695 0Z" fill="currentColor"/>
              <path d="M296.935 64.8746C301.357 64.8746 304.939 64.16 307.679 62.7307C310.481 61.2394 312.288 60.1519 313.097 59.4684L322.533 73.4499C321.785 74.0713 320.228 75.0035 317.862 76.2463C315.495 77.4269 312.474 78.5144 308.8 79.5086C305.188 80.5029 301.077 81 296.468 81C288.87 81 281.957 79.4154 275.729 76.2463C269.563 73.015 264.612 68.3855 260.875 62.3579C257.201 56.2681 255.363 48.9666 255.363 40.4534C255.363 31.878 257.201 24.5765 260.875 18.5489C264.612 12.5213 269.563 7.9229 275.729 4.75374C281.957 1.58458 288.87 0 296.468 0C301.015 0 305.063 0.528192 308.613 1.58458C312.225 2.57882 315.215 3.72842 317.581 5.03337C319.948 6.33832 321.536 7.36364 322.346 8.10932L312.724 22.0909C312.288 21.6559 311.385 20.9724 310.014 20.0403C308.706 19.046 306.963 18.145 304.783 17.3372C302.603 16.5293 299.987 16.1254 296.935 16.1254C293.199 16.1254 289.618 17.1197 286.192 19.1082C282.767 21.0967 279.964 23.924 277.784 27.5903C274.515 35.4822 274.515 40.4534C274.515 45.4246 275.604 49.7434 277.784 53.4097C279.964 57.076 282.767 59.9033 286.192 61.8918C289.618 63.8803 293.199 64.8746 296.935 64.8746Z" fill="currentColor"/>
              <path d="M341.585 45.2071C341.709 49.2463 342.675 52.8815 344.481 56.1128C346.287 59.3441 348.934 61.8918 352.421 63.756C355.971 65.5581 360.3 66.4592 365.407 66.4592C369.829 66.4592 373.628 65.8688 376.804 64.6881C380.043 63.4453 382.721 61.985 384.838 60.3073C386.956 58.5673 388.513 56.9517 389.509 55.4603L398.384 67.4845C396.454 70.0944 394.025 72.4246 391.097 74.4753C388.17 76.5259 384.527 78.1105 380.167 79.229C375.87 80.4097 370.545 81 364.192 81C355.847 81 348.591 79.2911 342.425 75.8734C336.26 72.4557 331.464 67.6398 328.039 61.4258C324.675 55.2117 322.994 47.9413 322.994 39.6145C322.994 32.1577 324.551 25.4465 327.665 19.481C330.779 13.4534 335.294 8.69965 341.211 5.21979C347.19 1.73993 354.352 0 362.698 0C370.483 0 377.24 1.55351 382.97 4.66053C388.7 7.76755 393.122 12.2417 396.236 18.0829C399.412 23.8619 401 30.8527 401 39.0552C401 39.5524 400.969 40.5777 400.907 42.1312C400.907 43.6847 400.844 44.71 400.72 45.2071H341.585ZM382.316 30.6663C382.254 28.6778 381.569 26.4097 380.261 23.8619C379.015 21.3142 376.991 19.1082 374.188 17.244C371.386 15.3176 367.649 14.3544 362.978 14.3544C358.182 14.3544 354.29 15.2865 351.3 17.1507C348.311 18.9528 346.1 21.1277 344.668 23.6755C343.235 26.1611 342.394 28.4914 342.145 30.6663H382.316Z" fill="currentColor"/>
            </svg>
          </div>
        </div>

        {/* The Outlined Sleeve Enclosure (Monx) */}
        <div className="affiliation-sleeve">
          {/* Subtle tech notch at the top pocket opening */}
          <div className="sleeve-opening-accent" />
          
          <div className="affiliation-sleeve-inner">
            <span className="affiliation-sleeve-tag">PARENT COMPANY</span>
            <svg className="affiliation-logo logo-monx" viewBox="0 0 339 107">
              <path d="M55.3196 69.8682C55.1822 70.088 55.1163 70.1928 55.0518 70.2984C51.281 76.474 51.2769 76.5192 44.0147 75.8564C43.2485 75.7865 42.3267 74.9391 41.8815 74.2066C35.8434 64.2735 29.8766 54.2971 23.8929 44.3309C22.5242 42.0512 21.1631 39.767 19.7877 37.4914C19.4855 36.9913 19.1378 36.5187 18.811 36.0335C18.6279 36.0766 18.4448 36.1198 18.2617 36.163C18.2617 52.2534 18.2617 68.3437 18.2617 84.5792C11.8929 84.5792 5.87816 84.5792 0 84.5792C0 56.3649 0 28.2931 0 0.00203011C2.56202 0.00203011 4.83746 -0.00339587 7.11286 0.00349355C9.58815 0.0109876 12.0657 0.0977049 14.5378 0.016146C15.8334 -0.0266013 16.5395 0.480517 17.1832 1.56578C26.8644 17.8879 36.5841 34.1872 46.3004 50.4886C46.6969 51.1538 47.1491 51.7858 47.7425 52.6874C50.298 48.4387 52.6842 44.484 55.0582 40.522C62.7811 27.6337 70.5111 14.7495 78.1986 1.84011C78.8474 0.750482 79.5723 0.2865 80.8591 0.317726C84.8796 0.41528 88.9052 0.480882 92.9242 0.378285C94.7265 0.332278 95.2301 0.909913 95.2213 2.68976C95.0922 28.8649 95.0284 55.0404 94.9498 81.2158C94.9462 82.4402 94.9494 83.6647 94.9494 84.9611C88.7968 84.9611 82.8231 84.9611 76.6531 84.9611C76.6531 68.3699 76.6531 51.9113 76.6531 35.4528C76.4748 35.3847 76.2966 35.3165 76.1183 35.2484C69.2094 46.7501 62.3006 58.2518 55.3196 69.8682Z" fill="currentColor"/>
              <path d="M241.363 96.9764C241.363 96.9764 242.042 49.4358 241.363 47.0406C239.581 40.7591 233.157 37.2901 226.101 38.3222C217.834 39.5313 213.099 44.9865 212.905 54.045C212.684 64.3148 212.748 74.5908 212.69 84.864C212.685 85.7761 212.689 86.6881 212.689 87.6554C206.589 87.6554 200.721 87.656 194.853 87.655C193.536 87.6548 193.835 86.6674 193.837 85.9202C193.854 78.3697 193.883 70.8193 193.919 63.2688C193.981 50.4579 194.05 37.647 194.115 24.836C194.119 24.1675 194.116 23.499 194.116 22.6349C196.35 22.6349 198.378 22.6321 200.405 22.6355C203.19 22.6402 205.975 22.6521 208.761 22.6563C212.133 22.6615 212.131 22.6595 212.115 25.9503C212.109 27.2228 212.114 28.4955 212.114 30.0545C214.21 28.5271 215.939 27.0553 217.859 25.9026C227.936 19.855 243.854 20.6605 252.174 28.3466C256.737 32.5613 259.399 37.857 259.868 43.9649C260.359 50.3642 260.342 56.811 260.346 63.2372C260.355 77.1002 260.235 90.9633 260.169 104.826C260.166 105.502 260.169 106.178 260.169 106.999C253.913 106.999 241.362 106.999 241.362 106.999L241.363 96.9764Z" fill="currentColor"/>
              <path d="M121.902 26.5129C129.025 21.1283 137.072 19.1471 145.705 19.3265C152.812 19.4742 159.521 21.1686 165.569 25.0965C173.839 30.4683 178.766 37.9953 180.044 47.7753C181.137 56.1405 179.824 64.0988 175.003 71.1804C168.693 80.4479 159.642 85.1277 148.646 86.087C138.622 86.9616 129.281 84.917 121.281 78.4709C112.392 71.3077 108.446 61.8638 109.139 50.5507C109.741 40.713 113.869 32.6201 121.902 26.5129ZM152.129 69.2327C153.73 67.9943 155.511 66.9299 156.9 65.4875C162.842 59.3175 162.052 47.5308 158.804 42.5287C157.188 40.0404 155.254 37.9397 152.556 36.6385C143.794 32.4141 130.41 35.3381 128.37 49.5084C127.393 56.2992 128.758 62.5445 134.287 67.124C139.59 71.5152 145.592 71.908 152.129 69.2327Z" fill="currentColor"/>
              <path d="M274.582 20.9118C279.408 20.9241 284.049 20.9682 288.689 20.9249C289.862 20.914 290.618 21.278 291.306 22.2536C295.05 27.5591 298.861 32.8171 302.652 38.0889C303.044 38.6331 303.459 39.1604 304.023 39.9077C304.581 39.2334 305.053 38.7083 305.476 38.1463C309.417 32.9077 313.375 27.6815 317.262 22.4033C318.006 21.3937 318.795 21.0043 320.044 21.0277C325.364 21.127 330.686 21.1245 336.007 21.1673C336.606 21.1721 337.205 21.2281 338.168 21.2799C337.589 22.0953 337.229 22.6395 336.833 23.1562C329.682 32.481 322.553 41.8234 315.342 51.1014C314.293 52.4505 314.216 53.3046 315.302 54.7311C322.792 64.5742 330.169 74.5035 337.58 84.4075C337.942 84.8916 338.274 85.398 338.764 86.0989C338.1 86.1686 337.647 86.2587 337.195 86.2572C331.193 86.2379 325.191 86.1695 319.19 86.2073C317.983 86.2149 317.28 85.8002 316.612 84.8407C312.725 79.2583 308.782 73.7145 304.851 68.1629C304.432 67.5714 303.966 67.0133 303.407 66.2906C299.901 70.9654 296.53 75.4614 293.157 79.9562C292.006 81.4897 290.785 82.9759 289.72 84.5669C288.991 85.6577 288.155 86.07 286.821 86.0536C280.766 85.9793 274.709 86.0211 268.153 86.0211C268.752 85.1473 269.081 84.6149 269.46 84.1211C276.996 74.3105 284.518 64.4887 292.106 54.7188C292.988 53.5829 293.012 52.8618 292.142 51.7021C284.938 42.1066 277.806 32.4581 270.655 22.823C270.296 22.3387 269.969 21.8305 269.336 20.9111C271.29 20.9111 272.843 20.9111 274.582 20.9118Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="affiliation-footer-text">
        <p className="primary-text">
          Eqnce is a wholly owned subsidiary of <strong>Monx Technology Pvt Ltd</strong>.
        </p>
      </div>
    </section>
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

        <BrandAffiliation />
      </main>
    </div>
  );
}