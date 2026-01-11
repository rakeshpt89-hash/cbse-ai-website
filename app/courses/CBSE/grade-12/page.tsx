import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function Grade12Page() {
  return (
    <main className="min-h-screen px-6 py-12">
      <PageHeader
        title="Grade 12"
        subtitle="Select subject"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <Card
          title="Mathematics"
          href="/courses/CBSE/grade-12/mathematics"
        />
        <Card
          title="Physics"
          href="/courses/CBSE/grade-12/physics"
        />
        <Card
          title="Chemistry"
          href="/courses/CBSE/grade-12/chemistry"
        />
        <Card
          title="Biology"
          href="/courses/CBSE/grade-12/biology"
        />
      </div>
    </main>
  );
}
