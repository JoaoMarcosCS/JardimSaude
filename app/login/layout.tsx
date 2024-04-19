import { Metadata } from "next";
import Login from "./page";

export const metadata: Metadata = {
  title: "Jardim Saúde | Login",
};


export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <Login/>
  )
}
