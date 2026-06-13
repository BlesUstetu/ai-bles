import "./globals.css";

export const metadata = {
  title: "AI Content Studio",
  description: "AI Video Generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
