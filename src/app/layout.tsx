import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MantineProvider } from "@/components/providers/MantineProvider";
import "./globals.css";
import '@mantine/core/styles.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "个人简历 | SnowballXueQiu",
  description: "基于Next.js和Mantine构建的现代简历网站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-mantine-color-scheme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
