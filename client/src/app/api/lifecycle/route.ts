import { NextRequest, NextResponse } from 'next/server'

// 模拟数据库连接（实际项目中应该使用连接池）
let dbConnectionCount = 0

// API路由处理函数
export async function GET(request: NextRequest) {
  try {
    // 记录请求开始时间
    const startTime = Date.now()
    
    // 模拟数据库连接
    dbConnectionCount++
    console.log(`📊 数据库连接数: ${dbConnectionCount}`)
    
    // 模拟业务逻辑处理
    await new Promise(resolve => setTimeout(resolve, 100))
    
    // 计算处理时间
    const processingTime = Date.now() - startTime
    
    // 返回生命周期信息
    return NextResponse.json({
      success: true,
      message: 'API生命周期演示',
      lifecycle: {
        requestMethod: request.method,
        requestUrl: request.url,
        processingTime: `${processingTime}ms`,
        dbConnections: dbConnectionCount,
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV,
        headers: Object.fromEntries(request.headers)
      }
    }, {
      headers: {
        'Cache-Control': 'no-cache',
        'X-API-Version': '1.0.0',
        'X-Processing-Time': processingTime.toString()
      }
    })
    
  } catch {
    console.error('API处理错误')
    
    return NextResponse.json(
      {
        success: false,
        error: '内部服务器错误',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}

// 支持POST请求
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const requestStart = request.headers.get('x-request-start')
    const processingTime = requestStart ? Date.now() - parseInt(requestStart) : 0
    
    return NextResponse.json({
      success: true,
      message: 'POST请求处理成功',
      data: body,
      receivedAt: new Date().toISOString(),
      processedIn: `${processingTime}ms`
    })
    
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: '无效的JSON数据',
        timestamp: new Date().toISOString()
      },
      { status: 400 }
    )
  }
}

// 健康检查端点
export async function HEAD() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'X-Health-Check': 'ok',
      'X-Server-Time': new Date().toISOString()
    }
  })
}