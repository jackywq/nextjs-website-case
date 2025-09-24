'use client'

import { Component, ReactNode, ErrorInfo } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('页面组件错误:', error, errorInfo)
    this.props.onError?.(error, errorInfo)
    
    // 可以在这里集成错误上报服务
    if (typeof window !== 'undefined') {
      // 模拟错误上报
      try {
        // 这里可以集成Sentry、Bugsnag等错误监控服务
        console.log('错误已上报:', {
          message: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          timestamp: new Date().toISOString(),
          url: window.location.href
        })
      } catch (reportError) {
        console.warn('错误上报失败:', reportError)
      }
    }
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">😵</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              页面加载失败
            </h1>
            <p className="text-gray-600 mb-6">
              抱歉，页面加载时出现了问题。请刷新页面重试。
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              刷新页面
            </button>
            {this.state.error && (
              <details className="mt-6 text-left max-w-md mx-auto">
                <summary className="cursor-pointer text-sm text-gray-500">
                  错误详情
                </summary>
                <pre className="bg-gray-100 p-4 rounded mt-2 text-xs overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// 页面级错误边界组件
export function PageErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary
      onError={(error, errorInfo) => {
        // 这里可以集成更详细的错误日志记录
        console.error('页面级错误捕获:', {
          error: error.message,
          componentStack: errorInfo.componentStack
        })
      }}
    >
      {children}
    </ErrorBoundary>
  )
}