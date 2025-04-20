"use client";
import Link from "next/link";

import FloatingDots from "@/components/ui/snappy-floating-dots";

export default function NotFound() {
  return (
    <div className="min-h-screen py-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 dark:bg-black bg-white relative overflow-hidden">
      <FloatingDots />

      <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-lg mb-6 text-center">
        Sorry we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
      >
        Return Home
      </Link>
    </div>
  );
}
