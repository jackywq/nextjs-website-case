// 路由事件触发器
export function triggerRouteChangeStart() {
  const event = new CustomEvent('routeChangeStart')
  window.dispatchEvent(event)
}

export function triggerRouteChangeComplete() {
  const event = new CustomEvent('routeChangeComplete')
  window.dispatchEvent(event)
}

// Next.js路由事件模拟
export function simulateNextJSRouteEvents() {
  // 监听Next.js的路由事件并转发到我们的自定义事件
  if (typeof window !== 'undefined') {
    // 这里可以添加对Next.js原生路由事件的监听
    // 目前先提供一个手动触发的方法
    console.log('路由事件模拟器已初始化')
  }
}