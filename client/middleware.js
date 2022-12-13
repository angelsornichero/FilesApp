import { NextResponse } from 'next/server';
import 'url'

export function middleware(request) {
    
    const session = request.cookies.get('sessionJWT')
    if (session === undefined) return NextResponse.redirect(new URL('/', request.url))
    return NextResponse.next()
}


export const config = { matcher: ['/dashboard'] }