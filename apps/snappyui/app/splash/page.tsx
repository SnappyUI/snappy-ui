"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import SplashScreen from "@/components/ui/snappy-splash-screen";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading
        ? (
            <SplashScreen logo={<img src="/logo.png" alt="Logo" className="w-[550px] h-24" />} variant="default" />
          )
        : (
            <main className="min-h-screen flex items-center justify-center relative">
              <div>
                <Link href="/docs/components/snappysplashscreen" className="absolute top-4 right-4 text-white px-5 bg-red-600 rounded-2xl">
                  Go Back to Docs
                </Link>
                <div className="text-center">
                  Main Content
                </div>
              </div>
            </main>
          )}
    </>
  );
}
