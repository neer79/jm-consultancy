import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export default function HomePage() {
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await recaptchaRef.current.executeAsync();

    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
        message: "Hello!",
        "g-recaptcha-response": token,
      }),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      recaptchaRef.current.reset();
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields here */}
      <ReCAPTCHA sitekey={recaptchaSiteKey} size="invisible" ref={recaptchaRef} />
      <button type="submit">Send Message</button>
    </form>
  );
}
