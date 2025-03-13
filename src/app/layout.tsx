import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  weight: ["400", "700", "900"],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Thanh Tuấn - Fullstack Developer",
  description: "Thanh Tuấn - Full-stack developer and community builder from Vietnam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <GoogleTagManager gtmId="GTM-KQ4QFSLN" />
      <body className={inter.className} >
        <main className="w-full bg-gray-50 dark:bg-[#121416] flex justify-center">
          <section className="w-full lg:w-1/2 bg-white dark:bg-[#16191d]">
            <Header />
            {children}
            <Footer />
          </section>
        </main>
      </body>
    </html>
  );
}
