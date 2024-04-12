import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@providers/theme";
import { ReduxProvider } from "@providers/ReduxProvider";
import ReactQueryProvider from "@providers/ReactQueryProvider";

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
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem>
              {children}
            </ThemeProvider>
          </body>
        </ReactQueryProvider>
      </ReduxProvider>
    </html>
  );
}
