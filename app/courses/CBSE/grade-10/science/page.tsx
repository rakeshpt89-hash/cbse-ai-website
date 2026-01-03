import Link from "next/link";

export default function Grade10SciencePage() {
  return (
    <main className="min-h-screen px-6 py-12 text-center">
      <h1 className="text-3xl font-bold mb-4">
        Grade 10 Science
      </h1>

      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Grade 10 Science is taught as a unified subject.
        This space supports concept understanding, revision,
        and exam preparation.
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
