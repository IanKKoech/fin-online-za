// import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next();
//   const supabase = createMiddlewareSupabaseClient({ req, res });
//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   if (session) {
//     return res;
//   }

//   const redirectUrl = req.nextUrl.clone();
//   redirectUrl.pathname = "/auth/signIn";
//   redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
//   return NextResponse.redirect(redirectUrl);
// }

// export const config = {
//   matcher: "/client/:path*",
// };