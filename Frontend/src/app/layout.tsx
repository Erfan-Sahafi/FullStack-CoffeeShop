import type { Metadata } from "next";
import { Clicker_Script, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/modules/Footer/Footer";

const clicker_script = Clicker_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});
const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clicker_script.variable} ${playfair_display.variable} font-sans`}
      >
        {children}

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
