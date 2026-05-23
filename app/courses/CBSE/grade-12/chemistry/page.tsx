import PageHeader from "@/components/PageHeader";
import ChatBot from "@/components/ChatBot";

export default function Grade12ChemistryPage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      <PageHeader
      title="Grade 12 Chemistry"
      subtitle="Ask questions and get instant help"
      />

      <ChatBot subject="Chemistry" grade="Grade 12" />
    </main>
  );
}
