import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "0.1 – 0.4 Psych Review",
  description: "AP Psychology Research Methods review by Arya, Vikram, Pranet, Charlye, and Ayyan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
