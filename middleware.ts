import { updateSession } from './lib/supabase/middleware'
import { createClient } from './lib/supabase/server'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { data: { user } } = await createClient().auth.getUser()

  if (!user && request.nextUrl.pathname.startsWith('/dashboard')) {
    return Response.redirect(new URL('/login', request.url))
  }

  if (user && request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/dashboard', request.url))
  }

  return await updateSession(request)
}

export const config = {
  matcher: [
  
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
