import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function CoursesPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <PageHeader
        title="Courses"
        subtitle="Select your education board"
      />

      <div className="max-w-xl mx-auto">
        <Card title="CBSE" href="/courses/CBSE" />
      </div>
    </main>
  );
}
