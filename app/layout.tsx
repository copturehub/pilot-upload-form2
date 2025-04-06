// app/layout.tsx
export const metadata = {
  title: "Pilot Upload Form",
  description: "Ladda upp flygfiler till Copture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
