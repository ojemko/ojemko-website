"use client";

import { FormEvent, useRef, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const formEndpoint = "https://formspree.io/f/xdavbvdg";

export default function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (!phone && !email) {
      setStatus("error");
      setMessage("Please enter a phone number or email so we can reply.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const formspreeError =
          data?.errors?.[0]?.message ||
          "The form could not be sent. Please call or text 613-416-7785.";

        setStatus("error");
        setMessage(formspreeError);
        return;
      }

      formRef.current?.reset();
      setStatus("success");
      setMessage(
        "Thanks, your quote request was sent. Ojemko will follow up as soon as possible."
      );
    } catch {
      setStatus("error");
      setMessage(
        "The form could not connect. Please call or text 613-416-7785."
      );
    }
  }

  return (
    <form
      ref={formRef}
      className="quote-form"
      action={formEndpoint}
      method="POST"
      onSubmit={onSubmit}
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
          placeholder="Let us know anything relevant for your quote."
          rows={5}
          required
        />
      </label>
      {message ? (
        <p
          className={`form-message ${status === "success" ? "success" : "error"} full`}
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
      <button
        className="button primary full"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Quote Request"}
      </button>
    </form>
  );
}
