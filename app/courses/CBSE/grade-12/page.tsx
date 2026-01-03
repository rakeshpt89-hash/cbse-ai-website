import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";
import Card from "@/app/components/Card";

export default function Grade12Page() {
  return (
    <main className="min-h-screen px-6 py-12">
      <PageHeader
        title="Grade 12"
        subtitle="Select subject"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Link href="/courses/CBSE/grade-12/mathematics">
          <Card title="Mathematics" />
        </Link>

        <Link href="/courses/CBSE/grade-12/physics">
          <Card title="Physics" />
        </Link>

        <Link href="/courses/CBSE/grade-12/chemistry">
          <Card title="Chemistry" />
        </Link>

        <Link href="/courses/CBSE/grade-12/biology">
          <Card title="Biology" />
        </Link>
      </div>
    </main>
  );
}
