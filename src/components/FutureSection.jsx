import React from "react";

const futureItems = [
  {
    title: "Report generation",
    detail: "Shift summary exports",
    lines: ["Daily output", "Pending issues", "Supervisor sign-off"],
    glyph: "RG",
  },
  {
    title: "View history",
    detail: "Record timeline access",
    lines: ["Form versions", "Review actions", "Plant filters"],
    glyph: "VH",
  },
  {
    title: "Audit support",
    detail: "Inspection-ready trails",
    lines: ["Approval chain", "Evidence uploads", "Timestamped entries"],
    glyph: "AS",
  },
  {
    title: "ERP connection",
    detail: "Operational sync layer",
    lines: ["Batch IDs", "Shift mapping", "Status transfer"],
    glyph: "ERP",
  },
];

export default function FutureSection() {
  return (
    <section className="future-shell screen-section" id="future">
      <div className="section-copy">
        <h2>The roadmap extends beyond live workflows.</h2>
      </div>

      <div className="future-grid">
        {futureItems.map((item) => (
          <article className="future-card" key={item.title}>
            <span className="future-marker">{item.glyph}</span>
            <div className="future-copy">
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </div>
            <div className="future-visual" aria-hidden="true">
              {item.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
