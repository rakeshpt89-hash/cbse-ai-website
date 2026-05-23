import PageHeader from "@/components/PageHeader";
import ChatBot from "@/components/ChatBot";

export default function Grade10MathPage() {
  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      <PageHeader
        title="Grade 10 Mathematics"
        subtitle="Ask questions and get instant help"
      />

      <ChatBot subject="Mathematics" grade="Grade 10" />
    </main>
  );
}
