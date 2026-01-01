import Link from "next/link";
export const metadata = {
  title: "CBSE Grade 12 Coaching | Maths, Physics & Chemistry | Creation Educenter",
  description:
    "CBSE Grade 12 Maths, Physics & Chemistry coaching at Creation Educenter, Mumbai. Board exam focus, competitive exam preparation, and result-oriented teaching.",
};

export default function Grade12Page() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      
      <h1 className="text-3xl font-bold text-center mb-6">
        Grade 12 – CBSE
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow mb-8">
        <ul className="space-y-3 text-gray-700">
          <li>✔ Mathematics</li>
          <li>✔ Chemistry</li>
          <li>✔ Physics</li>
          <li>✔ Biology</li>
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
