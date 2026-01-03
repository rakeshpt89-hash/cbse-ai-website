import Link from "next/link";

export default function Grade10Page() {
  return (
    <main className="min-h-screen px-6 py-12 text-center">
      <h1 className="text-3xl font-bold mb-6">Grade 10</h1>

      <div className="max-w-md mx-auto space-y-4">
        <Link
          href="/courses/CBSE/grade-10/mathematics"
          className="block p-4 bg-white shadow rounded hover:bg-gray-50"
        >
          Mathematics
        </Link>

        <Link
          href="/courses/CBSE/grade-10/science"
          className="block p-4 bg-white shadow rounded hover:bg-gray-50"
        >
          Science
        </Link>
      </div>

      <div className="mt-8">
        <Link href="/courses/CBSE" className="text-blue-600">
          ← Back to Courses
        </Link>
      </div>
    </main>
  );
}
