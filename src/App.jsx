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
      "Guide operators to the next form with clear status cues.",
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
  ...solutions,
];

function UiIcon({ name }) {
  const icons = {
    builder: (
      <path d="M6 17.5V7.75a1.75 1.75 0 0 1 1.75-1.75h8.5A1.75 1.75 0 0 1 18 7.75v9.75M9 10h6M9 13h4M8 18h8" />
    ),
    bell: (
      <path d="M12 18a2.2 2.2 0 0 0 2-1.3M7.25 15.5h9.5l-1.1-1.45V10a3.65 3.65 0 1 0-7.3 0v4.05L7.25 15.5Z" />
    ),
    send: <path d="m5 12 13-6-3.6 12-3.1-4.15L5 12Zm6.3 1.85L18 6" />,
    chart: <path d="M7 16.5V12m5 4.5V9m5 7.5V6.5M5.5 18h13" />,
    stack: <path d="m12 6 6 3-6 3-6-3 6-3Zm6 6-6 3-6-3m12 3-6 3-6-3" />,
    spark: <path d="m12 5 1.2 3.3L16.5 9l-3.3 1.2L12 13.5l-1.2-3.3L7.5 9l3.3-1.2L12 5Z" />,
    eye: <path d="M4.75 12S7.4 7.75 12 7.75 19.25 12 19.25 12 16.6 16.25 12 16.25 4.75 12 4.75 12Zm7 0a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Z" />,
    clock: <path d="M12 6.25a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5Zm0 2.25V12l2.25 1.4" />,
    users: <path d="M9.25 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5.5-.5a1.75 1.75 0 1 0 0-3.5M5.75 16c.5-1.8 2.1-2.75 3.5-2.75s3 .95 3.5 2.75m1.25 0c.28-1.1 1.16-1.85 2.25-2.1" />,
    check: <path d="m7 12.4 3.05 3.1L17 8.7" />,
    route: <path d="M6.5 8.25h5.75a2 2 0 1 1 0 4H10a2 2 0 1 0 0 4h7.5m-2.5-2.5 2.5 2.5-2.5 2.5" />,
    logout: <path d="M10 7.25V6.5A1.5 1.5 0 0 1 11.5 5h4A1.5 1.5 0 0 1 17 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 10 17.5v-.75M13.5 12H6m0 0 2.5-2.5M6 12l2.5 2.5" />,
    list: <path d="M8 8.25h8M8 12h8M8 15.75h8M5.25 8.25h.01M5.25 12h.01M5.25 15.75h.01" />,
    plus: <path d="M12 7v10M7 12h10" />,
    minus: <path d="M7 12h10" />,
    calendar: <path d="M7.5 6v2M16.5 6v2M6.5 9h11M7.5 12h3m-3 3h5m-6-9h11a1 1 0 0 1 1 1v9.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />,
    history: <path d="M7 8.5V5.75M7 5.75H4.25M7 5.75 9 7.8M7.3 9A5.75 5.75 0 1 1 6.25 12M12 9v3l2 1.25" />,
  };

  return (
    <svg className="ui-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {icons[name]}
    </svg>
  );
}

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
                <div className="solution-card-head">
                  <span className="solution-icon-badge">
                    <UiIcon name={solution.icon || "chart"} />
                  </span>
                  <div className="solution-copy">
                    <h3>{solution.title}</h3>
                  </div>
                </div>
                {solution.points && (
                  <div className="solution-icon-strip" aria-label={`${solution.title} highlights`}>
                    {solution.points.map((point) => (
                      <span className="solution-icon-chip" key={`${solution.title}-${point.label}`} aria-label={point.label} title={point.label}>
                        <UiIcon name={point.icon} />
                      </span>
                    ))}
                  </div>
                )}
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
                        <span aria-label="Create workflow" title="Create workflow">
                          <UiIcon name="plus" />
                        </span>
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
                              <strong>Boiler startup checklist</strong>
                              <em aria-label="Add form" title="Add form">
                                <UiIcon name="plus" />
                              </em>
                            </div>
                            <div className="package-form-row">
                              <label>A002</label>
                              <strong>Cooling line inspection</strong>
                              <em aria-label="Add form" title="Add form">
                                <UiIcon name="plus" />
                              </em>
                            </div>
                            <div className="package-form-row">
                              <label>A001</label>
                              <strong>Shift handover note</strong>
                              <em aria-label="Add form" title="Add form">
                                <UiIcon name="plus" />
                              </em>
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
                                <strong>A003 - Boiler startup</strong>
                                <small>Each shift</small>
                              </div>
                              <em aria-label="Remove form" title="Remove form">
                                <UiIcon name="minus" />
                              </em>
                            </div>
                            <div className="package-sequence-card">
                              <i />
                              <div>
                                <strong>A002 - Cooling line</strong>
                                <small>Each shift</small>
                              </div>
                              <em aria-label="Remove form" title="Remove form">
                                <UiIcon name="minus" />
                              </em>
                            </div>
                          </div>

                          <div className="package-save-bar">
                            <span>New package • 2 items</span>
                            <button type="button">Save</button>
                          </div>
                        </div>
                      </div>

                      <div className="package-saved-strip">
                        <span>Saved packages</span>
                        <div className="package-saved-row">
                          <strong>P0001</strong>
                          <em>Package A</em>
                          <span>Use</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {solution.title === "Shift status" && (
                    <div className="visual-window shift-status-window live-surface">
                      <div className="visual-window-head product-head">
                        <div>
                          <span>Past shifts</span>
                          <strong>Past Shifts Summary</strong>
                        </div>
                        <span className="product-version">supervisor</span>
                      </div>

                      <div className="shift-status-metrics">
                        <div className="shift-metric-card history">
                          <small>History</small>
                          <strong>1</strong>
                          <span>Total shifts</span>
                        </div>
                        <div className="shift-metric-card pending">
                          <small>Awaiting</small>
                          <strong>0</strong>
                          <span>Pending</span>
                        </div>
                        <div className="shift-metric-card approved">
                          <small>Completed</small>
                          <strong>0</strong>
                          <span>Approved</span>
                        </div>
                        <div className="shift-metric-card rejected">
                          <small>Needs fix</small>
                          <strong>0</strong>
                          <span>Rejected</span>
                        </div>
                      </div>

                      <div className="shift-status-toolbar">
                        <div className="shift-filter-group">
                          <span className="active">All</span>
                          <span>Pending</span>
                          <span>Approved</span>
                          <span>Rejected</span>
                        </div>
                        <div className="shift-search-chip">Search shifts or plants</div>
                      </div>

                      <div className="shift-status-table">
                        <div className="shift-table-head">
                          <span>Shift date</span>
                          <span>Shift type</span>
                          <span>Plant</span>
                          <span>Status</span>
                        </div>
                        <div className="shift-table-row">
                          <div>
                            <strong>23/04/2026</strong>
                            <small>22:00 → 06:00</small>
                          </div>
                          <strong>P3</strong>
                          <strong>Main Plant</strong>
                          <em>Pending</em>
                        </div>
                      </div>

                      <div className="shift-status-cursor" />
                    </div>
                  )}
                  {solution.title === "Notifications" && (
                    <div className="visual-window notifications-window live-surface">
                      <div className="notifications-topbar">
                        <div className="notifications-brand">eqnce</div>
                        <div className="notifications-top-actions">
                          <span className="notifications-bell-chip active">Alerts</span>
                          <span className="notifications-user-chip">Supervisor</span>
                        </div>
                      </div>

                      <div className="notifications-overview">
                        <div>
                          <span>Current Shift Overview</span>
                          <strong>Shift 1</strong>
                        </div>
                        <em>70% complete</em>
                      </div>

                      <div className="notifications-popover">
                        <div className="notifications-popover-head">
                          <strong>Notifications</strong>
                          <span>2 new</span>
                        </div>

                        <div className="notifications-list">
                          <div className="notification-item active">
                            <label>Pending review</label>
                            <strong>Boiler startup checklist needs supervisor action.</strong>
                            <em>Open review</em>
                          </div>
                          <div className="notification-item">
                            <label>Escalation</label>
                            <strong>Cooling line incident was reassigned to the shift supervisor.</strong>
                            <em>Open alert</em>
                          </div>
                        </div>

                        <button className="notifications-cta" type="button">Go to Dashboard</button>
                      </div>

                      <div className="notifications-cursor" />
                    </div>
                  )}
                  {solution.title === "Logsheet submission" && (
                    <div className="visual-window submission-window live-surface">
                      <div className="visual-window-head product-head">
                        <div>
                          <span>Current shift</span>
                          <strong>Current Shift Forms</strong>
                        </div>
                        <span className="product-version">2 active</span>
                      </div>

                      <div className="submission-overview">
                        <div className="submission-overview-card">
                          <small>Shift</small>
                          <strong>Shift 1</strong>
                        </div>
                        <div className="submission-overview-card">
                          <small>Plant</small>
                          <strong>Main Plant</strong>
                        </div>
                        <div className="submission-overview-card progress">
                          <small>Completion</small>
                          <strong>75%</strong>
                        </div>
                      </div>

                      <div className="submission-form-list">
                        <div className="submission-form-card active">
                          <div>
                            <label>Open form</label>
                            <strong>Boiler startup checklist</strong>
                            <small>Main Plant • Shift 1</small>
                          </div>
                          <em>Fill now</em>
                        </div>
                        <div className="submission-form-card">
                          <div>
                            <label>Resume draft</label>
                            <strong>Cooling line inspection</strong>
                            <small>Main Plant • Shift 1</small>
                          </div>
                          <em>Resume</em>
                        </div>
                      </div>

                      <div className="submission-action-bar">
                        <span>2 forms assigned in the current shift</span>
                        <button type="button">Submit logsheet</button>
                      </div>

                      <div className="submission-cursor" />
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

          <div className="workflow-showcase workflow-hub" aria-hidden="true">
            <div className="workflow-hub-topbar">
              <div className="workflow-brand-row">
                <img className="workflow-brand-mark" src="/EQNCE 1.svg" alt="" />
              </div>
              <div className="workflow-user-row">
                <span className="workflow-bell"><UiIcon name="bell" /></span>
                <div className="workflow-user-pill">
                  <strong>Plant head</strong>
                  <span>Line 2 live</span>
                </div>
                <div className="workflow-logout-pill">
                  <UiIcon name="logout" />
                  Exit
                </div>
              </div>
            </div>

            <div className="workflow-action-grid">
              <article className="workflow-action-card active">
                <span className="workflow-action-icon"><UiIcon name="list" /></span>
                <div>
                  <strong>Logbook</strong>
                </div>
                <em>Open</em>
              </article>
              <article className="workflow-action-card">
                <span className="workflow-action-icon"><UiIcon name="plus" /></span>
                <div>
                  <strong>Create</strong>
                </div>
                <em>Open</em>
              </article>
              <article className="workflow-action-card">
                <span className="workflow-action-icon"><UiIcon name="calendar" /></span>
                <div>
                  <strong>Shifts</strong>
                </div>
                <em>Open</em>
              </article>
              <article className="workflow-action-card live">
                <span className="workflow-action-icon"><UiIcon name="check" /></span>
                <div>
                  <strong>Reviews</strong>
                </div>
                <em>Live</em>
              </article>
              <article className="workflow-action-card">
                <span className="workflow-action-icon"><UiIcon name="history" /></span>
                <div>
                  <strong>History</strong>
                </div>
                <em>Open</em>
              </article>
            </div>

            <div className="workflow-review-panel">
              <div className="workflow-panel-header">
                <div className="workflow-panel-title">
                  <span>Review center</span>
                  <strong>Live approvals</strong>
                </div>

                <div className="workflow-filter-strip">
                  <span className="workflow-filter active">All</span>
                  <span className="workflow-filter">2 pending</span>
                  <span className="workflow-filter approved">6 done</span>
                  <span className="workflow-filter rejected">1 fix</span>
                </div>
              </div>

              <div className="workflow-review-stats">
                <div className="workflow-review-stat pending">
                  <small>Queue</small>
                  <strong>2</strong>
                  <span>Awaiting</span>
                </div>
                <div className="workflow-review-stat approved">
                  <small>Done</small>
                  <strong>6</strong>
                  <span>This shift</span>
                </div>
                <div className="workflow-review-stat rejected">
                  <small>Fixes</small>
                  <strong>1</strong>
                  <span>Returned</span>
                </div>
              </div>

              <div className="workflow-review-table">
                <div className="workflow-review-head">
                  <span>Form</span>
                  <span>Owner</span>
                  <span>Time</span>
                  <span>State</span>
                  <span>Open</span>
                </div>

                <div className="workflow-review-row active">
                  <strong>Boiler startup</strong>
                  <span>Ritika Sharma</span>
                  <span>11:42</span>
                  <span className="workflow-status-pill pending">Pending</span>
                  <button type="button">Review</button>
                </div>

                <div className="workflow-review-row">
                  <strong>Cooling line</strong>
                  <span>Vikram Rao</span>
                  <span>10:08</span>
                  <span className="workflow-status-pill approved">Approved</span>
                  <button type="button">Open</button>
                </div>
              </div>

              <div className="workflow-demo-cursor workflow-demo-cursor-review" />
            </div>

            <div className="workflow-lower-grid">
              <div className="workflow-current-forms">
                <div className="workflow-panel-header compact">
                  <div className="workflow-panel-title">
                    <span>Current shift</span>
                    <strong>Forms now</strong>
                  </div>
                  <div className="workflow-mini-chip">Shift 1</div>
                </div>

                <div className="workflow-form-list">
                  <article className="workflow-form-card active">
                    <div>
                      <strong>Boiler startup</strong>
                      <p>Main Plant | L2</p>
                    </div>
                    <span>Start</span>
                  </article>
                  <article className="workflow-form-card">
                    <div>
                      <strong>Cooling line</strong>
                      <p>Main Plant | QA</p>
                    </div>
                    <span>Resume</span>
                  </article>
                </div>

                <div className="workflow-demo-cursor workflow-demo-cursor-forms" />
              </div>

              <div className="workflow-history-panel">
                <div className="workflow-panel-header compact">
                  <div className="workflow-panel-title">
                    <span>Past shifts</span>
                    <strong>Recent history</strong>
                  </div>
                  <div className="workflow-history-link">Open</div>
                </div>

                <div className="workflow-history-stats">
                  <div className="workflow-history-stat">
                    <small>Total</small>
                    <strong>12</strong>
                    <span>Shifts</span>
                  </div>
                  <div className="workflow-history-stat pending">
                    <small>Pending</small>
                    <strong>2</strong>
                    <span>Open</span>
                  </div>
                  <div className="workflow-history-stat approved">
                    <small>Done</small>
                    <strong>9</strong>
                    <span>Approved</span>
                  </div>
                </div>

                <div className="workflow-history-list">
                  <div className="workflow-history-row">
                    <strong>23 Apr 2026</strong>
                    <span>Shift B</span>
                    <em>Approved</em>
                  </div>
                  <div className="workflow-history-row live">
                    <strong>22 Apr 2026</strong>
                    <span>Shift A</span>
                    <em>Pending note</em>
                  </div>
                  <div className="workflow-history-row">
                    <strong>21 Apr 2026</strong>
                    <span>Shift C</span>
                    <em>Archived</em>
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

