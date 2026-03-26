import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "0.1 - 0.4 Psych Review Project",
  description: "Made by Arya, Vikram, Pranet, Charyle, and Ayaan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={``}>
      <Analytics />
      <body>{children}</body>
    </html>
  );
}
