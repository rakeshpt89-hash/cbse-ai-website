import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creation Educenter | CBSE Coaching in Kandivali East",
  description:
    "Creation Educenter provides CBSE Grade 10 & 12 coaching in Maths and Science in Kandivali East, Mumbai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Local Business SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Creation Educenter",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Thakur Complex",
                addressLocality: "Kandivali East",
                addressRegion: "MH",
                postalCode: "400101",
                addressCountry: "IN",
              },
              telephone: "+91-9773504892",
              areaServed: "Mumbai",
              educationalLevel: ["CBSE Grade 10", "CBSE Grade 12"],
              subjectOf: ["Mathematics", "Science", "Chemistry", "Physics", "Biology"],
            }),
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
  
      {/* Navbar */}
      <header className="w-full px-6 py-4 flex justify-between items-center border-b">
      <h1 className="font-bold text-lg">Creation Educenter</h1>

    <nav className="flex gap-6">
      <a href="/" className="text-blue-600 hover:underline">Home</a>
      <a href="/courses" className="text-blue-600 hover:underline">Courses</a>
      <a href="/contact" className="text-blue-600 hover:underline">Contact</a>
    </nav>
  </header>

  {/* Page content */}
  {children}

</body>

    </html>
  );
}
