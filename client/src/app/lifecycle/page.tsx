'use client'

import { useState, useEffect } from 'react'
import { Button, Card, Space, Typography, List, Alert } from 'antd'
import { 
  ReloadOutlined, 
  BugOutlined, 
  DashboardOutlined,
  ApiOutlined
} from '@ant-design/icons'
import { usePageLifecycle, usePagePerformance } from '@/hooks/usePageLifecycle'

const { Title, Text, Paragraph } = Typography

export default function LifecycleDemo() {
  const [events, setEvents] = useState<string[]>([])
  const [apiResponse, setApiResponse] = useState<Record<string, unknown> | null>(null)
  const [loading, setLoading] = useState(false)

  // 添加生命周期事件到日志
  const addEvent = (message: string) => {
    setEvents(prev => [
      `${new Date().toLocaleTimeString()}: ${message}`,
      ...prev
    ].slice(0, 10)) // 只保留最近10条
  }

  // 使用页面生命周期Hook
  usePageLifecycle({
    onPageLoad: () => addEvent('📄 页面加载完成'),
    onPageUnload: () => addEvent('📄 页面卸载'),
    onRouteChange: (url) => addEvent(`🔄 路由变化: ${url}`),
    onPageShow: () => addEvent('👀 页面可见'),
    onPageHide: () => addEvent('👻 页面隐藏')
  })

  // 页面性能监控
  usePagePerformance()

  // 测试API调用
  const testApiCall = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/lifecycle')
      const data = await response.json()
      setApiResponse(data)
      addEvent('✅ API调用成功')
    } catch (error) {
      addEvent('❌ API调用失败')
      console.error('API调用错误:', error)
    } finally {
      setLoading(false)
    }
  }

  // 模拟错误
  const simulateError = () => {
    addEvent('⚠️ 模拟错误触发')
    throw new Error('这是一个模拟的页面错误！')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Title level={1} className="text-center mb-8">
          🔄 Next.js 生命周期演示
        </Title>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* 生命周期事件面板 */}
          <Card 
            title={
              <span>
                <DashboardOutlined className="mr-2" />
                生命周期事件
              </span>
            }
            className="h-96"
          >
            <div className="h-64 overflow-y-auto bg-gray-100 rounded p-3">
              {events.length === 0 ? (
                <Text type="secondary">等待事件触发...</Text>
              ) : (
                <List
                  size="small"
                  dataSource={events}
                  renderItem={(item) => (
                    <List.Item className="text-sm font-mono">
                      {item}
                    </List.Item>
                  )}
                />
              )}
            </div>
            
            <Space className="mt-4">
              <Button 
                onClick={() => setEvents([])}
                size="small"
              >
                清空日志
              </Button>
              <Button 
                onClick={() => window.location.reload()}
                icon={<ReloadOutlined />}
                size="small"
              >
                刷新页面
              </Button>
            </Space>
          </Card>

          {/* 功能测试面板 */}
          <Card 
            title={
              <span>
                <ApiOutlined className="mr-2" />
                功能测试
              </span>
            }
          >
            <Space direction="vertical" className="w-full">
              <Button 
                onClick={testApiCall}
                loading={loading}
                type="primary"
                block
              >
                测试API调用
              </Button>
              
              <Button 
                onClick={simulateError}
                icon={<BugOutlined />}
                danger
                block
              >
                模拟页面错误
              </Button>

              <Button 
                onClick={() => addEvent('🎯 手动添加事件')}
                block
              >
                手动添加事件
              </Button>
            </Space>

            {apiResponse && (
              <div className="mt-4 p-3 bg-green-50 rounded">
                <Text strong>API响应:</Text>
                <pre className="text-xs mt-2 overflow-auto">
                  {JSON.stringify(apiResponse, null, 2)}
                </pre>
              </div>
            )}
          </Card>
        </div>

        {/* 说明面板 */}
        <Card title="📋 生命周期功能说明">
          <div className="space-y-4">
            <div>
              <Title level={4}>🔄 客户端生命周期</Title>
              <Paragraph>
                使用自定义Hook监听页面加载、卸载、路由变化、页面可见性变化等事件。
              </Paragraph>
            </div>

            <div>
              <Title level={4}>⚡ 性能监控</Title>
              <Paragraph>
                监控页面加载性能指标，包括DNS查询、TCP连接、DOM解析等时间。
              </Paragraph>
            </div>

            <div>
              <Title level={4}>🛡️ 错误边界</Title>
              <Paragraph>
                使用错误边界组件捕获和处理组件渲染错误，提供友好的错误界面。
              </Paragraph>
            </div>

            <div>
              <Title level={4}>🌐 中间件处理</Title>
              <Paragraph>
                通过中间件处理全局请求生命周期，添加安全头、记录请求信息等。
              </Paragraph>
            </div>

            <div>
              <Title level={4}>🔌 API生命周期</Title>
              <Paragraph>
                演示服务器端API路由的生命周期，包括请求处理、错误处理等。
              </Paragraph>
            </div>
          </div>
        </Card>

        <Alert
          message="使用说明"
          description="尝试点击各个测试按钮来触发不同的生命周期事件。打开浏览器控制台可以查看详细的日志输出。"
          type="info"
          className="mt-6"
        />
      </div>
    </div>
  )
}