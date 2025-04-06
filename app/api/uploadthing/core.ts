import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  pilotUploader: f(["image", "video", "text", "pdf", "audio"])
    .input({ pilotName: String, projectName: String })
    .onUploadComplete(({ file, metadata }) => {
      console.log("✅ Upload complete!");
      console.log("Filename:", file.name);
      console.log("Pilot:", metadata?.pilotName);
      console.log("Project:", metadata?.projectName);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
