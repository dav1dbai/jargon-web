import React from "react";
const pdfPath = "/termsofservice.pdf#zoom=100";

export default function PrivacyPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <iframe src={pdfPath} className="h-screen w-full" />
    </div>
  );
}
