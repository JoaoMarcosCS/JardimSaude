import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@providers/theme";
import { ReduxProvider } from "@providers/ReduxProvider";
import ReactQueryProvider from "@providers/ReactQueryProvider";
import { Toaster } from "@/components/ui/sonner";
import { CircleAlert } from "lucide-react";
import MenuFooter from "./(home)/components/menuFooter";
import Header from "./(home)/components/menuHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jardim Saúde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" >
      <ReduxProvider>
        <ReactQueryProvider>
          <body className={inter.className}>
            <Toaster expand={true} closeButton icons={{
              error: <CircleAlert color="#d10816" size={20} />
            }}  />
            <Header/>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem>
              {children}
            </ThemeProvider>
            <MenuFooter/>
          </body>
        </ReactQueryProvider>
      </ReduxProvider>
    </html>
  );
}
