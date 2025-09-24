import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 这里可以配置需要排除的路径
const excludedPaths = ['/api', '/_next', '/favicon.ico']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // 检查是否在排除列表中
  if (excludedPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  // 添加请求时间戳头
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-request-start', Date.now().toString())

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // 添加响应时间头
  response.headers.set('x-response-time', Date.now().toString())
  
  // 添加安全头
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // 记录请求信息（生产环境可以集成到监控系统）
  if (process.env.NODE_ENV === 'development') {
    console.log('请求信息:', {
      method: request.method,
      url: request.url,
      path: pathname,
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || 'unknown',
      timestamp: new Date().toISOString()
    })
  }

  return response
}

export const config = {
  matcher: [
    /*
     * 匹配所有请求路径，除了：
     * - _next/static (静态文件)
     * - _next/image (图片优化)
     * - favicon.ico (网站图标)
     * - 公开文件
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}