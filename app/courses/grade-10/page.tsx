import Link from "next/link";
export const metadata = {
  title: "CBSE Grade 10 Coaching | Maths & Science | Creation Educenter",
  description:
    "Expert CBSE Grade 10 Maths and Science coaching at Creation Educenter, Kandivali East, Mumbai. Concept clarity, board exam preparation, and strong fundamentals.",
};

export default function Grade10Page() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      
      <h1 className="text-3xl font-bold text-center mb-6">
        Grade 10 – CBSE
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow mb-8">
        <ul className="space-y-3 text-gray-700">
          <li>✔ Mathematics</li>
          <li>✔ Science</li>
          <li>✔ NCERT-based teaching</li>
          <li>✔ Board exam preparation</li>
          <li>✔ Regular tests & doubt clearing</li>
        </ul>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-4">
        <Link
          href="/courses"
          className="px-5 py-2 bg-gray-600 text-white rounded-lg"
        >
          ← Back to Courses
        </Link>

        <Link
          href="/"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg"
        >
          🏠 Home
        </Link>
      </div>

    </div>
  );
}
