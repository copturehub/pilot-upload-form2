// app/page.tsx
"use client";

import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";

export default function Home() {
  const [pilotName, setPilotName] = useState("");
  const [projectName, setProjectName] = useState("");

  return (
    <main className="p-8 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Ladda upp bilder</h1>

      <input
        type="text"
        placeholder="Pilotens namn"
        value={pilotName}
        onChange={(e) => setPilotName(e.target.value)}
        className="border p-2 w-full"
      />

      <input
        type="text"
        placeholder="Projektnamn"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        className="border p-2 w-full"
      />

      <UploadButton
        endpoint="pilotUploader"
        onClientUploadComplete={() => {
          alert("✅ Filen är uppladdad!");
        }}
        onUploadError={(error: Error) => {
          alert(`❌ Fel vid uppladdning: ${error.message}`);
        }}
        appearance={{
          button: "bg-black text-white px-4 py-2 rounded mt-4",
        }}
        content={{
          button({ ready }) {
            return ready ? "Välj fil att ladda upp" : "Laddar...";
          },
        }}
        input={{
          pilotName,
          projectName,
        }}
      />
    </main>
  );
}
