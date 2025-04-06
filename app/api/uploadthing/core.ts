import { createUploadthing, type FileRouter } from "uploadthing/server";

const f = createUploadthing();

type Metadata = {
  pilotName: string;
  projectName: string;
};

export const ourFileRouter = {
  pilotUploader: f(["image", "video", "text", "pdf", "audio"])
    .input<Metadata, undefined>() // 👈 Typad metadata
    .onUploadComplete(({ file, metadata }) => {
      console.log("✅ Upload complete!");
      console.log("Filename:", file.name);
      console.log("Pilot:", metadata!.pilotName);     // 👈 metadata!
      console.log("Project:", metadata!.projectName); // 👈 metadata!
    }),
} satisfies FileRouter;
