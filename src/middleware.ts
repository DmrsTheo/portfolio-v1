import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  
  const basicAuth = request.headers.get('authorization');

  if (basicAuth) {

    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    const validUser = process.env.ADMIN_USER;
    const validPass = process.env.ADMIN_PASS;

    if (user === validUser && pwd === validPass) {
      return NextResponse.next();
    }
  }

  return new NextResponse('Accès refusé. Zone restreinte.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Monitoring Zone"',
    },
  });
}

// Ce middleware s'applique sur /monitoring
export const config = {
  matcher: ['/monitoring/:path*'],
};