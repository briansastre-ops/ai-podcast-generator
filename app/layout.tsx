import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "./providers/ConvexClerkProvider";




export const metadata: Metadata = {
  title: "IA Podcast Generator",
  description: "Generate your Podcast using AI",
  icons:{
    icon:'/icons/logo.svg' // <---cambiar logo
  }
};


const manrope = Manrope({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        
          <body className={`${manrope.className}`}>
              {children}
          </body>
        
      </html>
    </ConvexClerkProvider>
  );
}

