export const metadata = {
  title: "Stevke portfolio",
  description: "Stevke portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
