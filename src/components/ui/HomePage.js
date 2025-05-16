import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">JM Consultancy</h1>
        <p className="text-lg text-gray-700">
          Your Trusted Partner for Identity & Access Management and Cybersecurity Solutions
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">About Neeraj Kumar Shukla</h2>
            <p>
              IAM Architect & PBAC Specialist with over 16 years of experience in designing, implementing,
              and managing large-scale IAM solutions. Expert in Microsoft Entra ID, PlainID, SailPoint,
              Okta, and ADFS. Passionate about cloud security architecture, SIEM integrations, and regulatory compliance.
              Skilled in CI/CD pipeline development, DevOps integration, and cloud-native federated authentication models.
              Proficient in Azure AD B2B/B2C cross-tenant management, passwordless authentication, and Zero Trust strategies.
            </p>
            <p className="mt-4">
              Certifications include SC-300, SC-900, MS-900, AZ-900, AZ-204, SC-100, and AZ-400.
              Extensive experience with Splunk, AppDynamics, Sentinel, and CyberArk for SIEM and threat analytics.
            </p>
            <a
              href="https://www.linkedin.com/in/neeraj-kumar-shukla-561782124"
              className="inline-block mt-4 text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit LinkedIn Profile
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Identity & Access Management Solutions</li>
              <li>Policy-Based Access Control (PBAC)</li>
              <li>Cloud Security Architecture</li>
              <li>CIAM Solutions with Microsoft Entra and Okta</li>
              <li>SIEM Integrations: Splunk & Sentinel</li>
              <li>Cybersecurity Compliance & Governance</li>
              <li>DevOps & CI/CD Pipeline Automation</li>
              <li>Multi-Cloud IAM Solutions (Azure & AWS)</li>
              <li>Advanced Threat Detection & Incident Response</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>Phone: +91 7385802658</p>
            <p>Email: neerajshukla1897@gmail.com</p>
            <p>Address: Lane no7, Heaven Park, Mohammadwadi, Pune - 411060</p>
            <Button className="mt-4 w-full">Get in Touch</Button>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center mt-10 py-6 border-t">
        <p className="text-gray-600">© 2025 JM Consultancy. All rights reserved.</p>
      </footer>
    </div>
  );
}
