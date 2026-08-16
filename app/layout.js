import localFont from "next/font/local";
import "./globals.css";
import Noise from "./Noise";
import AgentationDev from "./AgentationDev";

const sfPro = localFont({
  src: [
    { path: "./fonts/SFProDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/SFProDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/SFProDisplay-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/SFProDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sf",
  display: "swap",
});

export const metadata = {
  title: "Stevan Stojanovic — Web Designer",
  description:
    "Portfolio of Stevan Stojanovic, web designer working with startups across the AI and tech industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sfPro.variable}>
      <body>
        {children}
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={12.75}
        />
        <AgentationDev />
      </body>
    </html>
  );
}
