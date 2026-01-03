import Link from "next/link";

interface ButtonProps {
  label: string;
  href: string;
}

export default function PrimaryButton({ label, href }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
    >
      {label}
    </Link>
  );
}
