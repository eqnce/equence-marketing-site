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
    meta: "Shift A operator | 11:42",
    status: "Awaiting action",
    action: "Approve",
    badge: "Selected",
  },
  {
    title: "Cooling line incident",
    meta: "Open logsheet | Pending",
    status: "Needs review",
    action: "Open",
    badge: "Queued",
  },
];

const marqueeSolutions = [
  {
    title: "Logsheet builder",
    description:
      "Build incident forms, adjust sections, and preview edits while operators and reviewers see the latest structure.",
    tone: "blue",
  },
  ...solutions,
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
            <h1>The better way to run operational workflows.</h1>

            <div className="hero-actions">
              <a className="button strong large" href="#contact">
                Start with Eqnce
              </a>
              <a className="button subtle large" href="#how-it-works">
                See how it works
              </a>
            </div>
          </div>

          <div className="hero-widgets" aria-hidden="true">
            <article className="widget widget-main widget-tilt">
              <div className="widget-logo-row">
                <div className="widget-app-icon">EQ</div>
              </div>

              <div className="widget-title-block">
                <strong>Create form version</strong>
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
              </div>

              <div className="stat-pills">
                <span className="dark-pill">2 pending</span>
                <span>1 rejected</span>
                <span className="approved-pill">1 approved</span>
              </div>

              <div className="queue-list">
                {reviewItems.map((item) => (
                  <div className={`queue-item${item.title === "Boiler startup checklist" ? " active" : ""}`} key={item.title}>
                    <div className="queue-item-main">
                      <strong>{item.title}</strong>
                      <p>{item.meta}</p>
                    </div>
                    <div className="queue-item-side">
                      <small>{item.status}</small>
                      <span>{item.action}</span>
                    </div>
                    <em className="queue-item-badge">{item.badge}</em>
                  </div>
                ))}
              </div>
              <div className="review-detail-card">
                <div className="review-detail-head">
                  <div>
                    <strong>Submission details</strong>
                  </div>
                </div>

                <div className="review-active-card">
                  <div className="review-active-top">
                    <div>
                      <strong>Boiler startup checklist</strong>
                    </div>
                  </div>

                  <div className="review-toolbar" aria-hidden="true">
                    <button className="review-tool active" type="button">Checklist</button>
                    <button className="review-tool active" type="button">Decision note</button>
                    <button className="review-tool" type="button">Approve</button>
                  </div>

                  <div className="review-active-grid">
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
                  </div>

                  <div className="review-edit-panel">
                    <div className="review-edit-head">
                      <span>Decision note</span>
                      <em>Saved</em>
                    </div>
                    <div className="review-edit-body">
                      <p>Startup sequence verified. Pressure checks look consistent.</p>
                    </div>
                    <div className="review-toggle-row">
                      <button className="review-toggle active" type="button">
                        <i />
                        Ready to approve
                      </button>
                      <span className="review-micro-status">Clicked 2 actions</span>
                    </div>
                  </div>
                </div>

                <div className="review-actions">
                  <button type="button">Reject</button>
                  <button className="active" type="button">Approve</button>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="solutions-shell screen-section" id="solutions">
          <div className="section-copy">
            <h2>Purpose-built modules for the work Eqnce handles best.</h2>
          </div>

          <div className="solutions-marquee" aria-hidden="true">
            <div className="solutions-track">
              {[...marqueeSolutions, ...marqueeSolutions].map((solution, index) => (
                <article className={`solution-card marquee-card ${solution.tone}`} key={`${solution.title}-${index}`}>
                <h3>{solution.title}</h3>
                <div className="solution-visual">
                  {solution.title === "Logsheet builder" && (
                    <div className="visual-window logsheet-builder-window live-surface">
                      <div className="visual-window-head product-head">
                        <div>
                          <span>Form builder</span>
                          <strong>Incident response form</strong>
                        </div>
                        <span className="product-version">live edit</span>
                      </div>

                      <div className="logsheet-builder-topbar">
                        <span className="active">Section 1</span>
                        <span>Add section</span>
                      </div>

                      <div className="logsheet-builder-layout">
                        <div className="logsheet-builder-sidebar">
                          <span className="active">Fields</span>
                          <span>Sections</span>
                          <span>Preview</span>
                        </div>

                        <div className="logsheet-builder-canvas">
                          <div className="visual-toolbar live-toolbar logsheet-builder-toolbar">
                            <span className="active">Editing</span>
                            <span>Live</span>
                          </div>

                          <div className="logsheet-change-list">
                            <div className="logsheet-change-card active">
                              <i className="logsheet-grip" />
                              <div className="logsheet-change-copy">
                                <label>Change 01</label>
                                <strong>Text field added</strong>
                              </div>
                            </div>
                            <div className="logsheet-change-card typing">
                              <i className="logsheet-grip" />
                              <div className="logsheet-change-copy">
                                <label>Change 02</label>
                                <strong>Email field reordered</strong>
                              </div>
                            </div>
                          </div>

                          <div className="logsheet-builder-cursor" />
                        </div>

                        <div className="logsheet-builder-settings">
                          <small>Section settings</small>
                          <strong>Selected</strong>
                          <span>Name</span>
                          <em>Section 1</em>
                        </div>
                      </div>
                    </div>
                  )}
                  {solution.title === "Digital logbook" && (
                    <div className="visual-window package-builder-window live-surface">
                      <div className="visual-window-head product-head package-builder-head">
                        <div>
                          <span>Build logbook</span>
                          <strong>Package A</strong>
                        </div>
                        <span className="product-version">2 items</span>
                      </div>

                      <div className="package-builder-topbar">
                        <span className="active">Build Logbook</span>
                        <span>Create Workflow</span>
                      </div>

                      <div className="package-builder-layout">
                        <div className="package-builder-panel">
                          <div className="package-panel-head">
                            <strong>Available forms</strong>
                            <span>3 forms</span>
                          </div>
                          <div className="package-form-list">
                            <div className="package-form-row active">
                              <label>A003</label>
                              <strong>Form - 3</strong>
                              <em>Add form</em>
                            </div>
                            <div className="package-form-row">
                              <label>A002</label>
                              <strong>Form - 2</strong>
                              <em>Add form</em>
                            </div>
                            <div className="package-form-row">
                              <label>A001</label>
                              <strong>Form - 1</strong>
                              <em>Add form</em>
                            </div>
                          </div>

                          <div className="package-pagination">
                            <span className="ghost">Prev</span>
                            <span className="active">1</span>
                            <span className="ghost">Next</span>
                          </div>
                        </div>

                        <div className="package-builder-panel">
                          <div className="package-panel-head">
                            <strong>Package sequence</strong>
                            <span>2 items</span>
                          </div>
                          <div className="package-sequence-list">
                            <div className="package-sequence-card active">
                              <i />
                              <div>
                                <strong>A003 - Form - 3</strong>
                                <small>Frequency 1</small>
                              </div>
                              <em>Remove</em>
                            </div>
                            <div className="package-sequence-card">
                              <i />
                              <div>
                                <strong>A002 - Form - 2</strong>
                                <small>Frequency 1</small>
                              </div>
                              <em>Remove</em>
                            </div>
                          </div>

                          <div className="package-save-bar">
                            <span>New package • 2 items</span>
                            <button type="button">Save Package</button>
                          </div>
                        </div>
                      </div>

                      <div className="package-saved-strip">
                        <span>Saved packages</span>
                        <div className="package-saved-row">
                          <strong>P0001</strong>
                          <em>Package A</em>
                          <span>Assign</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {solution.title === "Scheduling assistant" && (
                    <div className="visual-window calendar-window live-surface">
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

                      <div className="schedule-assistant-panel">
                        <div className="schedule-assistant-head">
                          <span>Selected shift</span>
                          <strong>Shift B</strong>
                        </div>
                        <div className="schedule-assignment active">
                          <div>
                            <small>Assigned operator</small>
                            <strong>Ritika Sharma</strong>
                          </div>
                          <span>Confirmed</span>
                        </div>
                        <div className="schedule-assignment">
                          <div>
                            <small>Approver</small>
                            <strong>Plant supervisor</strong>
                          </div>
                          <span>Added</span>
                        </div>
                      </div>

                      <div className="calendar-footer">
                        <span>Shift B selected</span>
                        <strong>14:00</strong>
                      </div>
                    </div>
                  )}
                  {solution.title === "Analytical dashboard" && (
                    <div className="visual-window analytics-window live-surface">
                      <div className="visual-window-head product-head">
                        <div>
                          <span>Review center</span>
                          <strong>Approver dashboard</strong>
                        </div>
                        <strong>live</strong>
                      </div>

                      <div className="analytics-review-list">
                        <span className="active">Pending (3)</span>
                        <span>Approved (12)</span>
                        <span>Rejected (1)</span>
                      </div>

                      <div className="review-center-table">
                        <div className="review-center-row active">
                          <div>
                            <strong>Boiler startup checklist</strong>
                            <small>Shift A operator</small>
                          </div>
                          <span>Review</span>
                        </div>
                        <div className="review-center-row">
                          <div>
                            <strong>Cooling line incident</strong>
                            <small>Open logsheet</small>
                          </div>
                          <span>Open</span>
                        </div>
                      </div>

                      <div className="analytics-bars compact-bars">
                        <span className="bar bar-a" />
                        <span className="bar bar-b" />
                        <span className="bar bar-c" />
                        <span className="bar bar-d" />
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
          </div>
        </section>

        <section className="how-shell screen-section" id="how-it-works">
          <div className="section-copy">
            <h2>How workflow creation moves through the plant.</h2>
          </div>

          <div className="workflow-showcase" aria-hidden="true">
            <div className="showcase-head">
              <span className="window-dot" />
              <span className="window-dot" />
              <span className="window-dot" />
            </div>

            <div className="showcase-body">
              <div className="showcase-sidebar">
                <span className="active">Builder</span>
                <span>Packages</span>
                <span>Review</span>
                <span>History</span>
              </div>
              <div className="showcase-main">
                <div className="showcase-shell active-panel">
                  <div className="showcase-toolbar">
                    <span className="showcase-chip active">Builder</span>
                    <span className="showcase-chip">Preview</span>
                    <span className="showcase-chip">Publish</span>
                  </div>

                  <div className="showcase-workspace">
                    <div className="showcase-editor">
                      <div className="showcase-editor-head">
                        <strong>Boiler startup checklist</strong>
                        <span>Draft saved</span>
                      </div>
                      <div className="showcase-editor-field selected">
                        <label>Pressure reading</label>
                        <strong>84 psi</strong>
                      </div>
                      <div className="showcase-editor-field typing">
                        <label>Fuel valve response</label>
                        <strong>Normal</strong>
                      </div>
                      <div className="showcase-editor-field">
                        <label>Operator signature</label>
                        <strong>Captured</strong>
                      </div>
                    </div>

                    <div className="showcase-sidecards">
                      <div className="showcase-mini-card">
                        <small>Assign package</small>
                        <strong>Shift B</strong>
                        <p>Plant A supervisor added as approver.</p>
                      </div>
                      <div className="showcase-mini-card active">
                        <small>Review submission</small>
                        <strong>Pending approver action</strong>
                        <p>Decision note opened for the latest entry.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="showcase-footer-panels">
                  <div className="showcase-panel">
                    <strong>Assign package</strong>
                    <p>Route workflows to shifts and plants through package assignment.</p>
                  </div>
                  <div className="showcase-panel">
                    <strong>Review submission</strong>
                    <p>Approve, reject, and track plant records with clear submission states.</p>
                  </div>
                  <div className="showcase-panel">
                    <strong>History</strong>
                    <p>Store approved records with timestamps, operators, and plant traceability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials-shell screen-section" id="company">
          <div className="section-copy">
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

        <section className="cta-shell" id="contact">
          <div>
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

