export const metadata = {
  title: "Courses | CBSE Grade 10 & 12 Coaching | Creation Educenter",
  description:
    "Explore CBSE Grade 10 and 12 Maths & Science courses at Creation Educenter. Structured syllabus coverage, exam-oriented teaching, and competitive exam focus.",
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Our Courses
      </h1>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        
        {/* Grade 10 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">
            Grade 10 – CBSE
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li>✔ Mathematics</li>
            <li>✔ Science (Physics, Chemistry, Biology)</li>
            <li>✔ Concept clarity & exam preparation</li>
          </ul>
        </div>

        {/* Grade 12 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">
            Grade 12 – CBSE
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li>✔ Mathematics</li>
            <li>✔ Physics & Chemistry</li>
            <li>✔ Board exam & competitive focus</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
