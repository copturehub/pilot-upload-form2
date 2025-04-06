import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

type Metadata = {
  pilotName: string;
  projectName: string;
};

export const ourFileRouter = {
  pilotUploader: f(["image", "video", "text", "pdf", "audio"])
    .input<Metadata>(() => ({
      pilotName: "placeholder",
      projectName: "placeholder",
    }))
    .onUploadComplete(({ file, metadata }) => {
      console.log("✅ Upload complete!");
      console.log("Filename:", file.name);
      console.log("Pilot:", metadata?.pilotName);
      console.log("Project:", metadata?.projectName);
    }),
} satisfies FileRouter;
