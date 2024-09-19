import type { Metadata } from "next";

import "./globals.css";
import ConvexClerkProvider from "./providers/ConvexClerkProvider";



export const metadata: Metadata = {
  title: "IA Podcast Generator",
  description: "Generate your Podcast using AI",
  icons:{
    icon:'/icons/logo.svg' // <---cambiar logo
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        
          
              {children}
          
        
      </html>
    </ConvexClerkProvider>
  );
}

