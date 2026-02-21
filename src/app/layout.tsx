import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Providers from '../lib/Providers';


export const metadata: Metadata = {
  title: {
    default: "Zavisoft",
    template: "%s | Event Websites",
  },
  description:
    "A frontend implementation task by Zavisoft. Discover event venues, services, and organizers including weddings, conferences, and parties. Built using Next.js, Tailwind CSS, and Platzi Fake Store API.",
  keywords: [
    "Event websites",
    "Zavisoft frontend task",
    "Next.js frontend task",
    "React UI task",
    "Figma to React",
    "Tailwind CSS",
    "Platzi Fake Store API",
    "Product listing",
    "Product details",
    "Manik Hossain",
    "manikdev"
  ],
  authors: [{ name: "Manik Hossain" }],
  creator: "Manik Hossain",
  metadataBase: new URL("https://manikdev.vercel.app/"),
  openGraph: {
    title: "Event Websites | Zavisoft Frontend Task",
    description:
      "Frontend task implementation using Next.js and Tailwind CSS based on Figma design with API integration.",
    siteName: "Event Websites",
    locale: "en_US",
    type: "website",
  },

 

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-[#E7E7E3]`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
