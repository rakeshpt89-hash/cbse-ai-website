import Link from "next/link";

interface CardProps {
  title: string;
  href: string;
}

export default function Card({ title, href }: CardProps) {
  return (
    <Link href={href}>
      <div className="cursor-pointer rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:shadow-md hover:scale-105">
        <h2 className="text-xl font-semibold text-gray-800">
          {title}
        </h2>
      </div>
    </Link>
  );
}
