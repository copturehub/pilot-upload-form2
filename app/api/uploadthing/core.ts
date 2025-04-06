// app/api/uploadthing/core.ts
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

type Metadata = {
  pilotName: string;
  projectName: string;
};

export const ourFileRouter = {
  pilotUploader: f(["image", "video", "text", "pdf", "audio"])
    .input<Metadata>() // ✅ Metadata typad
    .onUploadComplete(({ file, metadata }) => {
      console.log("✅ Upload complete!");
      console.log("Filename:", file.name);

      if (metadata) {
        console.log("Pilot:", metadata.pilotName);
        console.log("Project:", metadata.projectName);
      } else {
        console.log("⚠️ No metadata received.");
      }
    }),
} satisfies FileRouter;
