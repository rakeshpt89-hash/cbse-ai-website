import Link from "next/link";
export const metadata = {
  title: "Creation Educenter | CBSE Grade 10 & 12 Maths & Science Coaching",
  description:
    "Creation Educenter provides expert CBSE Grade 10 & 12 Maths and Science coaching in Kandivali East, Mumbai. Concept clarity, exam preparation & results-focused teaching.",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">
        Creation Educenter
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        Grade 10 & 12 • Math & Science • CBSE Curriculum
      </p>

      <div className="flex gap-4">
        <Link href="/courses/grade-10" className="px-6 py-3 bg-blue-600 text-white rounded-lg">
        Grade 10
        </Link>

        <Link href="/courses/grade-12" className="px-6 py-3 bg-green-600 text-white rounded-lg">
        Grade 12
        </Link>

      </div>
    </main>
  );
}
