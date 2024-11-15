import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import RootProviders from "@/components/Providers";
import type { Metadata } from "next";

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
      <body style={{ minHeight: "fit-content" }}>
        <RootProviders>
          
          <Navbar />
          {children}
          <Footer />
        
        </RootProviders>
      </body>
    </html>
  );
}
