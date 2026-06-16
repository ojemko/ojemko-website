import Image from "next/image";

const company = {
  name: "Ojemko",
  phone: "613-416-7785",
  email: "ojemko@gmail.com",
  area: "Rockland, Ontario"
};

const reasons = [
  "Reliable arrival windows",
  "Professional communication",
  "Careful with homes and furniture",
  "Transparent pricing",
  "Local service",
  "Satisfaction focused"
];

const steps = [
  "Request a quote",
  "Schedule service",
  "We clean",
  "Enjoy the result"
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label={`${company.name} home`}>
            <span className="brand-logo" aria-hidden="true">
              <Image
                src="/images/ojemko-logo.png"
                alt=""
                width={42}
                height={42}
                priority
              />
            </span>
            <Image
              className="brand-wordmark"
              src="/images/ojemko-logo-wordmark.png"
              alt={company.name}
              width={210}
              height={60}
              priority
            />
          </a>
          <a className="nav-cta" href="#quote">
            Get a Free Quote
          </a>
        </nav>

        <div className="hero-inner">
          <p className="eyebrow">Premium local window cleaning</p>
          <h1>Crystal-clear windows and careful service you can trust.</h1>
          <p className="hero-copy">
            A calm, professional window cleaning service in Rockland, Ontario,
            built on punctuality, respect, and a polished result.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#quote">
              Get a Free Quote
            </a>
            <a className="button secondary" href={`tel:${company.phone}`}>
              Call or text {company.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section intro-band" aria-label="Company highlights">
        <div className="stat">
          <strong>Window-first</strong>
          <span>Focused on clearer glass</span>
        </div>
        <div className="stat">
          <strong>Local</strong>
          <span>{company.area}</span>
        </div>
        <div className="stat">
          <strong>Straightforward</strong>
          <span>Clear quotes before work begins</span>
        </div>
      </section>

      <section className="section split" id="why">
        <div>
          <p className="eyebrow">Why Choose Us</p>
          <h2>Serious service with a soft touch.</h2>
          <p>
            Window cleaning is detail work. We treat each property with care,
            communicate clearly, and focus on leaving every pane brighter than
            we found it.
          </p>
        </div>
        <div className="reason-grid">
          {reasons.map((reason) => (
            <div className="reason" key={reason}>
              <span aria-hidden="true">✓</span>
              {reason}
            </div>
          ))}
        </div>
      </section>

      <section className="section process" id="process">
        <div className="section-heading">
          <p className="eyebrow">Process</p>
          <h2>Simple from first message to final shine.</h2>
        </div>
        <div className="process-grid">
          {steps.map((step, index) => (
            <article className="process-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section quote-section" id="quote">
        <div className="quote-copy">
          <p className="eyebrow">Free Quote</p>
          <h2>Tell us about your windows.</h2>
          <p>
            Send your contact details and a short note. You can also call or
            text {company.phone} if that is easier.
          </p>
        </div>
        <form
          className="quote-form"
          action="https://formspree.io/f/xdavbvdg"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Ojemko window cleaning quote request"
          />
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Phone
            <input name="phone" type="tel" placeholder="Your phone" />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="Your email" />
          </label>
          <label className="full">
            Message
            <textarea
              name="message"
              placeholder="Tell us about the property, window count if you know it, timing, and anything special to know."
              rows={5}
            />
          </label>
          <button className="button primary full" type="submit">
            Send Quote Request
          </button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <strong>{company.name}</strong>
          <p>Professional window cleaning.</p>
        </div>
        <div>
          <span>Call or text {company.phone}</span>
          <span>{company.email}</span>
          <span>{company.area}</span>
        </div>
      </footer>
    </main>
  );
}
