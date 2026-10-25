import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://charan-theta.vercel.app"),
  title: "Charan C",
  description: "Charan C is a 2nd-year Electronics & Communication Engineering student at VVCE Mysuru, building multidisciplinary systems across hardware, software, AI, and robotics.",
  keywords: [
    "Charan C",
    "VVCE Mysuru",
    "Electronics and Communication Engineering",
    "Hardware Engineer",
    "Embedded Systems",
    "IoT",
    "Robotics",
    "AI",
    "Portfolio",
    "DebrisEye",
    "Smart Disaster Monitoring",
  ],
  authors: [{ name: "Charan C", url: "https://charan-theta.vercel.app" }],
  creator: "Charan C",
  openGraph: {
    title: "Charan C",
    description: "2nd-Year ECE @ VVCE Mysuru • Core Member, IVC. Building systems connecting the physical world with intelligent software.",
    url: "https://charan-theta.vercel.app",
    siteName: "Charan C",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Charan C — ECE Engineer & Systems Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charan C",
    description: "2nd-Year ECE @ VVCE Mysuru • Core Member, IVC. Building systems connecting the physical world with intelligent software.",
    images: ["/og-image.png"],
    creator: "@Charan31106",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
