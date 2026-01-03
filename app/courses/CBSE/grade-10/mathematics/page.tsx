import Link from "next/link";

export default function Grade10MathematicsPage() {
  return (
    <main className="min-h-screen px-6 py-12 text-center">
      <h1 className="text-3xl font-bold mb-4">
        Grade 10 Mathematics
      </h1>

      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        A focused learning space for Grade 10 Mathematics,
        designed to help students practice, revise, and prepare
        effectively for examinations.
      </p>

      <div className="max-w-lg mx-auto bg-white shadow rounded-lg p-6">
        <p className="text-gray-700 mb-2">
          🔬 Learning assistance will be available here.
        </p>
        </div>

      <div className="mt-8">
        <Link href="/courses/CBSE/grade-10" className="text-blue-600">
          ← Back to Grade 10
        </Link>
      </div>
    </main>
  );
}
