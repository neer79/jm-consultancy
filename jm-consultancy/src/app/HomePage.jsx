export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to JM Consultancy</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Your Trusted Partner for Identity & Access Management and Cybersecurity Solutions.
      </p>
      <a
        href="/contact"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Contact Us
      </a>
    </div>
  );
}
