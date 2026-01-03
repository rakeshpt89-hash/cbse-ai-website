import Link from "next/link";
import PageHeader from "./components/PageHeader";
import PrimaryButton from "./components/PrimaryButton";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <PageHeader
        title="Creation Educenter"
        subtitle="Select your education board"
      />

      <Link href="/courses/CBSE">
        <PrimaryButton label="CBSE" />
      </Link>
    </main>
  );
}
