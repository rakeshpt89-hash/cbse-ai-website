import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function CBSEPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <PageHeader
        title="CBSE"
        subtitle="Choose your grade"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <Card title="Grade 10" href="/courses/CBSE/grade-10" />
        <Card title="Grade 12" href="/courses/CBSE/grade-12" />
      </div>
    </main>
  );
}
