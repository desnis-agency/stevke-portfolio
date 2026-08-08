import "./globals.css";
import AgentationDev from "./AgentationDev";

export const metadata = {
  title: "Stevan Stojanovic — Web Designer",
  description:
    "Portfolio of Stevan Stojanovic, web designer working with startups across the AI and tech industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <AgentationDev />
      </body>
    </html>
  );
}
