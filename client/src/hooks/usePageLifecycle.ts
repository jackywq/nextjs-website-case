'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export interface PageLifecycleCallbacks {
  onPageLoad?: () => void
  onPageUnload?: () => void
  onRouteChange?: (url: string) => void
  onPageShow?: () => void
  onPageHide?: () => void
}

export function usePageLifecycle(callbacks: PageLifecycleCallbacks) {
  const pathname = usePathname()
  const callbacksRef = useRef(callbacks)
  
  // 更新回调引用
  useEffect(() => {
    callbacksRef.current = callbacks
  }, [callbacks])

  // 页面加载生命周期
  useEffect(() => {
    const { onPageLoad, onPageShow } = callbacksRef.current
    
    // 页面加载完成
    onPageLoad?.()
    
    // 监听页面可见性变化
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        onPageShow?.()
      }
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  // 路由变化监听
  useEffect(() => {
    const { onRouteChange } = callbacksRef.current
    const url = `${pathname}${window.location.search}`
    onRouteChange?.(url)
  }, [pathname])

  // 页面卸载生命周期
  useEffect(() => {
    return () => {
      const { onPageUnload, onPageHide } = callbacksRef.current
      onPageUnload?.()
      
      // 如果页面隐藏时也触发卸载回调
      if (document.visibilityState === 'hidden') {
        onPageHide?.()
      }
    }
  }, [])
}

// 页面性能监控Hook
export function usePagePerformance() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // 记录页面加载性能
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      if (navigation) {
        console.log('页面性能指标:', {
          DNS查询时间: navigation.domainLookupEnd - navigation.domainLookupStart,
          TCP连接时间: navigation.connectEnd - navigation.connectStart,
          请求响应时间: navigation.responseEnd - navigation.requestStart,
          DOM解析时间: navigation.domComplete - navigation.domInteractive,
          页面完全加载时间: navigation.loadEventEnd - navigation.fetchStart
        })
      }
    }
  }, [])
}

// SEO和页面元数据Hook
export function usePageMetadata(title?: string, description?: string) {
  useEffect(() => {
    if (title && typeof document !== 'undefined') {
      document.title = title
    }
    
    if (description && typeof document !== 'undefined') {
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', description)
      }
    }
    
    // 恢复原始标题和描述
    return () => {
      if (typeof document !== 'undefined') {
        const originalTitle = document.querySelector('title')?.getAttribute('data-original')
        if (originalTitle) {
          document.title = originalTitle
        }
      }
    }
  }, [title, description])
}