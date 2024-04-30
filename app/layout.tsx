import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@providers/theme";
import { ReduxProvider } from "@providers/ReduxProvider";
import ReactQueryProvider from "@providers/ReactQueryProvider";
import { Toaster } from "@/components/ui/sonner";
import { CircleAlert } from "lucide-react";

import MainContentProvider from "./providers/mainContentProvider";
import PersistorReduxStore from "./providers/PersistorReduxProvider";
import SideBar from "./layout/sideBar";

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
            <body className={`${inter.className}`}>
              <SideBar />
              <MainContentProvider>
                <Toaster expand={true} closeButton icons={{
                  error: <CircleAlert color="#d10816" size={20} />
                }} />
                <ThemeProvider
                  attribute="class"
                  defaultTheme="light"
                  enableSystem>
                  {children}
                </ThemeProvider>
              </MainContentProvider>
            </body>
          </ReactQueryProvider>
      </ReduxProvider>
    </html>
  );
}
