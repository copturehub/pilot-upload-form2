"use client";

import { UploadDropzone } from "@/utils/uploadthing";
import "@uploadthing/react/styles.css";
import { useState } from "react";

export default function Home() {
  const [pilotName, setPilotName] = useState("");
  const [projectName, setProjectName] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Ladda upp filer</h1>

      <div className="w-full max-w-md mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Pilotens namn
        </label>
        <input
          type="text"
          value={pilotName}
          onChange={(e) => setPilotName(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
          placeholder="t.ex. Gustav Bagge"
        />
      </div>

      <div className="w-full max-w-md mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Projektnamn
        </label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
          placeholder="t.ex. StoraEnso-24-område-B"
        />
      </div>

      <UploadDropzone
        endpoint="pilotUploader"
        onClientUploadComplete={(res) => {
          console.log("✅ Upload complete!", res);
          alert("Uppladdning klar!");
        }}
        onUploadError={(error: Error) => {
          alert(`Fel: ${error.message}`);
        }}
        appearance={{
          button({ ready, isUploading }) {
            return "bg-blue-600 text-white rounded px-4 py-2";
          },
        }}
        config={{
          metadata: {
            pilotName,
            projectName,
          },
        }}
      />
    </main>
  );
}
