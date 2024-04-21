import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { readPayload, readPayloadJose } from '@/db/utils/jwt'

export async function middleware(request: NextRequest) {
    // console.log('test', request.url);
    
    if (request.nextUrl.pathname.startsWith('/api/ticket')) {
        const tokenCookie = cookies().get('Authorization')
        // console.log(tokenCookie, "<><><><><><><>");
        if (!tokenCookie?.value){
            return NextResponse.json(
                {message: 'Token Invalid'},
                {
                    status: 400
                }
            )
        }
        
        const splitTokenCookie = tokenCookie.value.split(' ')[1]
        // console.log(splitTokenCookie);
        
        const decodeToken = await readPayloadJose<{
            _id: string;
            email: string
        }>(splitTokenCookie)

        // console.log(decodeToken)
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set('x-user-id', decodeToken._id);
    
        const response = NextResponse.next({
            request: {
                headers: requestHeaders,
            }
        })
        return response
    }

    if (request.nextUrl.pathname.startsWith("/login")) {
        // console.log("masoookkk");
    
        const auth = cookies().get("Authorization")?.value;
        if (auth) {
          request.nextUrl.pathname = "/"
          return NextResponse.redirect(request.nextUrl)
        }
    
      }
    
      if (request.nextUrl.pathname.startsWith("/register")) {
        // console.log("masoookkk");
    
        const auth = cookies().get("Authorization")?.value;
        if (auth) {
          request.nextUrl.pathname = "/"
          return NextResponse.redirect(request.nextUrl)
        }
      }
}

export const config = {
    matcher: ["/api/ticket/:path*", "/login/:path*", "/register/:path"],
  };
  