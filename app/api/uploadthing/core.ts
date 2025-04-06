// app/api/uploadthing/core.ts

import { createUploadthing, type FileRouter } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  pilotUploader: f(["image", "video", "text", "pdf", "audio"])
    .input({
      pilotName: String,
      projectName: String,
    })
    .onUploadComplete(({ file, metadata }) => {
      // Skriv ut metadata, och vi garanterar att det finns
      console.log("✅ Upload complete!");
      console.log("Filename:", file.name);
      console.log("Pilot:", metadata!.pilotName);      // <- ! krävs här
      console.log("Project:", metadata!.projectName);  // <- och här
    }),
} satisfies FileRouter;
