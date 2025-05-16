"use client";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = await recaptchaRef.current?.executeAsync();
    if (!token) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(formspreeEndpoint!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, "g-recaptcha-response": token }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        recaptchaRef.current?.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">JM Consultancy</h1>
        <p className="text-lg text-gray-700">
          Your Trusted Partner for Identity & Access Management and Cybersecurity Solutions
        </p>
      </header>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">About Neeraj Kumar Shukla</h2>
          <p>
            IAM Architect & PBAC Specialist with over 16 years of experience. Expert in Microsoft Entra ID, PlainID,
            SailPoint, Okta, and ADFS. Passionate about cloud security architecture and Zero Trust strategies.
          </p>
          <p className="mt-4">
            Certifications: SC-300, SC-900, MS-900, AZ-900, AZ-204, SC-100, AZ-400.
          </p>
          <a
            href="https://www.linkedin.com/in/neeraj-kumar-shukla-561782124"
            className="inline-block mt-4 text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
