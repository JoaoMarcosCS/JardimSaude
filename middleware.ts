import { NextRequest, NextResponse } from "next/server"


export default function middleware(request: NextRequest) {

  const token = request.cookies.get("auth_token")?.value;
  const nivel = request.cookies.get("nivel")?.value;

  const loginPath = new URL("/login", request.url);

  if (!token) {

    return NextResponse.redirect(loginPath);
  }

  if(request.nextUrl.pathname === "/tratamentos/novo" && nivel != "1"){
    const tratamentosPath = new URL("/tratamentos", request.url);
    return NextResponse.redirect(tratamentosPath);
  }


  return NextResponse.next();

}

export const config = {
  matcher: ["/","/tratamentos", "/tratamentos/novo"]
}
