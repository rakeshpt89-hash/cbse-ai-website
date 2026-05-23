import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <PageHeader
        title="ASMA Edu Center"
        subtitle="Select an option to continue"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <Card title="Courses" href="/courses" />
        <Card title="Contact" href="/contact" />
      </div>
    </main>
  );
}
