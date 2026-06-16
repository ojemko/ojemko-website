"use client";

import { FormEvent, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function QuoteForm() {
  const [state, handleSubmit] = useForm("xdavbvdg");
  const [contactError, setContactError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (!phone && !email) {
      event.preventDefault();
      setContactError("Please enter a phone number or email so we can reply.");
      return;
    }

    setContactError("");
    handleSubmit(event);
  }

  if (state.succeeded) {
    return (
      <div className="quote-success" role="status">
        <h3>Thanks, your quote request was sent.</h3>
        <p>
          Ojemko will follow up as soon as possible. You can also call or text
          613-416-7785.
        </p>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={onSubmit}>
      <input
        type="hidden"
        name="_subject"
        value="New Ojemko window cleaning quote request"
      />
      <label>
        Name
        <input name="name" type="text" placeholder="Your name" required />
        <ValidationError
          className="field-error"
          field="name"
          errors={state.errors}
        />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" placeholder="Your phone" />
      </label>
      <label>
        Email
        <input name="email" type="email" placeholder="Your email" />
        <ValidationError
          className="field-error"
          field="email"
          errors={state.errors}
        />
      </label>
      {contactError ? (
        <p className="form-message error full" role="alert">
          {contactError}
        </p>
      ) : null}
      <label className="full">
        Message
        <textarea
          name="message"
          placeholder="Tell us about the property, window count if you know it, timing, and anything special to know."
          rows={5}
          required
        />
        <ValidationError
          className="field-error"
          field="message"
          errors={state.errors}
        />
      </label>
      <ValidationError className="form-message error full" errors={state.errors} />
      <button className="button primary full" type="submit" disabled={state.submitting}>
        {state.submitting ? "Sending..." : "Send Quote Request"}
      </button>
    </form>
  );
}
