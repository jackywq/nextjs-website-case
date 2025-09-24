'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

interface PageLoaderProps {
  delay?: number
  showProgress?: boolean
}

export function PageLoader({ delay = 300, showProgress = true }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // 页面初始加载时显示加载器
    setIsLoading(true)
    setProgress(30)

    // 模拟加载进度
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 100)

    // 页面加载完成后隐藏加载器
    const handleLoadComplete = () => {
      setProgress(100)
      setTimeout(() => {
        clearInterval(progressInterval)
        setIsLoading(false)
        setProgress(0)
      }, delay)
    }

    if (document.readyState === 'complete') {
      handleLoadComplete()
    } else {
      window.addEventListener('load', handleLoadComplete)
    }

    return () => {
      clearInterval(progressInterval)
      window.removeEventListener('load', handleLoadComplete)
    }
  }, [delay])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="text-center">
        {/* 加载动画 */}
        <div className="relative">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
          
          {/* 进度条 */}
          {showProgress && (
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
              <div 
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
          
          <p className="text-sm text-gray-600 mt-2">
            加载中... {showProgress && `${Math.round(progress)}%`}
          </p>
        </div>
      </div>
    </div>
  )
}

// 路由过渡组件
export function RouteTransition({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const handleRouteChange = () => {
      setIsTransitioning(true)
      setTimeout(() => setIsTransitioning(false), 500)
    }

    // 这里可以监听Next.js的路由事件
    // 目前先模拟路由变化
    window.addEventListener('popstate', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  return (
    <div className={isTransitioning ? 'opacity-0 transition-opacity duration-300' : 'opacity-100 transition-opacity duration-300'}>
      {children}
    </div>
  )
}