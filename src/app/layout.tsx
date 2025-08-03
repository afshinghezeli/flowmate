import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-interTight",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} bg-greyscale-900`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
