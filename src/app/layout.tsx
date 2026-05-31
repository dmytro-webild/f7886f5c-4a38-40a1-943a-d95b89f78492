import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Daroj PVC | Premium Doors, Windows & Renovations in Erbil',
  description: 'Daroj PVC offers custom PVC and aluminum doors, windows, and expert installation services for residential and commercial properties in Erbil, Iraq. Request a free quote today!',
  keywords: ["Daroj PVC, Erbil renovation, PVC doors, aluminum windows, construction company Erbil, custom windows, door installation Erbil, renovation contractor, commercial renovations Erbil, residential renovations Erbil, building services Erbil, Kurdistan construction, Erbil building, PVC supplier Erbil, aluminum supplier Erbil"],
  openGraph: {
    "title": "Daroj PVC | Premium Doors, Windows & Renovations in Erbil",
    "description": "Daroj PVC offers custom PVC and aluminum doors, windows, and expert installation services for residential and commercial properties in Erbil, Iraq. Request a free quote today!",
    "url": "https://www.darojpvc.com",
    "siteName": "Daroj PVC",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/front-view-male-boxer-wrapping-his-hands-before-training-ring_23-2148759638.jpg",
        "alt": "Modern PVC window installation"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Daroj PVC | Premium Doors, Windows & Renovations in Erbil",
    "description": "Daroj PVC offers custom PVC and aluminum doors, windows, and expert installation services for residential and commercial properties in Erbil, Iraq. Request a free quote today!",
    "images": [
      "http://img.b2bpic.net/free-photo/front-view-male-boxer-wrapping-his-hands-before-training-ring_23-2148759638.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
