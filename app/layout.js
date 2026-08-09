import "./globals.css";
import Noise from "./Noise";
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
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
        <AgentationDev />
      </body>
    </html>
  );
}
