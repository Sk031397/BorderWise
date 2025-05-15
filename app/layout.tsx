import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/providers";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";


export const metadata: Metadata = {
  title: "BorderWise",
  description: "AI-powered travel advisory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Header/>
          {children}
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
