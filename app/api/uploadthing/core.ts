// app/api/uploadthing/core.ts
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

type Metadata = {
  pilotName: string;
  projectName: string;
};

export const ourFileRouter = {
  pilotUploader: f(["image", "video", "text", "pdf", "audio"])
    .input<Metadata, unknown>({}) // ✅ Kalla funktionen korrekt
    .onUploadComplete(({ file, metadata }) => {
      console.log("✅ Upload complete!");
      console.log("Filename:", file.name);
      console.log("Pilot:", metadata!.pilotName); // ✅ utropstecken för säkerhets skull
      console.log("Project:", metadata!.projectName);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
