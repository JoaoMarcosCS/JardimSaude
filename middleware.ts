import { NextRequest, NextResponse } from "next/server"


export default function middleware(request: NextRequest) {

  const token = request.cookies.get("auth_token")?.value;
  const nivel = request.cookies.get("nivel")?.value;

  const loginPath = new URL("/login", request.url);
  const homePath = new URL("/", request.url);

  if (!token) {

    return NextResponse.redirect(loginPath);
  }

  if (request.nextUrl.pathname === "/tratamentos/novo" && nivel != "1") {
    const homePath = new URL("/", request.url);
    return NextResponse.redirect(homePath);
  }

  if (request.nextUrl.pathname === "/funcionarios/novo" && nivel != "1") {
    const homePath = new URL("/", request.url);
    return NextResponse.redirect(homePath);
  }

  if (request.nextUrl.pathname === "/pacientes/novo" && nivel != "1") {
    const homePath = new URL("/", request.url);
    return NextResponse.redirect(homePath);
  }

  if (request.nextUrl.pathname === "/funcionarios" && nivel != "1") {
    const homePath = new URL("/", request.url);
    return NextResponse.redirect(homePath);
  }

  if (request.nextUrl.pathname === "/shopping" && nivel != "1") {
    const homePath = new URL("/", request.url);
    return NextResponse.redirect(homePath);
  }

  if (request.nextUrl.pathname === "/estoque" && nivel != "1") {
    const homePath = new URL("/", request.url);
    return NextResponse.redirect(homePath);
  }

  return NextResponse.next();

}

export const config = {
  matcher: [
    "/",
    "/tratamentos",
    "/tratamentos/novo",
    "/shopping",
    "/estoque",
    "/contato",
    "/funcionarios",
    "/funcionarios/novo",
    "/pacientes",
    "/pacientes/novo",
    "/perfil"
  ]
}
