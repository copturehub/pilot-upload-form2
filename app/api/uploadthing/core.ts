// app/api/uploadthing/core.ts

import { createUploadthing, type FileRouter } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  pilotUploader: f(["image", "video", "application"]) // tillåtna typer
    .input({ pilotName: String, projectName: String }) // typad metadata
    .onUploadComplete(({ file, metadata }) => {
      console.log("✅ Upload complete!");
      console.log("Filename:", file.name);
      console.log("Pilot:", metadata.pilotName);
      console.log("Project:", metadata.projectName);
    }),
} satisfies FileRouter;
