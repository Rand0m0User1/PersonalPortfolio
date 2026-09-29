"use client";
import React, { useState } from "react";
import Section from "./Section";
import { site, formspreeEndpoint } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error";

const ContactSection = () => {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors focus:border-orange-400";

  return (
    <Section
      id="contact"
      title="Reach Out!"
      subtitle={
        "I'm curious to hear what you might be up to. Feel free to message me about anything using the form below."
      }
    >
      <form
        onSubmit={handleSubmit}
        className="rounded-xl bg-slate-100/70 p-6 space-y-4"
      >
        <input
          type="hidden"
          name="_subject"
          value="New message from aleksanderkurgan.vercel.app"
        />
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <input
            name="name"
            type="text"
            required
            placeholder="Name"
            className={inputClass}
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className={inputClass}
          />
        </div>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Message"
          className={inputClass}
        />

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600 disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Submit"}
          </button>

          {status === "sent" && (
            <p className="text-sm font-medium text-orange-600">
              Thanks! your message is on the way!
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-slate-600">
              Something went wrong. Email me directly at{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-orange-500 underline decoration-orange-300 hover:decoration-orange-500"
              >
                {site.email}
              </a>
              .
            </p>
          )}
        </div>
      </form>
    </Section>
  );
};

export default ContactSection;
