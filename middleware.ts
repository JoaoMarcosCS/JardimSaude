import { NextRequest, NextResponse } from "next/server"


export default function middleware(request: NextRequest) {

  const token = request.cookies.get("auth_token")?.value;

  const loginPath = new URL("/login", request.url);

  if (!token) {

    return NextResponse.redirect(loginPath);
  }

  return NextResponse.next();

}

export const config = {
  matcher: ["/","/tratamentos", "/tratamentos/novo"]
}
