'use client';
import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-center space-y-16">
      {/* Hero Section */}
      <header className="py-10">
        <h1 className="text-4xl font-bold mb-4">JM Consultancy</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your Trusted Partner for Identity & Access Management and Cybersecurity Solutions
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get in Touch
        </button>
      </header>

      {/* About Section */}
      <section className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          Highly accomplished IAM Architect and Cybersecurity Specialist with over 16 years of global experience. 
          Specializing in Microsoft Entra (Azure AD), SailPoint IdentityIQ, PlainID, and Okta. 
          Dedicated to delivering enterprise-level IAM solutions, cloud security architecture, 
          and Zero Trust implementations.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
        <ul className="text-gray-700 text-left list-disc list-inside space-y-2">
          <li>Identity & Access Management (IAM)</li>
          <li>Cybersecurity Operations & Consultation</li>
          <li>Cloud Security Architecture</li>
          <li>Policy-Based Access Control (PBAC)</li>
          <li>CI/CD Pipeline & DevOps Automation</li>
          <li>Advanced Threat Detection & Response</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <form
          action="https://formspree.io/f/meogndvp" 
          method="POST" 
          className="space-y-4 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t text-gray-600">
        © 2025 JM Consultancy. All rights reserved.
      </footer>
    </div>
  );
}
