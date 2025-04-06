// app/api/uploadthing/core.ts
import { createUploadthing, type FileRouter } from "uploadthing/server";

const f = createUploadthing();

type Metadata = {
  pilotName: string;
  projectName: string;
};

export const ourFileRouter = {
  pilotUploader: f(["image", "video", "text", "pdf", "audio"])
    .input<Metadata, unknown>() // ✅ KORREKT: två typ-argument
    .onUploadComplete(({ file, metadata }) => {
      console.log("✅ Upload complete!");
      console.log("Filename:", file.name);
      console.log("Pilot:", metadata.pilotName);
      console.log("Project:", metadata.projectName);
    }),
} satisfies FileRouter;
