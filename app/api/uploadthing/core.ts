// app/api/uploadthing/core.ts

import { createUploadthing, type FileRouter } from "uploadthing/server";
import { z } from "zod"; // 👈 Lägg till denna rad

const f = createUploadthing();

export const ourFileRouter = {
  pilotUploader: f(["image", "video", "text", "pdf", "audio"])
    .input(
      z.object({
        pilotName: z.string(),
        projectName: z.string(),
      })
    )
    .onUploadComplete(({ file, metadata }) => {
      console.log("✅ Upload complete!");
      console.log("Filename:", file.name);
      console.log("Pilot:", metadata!.pilotName);
      console.log("Project:", metadata!.projectName);
    }),
} satisfies FileRouter;
