import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-6">Creation Educenter</h1>

      <p className="text-gray-600 mb-8">
        Select your education board
      </p>

      <Link
        href="/courses/CBSE"
        className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg"
      >
        CBSE
      </Link>
    </main>
  );
}
