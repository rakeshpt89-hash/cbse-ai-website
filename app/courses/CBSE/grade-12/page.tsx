import Link from "next/link";

export default function Grade12Page() {
  return (
    <main className="min-h-screen px-6 py-12 text-center">
      <h1 className="text-3xl font-bold mb-6">Grade 12</h1>

      <div className="max-w-md mx-auto space-y-4">
        <Link
          href="/courses/CBSE/grade-12/mathematics"
          className="block p-4 bg-white shadow rounded hover:bg-gray-50"
        >
          Mathematics
        </Link>

        <Link
          href="/courses/CBSE/grade-12/physics"
          className="block p-4 bg-white shadow rounded hover:bg-gray-50"
        >
          Physics
        </Link>

        <Link
          href="/courses/CBSE/grade-12/chemistry"
          className="block p-4 bg-white shadow rounded hover:bg-gray-50"
        >
          Chemistry
        </Link>

        <Link
          href="/courses/CBSE/grade-12/biology"
          className="block p-4 bg-white shadow rounded hover:bg-gray-50"
        >
          Biology
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
