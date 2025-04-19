// QRCode.tsx
"use client";

import { useEffect, useState } from "react";

type QRCodeProps = {
  value: string;
  size?: number;
  bgColor?: string;
  fgColor?: string;
  errorCorrectionLevel?: "L" | "M" | "Q" | "H";
  includeMargin?: boolean;
};

function QRCode({
  value,
  size = 200,
  bgColor = "#FFFFFF",
  fgColor = "#000000",
  errorCorrectionLevel = "M",
  includeMargin = true,
}: QRCodeProps) {
  const [qrUrl, setQrUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!value) {
      setError("No value provided for QR code");
      setIsLoading(false);
      return;
    }

    try {
      // Using QR Server API
      const encodedValue = encodeURIComponent(value);
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodedValue}&size=${size}x${size}&bgcolor=${bgColor.replace("#", "")}&color=${fgColor.replace("#", "")}&qzone=${includeMargin ? 1 : 0}&ecc=${errorCorrectionLevel.toLowerCase()}&format=svg`;

      setQrUrl(qrCodeUrl);
      setError(null);
    }
    catch (err) {
      setError("Failed to generate QR code");
      console.error("QR Code generation error:", err);
    }
    finally {
      setIsLoading(false);
    }
  }, [value, size, bgColor, fgColor, errorCorrectionLevel, includeMargin]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full">
        <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <img
        src={qrUrl}
        alt={`QR Code for: ${value}`}
        className="max-w-full h-auto rounded-md shadow-sm"
      />
    </div>
  );
}

export default QRCode;
