import PageHeader from "@/components/PageHeader";
import ChatBot from "@/components/ChatBot";

export default function Grade10SciencePage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      <PageHeader
        title="Grade 10 Science"
        subtitle="Ask questions and get instant help"
      />

      <ChatBot subject="Science" grade="Grade 10" />
    </main>
  );
}
