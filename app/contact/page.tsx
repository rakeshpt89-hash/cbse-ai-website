import Link from "next/link";
export const metadata = {
  title: "Contact | Creation Educenter",
  description:
    "Contact Creation Educenter for CBSE Grade 10 and 12 Maths & Science coaching in Kandivali East, Mumbai. Call or WhatsApp for admissions.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">

      <h1 className="text-3xl font-bold text-center mb-6">
        Contact Us
      </h1>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow space-y-4">

        <h2 className="text-xl font-semibold text-center">
          Creation Educenter
        </h2>

        <p className="text-center text-gray-600">
          CBSE Grade 10 & 12 • Math & Science
        </p>

        <div className="text-center">
          <p className="font-medium">📞 Phone</p>
          <a
          href="tel:+919773504892"
          className="text-blue-600 font-medium"
>
          +91 9773504892
          </a>

        </div>

        <div className="text-center">
          <a
            href="https://wa.me/919773504892"
            target="_blank"
            className="inline-block mt-2 px-5 py-2 bg-green-600 text-white rounded-lg"
          >
            💬 WhatsApp Us
          </a>
        </div>

        <div className="text-center text-gray-600">
          <p>📍 Address</p>
          <p>A-002, Gokul Vihar 1, Thakur Complex, Near Terepanth Bhavan, Kandivali East, Mumbai, Maharashtra</p>
          <a
          href="https://www.google.com/maps/search/?api=1&query=Thakur+Complex+Kandivali+East+Mumbai"
          target="_blank"
          className="text-blue-600 underline"
          >
          📍 View on Google Maps
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-8">
        <Link
          href="/"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg"
        >
          🏠 Home
        </Link>

        <Link
          href="/courses"
          className="px-5 py-2 bg-gray-600 text-white rounded-lg"
        >
          ← Courses
        </Link>
      </div>

    </div>
  );
}
