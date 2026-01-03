import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function Grade10Page() {
  return (
    <main className="min-h-screen px-6 py-12">
      <PageHeader
        title="Grade 10"
        subtitle="Select subject"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <Card
          title="Mathematics"
          href="/courses/CBSE/grade-10/mathematics"
        />
        <Card
          title="Science"
          href="/courses/CBSE/grade-10/science"
        />
      </div>
    </main>
  );
}
