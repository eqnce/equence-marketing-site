const companyNames = [
  "Northsteel",
  "PlantGrid",
  "Flowcore",
  "Axis Works",
  "Driftline",
  "Prime Forge",
];

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

const testimonials = [
  {
    quote:
      "Eqnce gave our team one place to manage digital logbooks, shift assignments, and approvals without losing structure.",
    name: "Aarav Mehta",
    role: "Plant Head, Northsteel",
  },
  {
    quote:
      "The visual workflows make it easier for operators and reviewers to stay aligned during busy production cycles.",
    name: "Ritika Sharma",
    role: "Operations Lead, Flowcore",
  },
  {
    quote:
      "We care about speed, traceability, and cleaner reporting. Eqnce brought those pieces together in a practical way.",
    name: "Karan Iyer",
    role: "Quality Systems Manager, Prime Forge",
  },
];

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

const calendarDays = [
  { day: "Sun", date: "" },
  { day: "Mon", date: "12" },
  { day: "Tue", date: "13" },
  { day: "Wed", date: "14" },
  { day: "Thu", date: "15", active: true },
  { day: "Fri", date: "16" },
  { day: "Sat", date: "17" },
  { day: "Sun", date: "18" },
  { day: "Mon", date: "19" },
  { day: "Tue", date: "20" },
  { day: "Wed", date: "21" },
  { day: "Thu", date: "22" },
  { day: "Fri", date: "23" },
];

const reviewItems = [
  {
    title: "Boiler startup checklist",
    meta: "Shift A | Submitted",
    status: "Awaiting action",
    action: "Approve",
  },
  {
    title: "Cooling line incident",
    meta: "Open Logsheet | Pending",
    status: "Needs review",
    action: "Open",
  },
  {
    title: "Packaging QA release",
    meta: "Shift C | Escalated",
    status: "Escalated",
    action: "Resolve",
  },
];

export default function App() {
  return (
    <div className="page">
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
            <a className="button subtle" href="#solutions">
              View product
            </a>
            <a className="button strong" href="#contact">
              Get started
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-shell">
          <div className="hero-copy">
            <span className="eyebrow">Eqnce for plant operations</span>
            <h1>The better way to run operational workflows.</h1>
            <p>
              Build digital logbooks, coordinate scheduling, manage approvals,
              and monitor plant activity through a calmer operating system for
              production teams.
            </p>

            <div className="hero-actions">
              <a className="button strong large" href="#contact">
                Start with Eqnce
              </a>
              <a className="button subtle large" href="#how-it-works">
                See how it works
              </a>
            </div>

            <div className="hero-caption">
              Built around workflow creation, scheduling assistance, and approval
              visibility.
            </div>
          </div>

          <div className="hero-widgets" aria-hidden="true">
            <article className="widget widget-main widget-tilt">
              <div className="widget-logo-row">
                <div className="widget-app-icon">EQ</div>
                <span className="widget-label">Builder</span>
              </div>

              <div className="widget-title-block">
                <strong>Create form version</strong>
                <p>Build schema, preview sections, and autosave operator-ready forms.</p>
              </div>

              <div className="pill-row">
                <span>Autosave</span>
                <span>Preview</span>
                <span>Versioning</span>
              </div>

              <div className="mini-form builder-session">
                <div className="builder-cursor" />
                <div className="mini-field large-field editing">
                  <span>Equipment status</span>
                  <em>Running</em>
                </div>
                <div className="mini-field typing">
                  <span>Temperature reading</span>
                  <em>84 C</em>
                </div>
                <div className="mini-field saving">
                  <span>Operator signature</span>
                  <em>Signed</em>
                </div>
              </div>

              <div className="builder-save-row" aria-hidden="true">
                <span className="builder-save-indicator">Draft saved</span>
                <span className="builder-save-button">Publishing</span>
              </div>
            </article>

            <article className="widget widget-queue review-session">
              <div className="widget-topline">
                <span>Review submission</span>
                <span>Plant A</span>
              </div>

              <div className="stat-pills">
                <span className="dark-pill">3 pending</span>
                <span>2 pending</span>
                <span>1 escalated</span>
              </div>

              <div className="queue-list">
                {reviewItems.map((item) => (
                  <div className="queue-item" key={item.title}>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.meta}</p>
                    </div>
                    <div className="queue-item-side">
                      <small>{item.status}</small>
                      <span>{item.action}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="review-detail-card">
                <div className="review-detail-head">
                  <strong>Submission details</strong>
                  <span>Live review</span>
                </div>
                <div className="review-detail-grid">
                  <div className="review-detail-row">
                    <label>Operator</label>
                    <strong>Shift A operator</strong>
                  </div>
                  <div className="review-detail-row">
                    <label>Submitted</label>
                    <strong>22 Apr, 11:42</strong>
                  </div>
                  <div className="review-detail-row">
                    <label>Plant</label>
                    <strong>Plant A</strong>
                  </div>
                  <div className="review-detail-row">
                    <label>Status</label>
                    <strong>Pending approval</strong>
                  </div>
                </div>
                <div className="review-actions">
                  <span>Reject</span>
                  <span>Approve</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="logo-strip" id="company">
          <p>Trusted by teams modernizing production workflows and digital record keeping.</p>
          <div className="logo-marquee">
            <div className="logo-track">
              {[...companyNames, ...companyNames].map((name, index) => (
                <span key={`${name}-${index}`}>{name}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="solutions-shell" id="solutions">
          <div className="section-copy">
            <span className="eyebrow">Solutions</span>
            <h2>Purpose-built modules for the work Eqnce handles best.</h2>
            <p>
              A simple architecture for digital logbooks, scheduling assistance,
              and analytical dashboards with space for richer workflows over
              time.
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution) => (
              <article className={`solution-card ${solution.tone}`} key={solution.title}>
                <div className="solution-meta">
                  <span className="meta-line" />
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <div className="solution-visual">
                  {solution.title === "Digital logbook" && (
                    <div className="visual-window builder-visual">
                      <div className="visual-window-head">
                        <span>Builder autosave</span>
                        <strong>v4 active</strong>
                      </div>
                      <div className="visual-toolbar">
                        <span className="active">Section 1</span>
                        <span>Section 2</span>
                        <span>Add</span>
                      </div>
                      <div className="visual-row wide" />
                      <div className="visual-row mid" />
                      <div className="logbook-grid">
                        <div className="visual-card-small" />
                        <div className="logbook-stack">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                      <div className="logbook-tags">
                        <span>Operator</span>
                        <span>Shift A</span>
                        <span>Approved</span>
                      </div>
                      <div className="visual-row short" />
                    </div>
                  )}
                  {solution.title === "Scheduling assistant" && (
                    <div className="visual-window calendar-window">
                      <div className="calendar-head">
                        <div>
                          <span>Shift calendar</span>
                          <strong>May 2026</strong>
                        </div>
                        <span className="calendar-badge">Plant A</span>
                      </div>
                      <div className="calendar-grid">
                        {calendarDays.map((item, index) => (
                          <div
                            className={`calendar-cell${item.active ? " active" : ""}${
                              item.date ? " filled" : ""
                            }`}
                            key={`${item.day}-${index}`}
                          >
                            <small>{item.day}</small>
                            <strong>{item.date}</strong>
                          </div>
                        ))}
                      </div>
                      <div className="calendar-footer">
                        <span>Shift B selected</span>
                        <strong>14:00</strong>
                      </div>
                    </div>
                  )}
                  {solution.title === "Analytical dashboard" && (
                    <div className="visual-window analytics-window">
                      <div className="visual-window-head">
                        <span>Review queue</span>
                        <strong>live</strong>
                      </div>
                      <div className="analytics-bars">
                        <span className="bar bar-a" />
                        <span className="bar bar-b" />
                        <span className="bar bar-c" />
                        <span className="bar bar-d" />
                      </div>
                      <div className="analytics-review-list">
                        <span>Awaiting Action</span>
                        <span>Approved</span>
                        <span>Rejected</span>
                      </div>
                      <div className="analytics-mini-stats">
                        <span>91% completion</span>
                        <span>6.2h avg approval</span>
                      </div>
                      <div className="analytics-legend">
                        <span>Approvals</span>
                        <span>Completion</span>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="how-shell" id="how-it-works">
          <div className="section-copy">
            <span className="eyebrow">How it works</span>
            <h2>How workflow creation moves through the plant.</h2>
            <p>
              Eqnce brings builder, package assignment, review submission, and plant workflow history into one schema-driven flow.
            </p>
          </div>

          <div className="workflow-showcase" aria-hidden="true">
            <div className="showcase-head">
              <span className="window-dot" />
              <span className="window-dot" />
              <span className="window-dot" />
            </div>

            <div className="showcase-body">
              <div className="showcase-sidebar">
                <span>Builder</span>
                <span>Packages</span>
                <span>Review</span>
                <span>History</span>
              </div>
              <div className="showcase-main">
                <div className="showcase-panel active-panel">
                  <strong>Builder</strong>
                  <p>Drag fields, preview changes, and autosave schema updates live.</p>
                </div>
                <div className="showcase-panel">
                  <strong>Assign package</strong>
                  <p>Route workflows to shifts and plants through package assignment.</p>
                </div>
                <div className="showcase-panel">
                  <strong>Review submission</strong>
                  <p>Approve, reject, and track plant records with clear submission states.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials-shell">
          <div className="section-copy">
            <span className="eyebrow">Testimonials & company</span>
            <h2>Visual proof that the product can scale across teams and plants.</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <p>"{item.quote}"</p>
                <div className="testimonial-meta">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="future-shell" id="future">
          <div className="section-copy">
            <span className="eyebrow">In future</span>
            <h2>The roadmap extends beyond live workflows.</h2>
            <p>
              Eqnce can grow into reporting, history access, audit support, and
              ERP connectivity without changing the overall product shape.
            </p>
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

        <section className="cta-shell" id="contact">
          <div>
            <span className="eyebrow">Ready to launch</span>
            <h2>Bring Eqnce to the front of your plant workflow.</h2>
          </div>

          <div className="cta-actions">
            <a className="button strong" href="mailto:hello@eqnce.com">
              hello@eqnce.com
            </a>
            <a className="button subtle top-link" href="#top">
              <span className="top-link-arrow">&#8593;</span>
              <span>Back to top</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

