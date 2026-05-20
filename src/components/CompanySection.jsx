import React from "react";

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

export default function CompanySection() {
  return (
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
  );
}
