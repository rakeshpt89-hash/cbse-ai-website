import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";
import Card from "@/app/components/Card";

export default function CBSEPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <PageHeader
        title="CBSE Curriculum"
        subtitle="Choose your grade"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <Link href="/courses/CBSE/grade-10">
          <Card title="Grade 10" />
        </Link>

        <Link href="/courses/CBSE/grade-12">
          <Card title="Grade 12" />
        </Link>
      </div>
    </main>
  );
}
