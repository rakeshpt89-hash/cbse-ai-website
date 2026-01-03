import Link from "next/link";

export default function CBSEPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-center">
      <h1 className="text-3xl font-bold mb-10">CBSE</h1>

      <div className="flex justify-center gap-6">
        <Link
          href="/courses/CBSE/grade-10"
          className="px-6 py-3 bg-blue-600 text-white rounded"
        >
          Grade 10
        </Link>

        <Link
          href="/courses/CBSE/grade-12"
          className="px-6 py-3 bg-green-600 text-white rounded"
        >
          Grade 12
        </Link>
      </div>
    </main>
  );
}
