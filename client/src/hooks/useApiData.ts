'use client'

import { useState, useEffect } from 'react'
import { getWebsiteData, ServiceData, SkillData, StatData } from '@/lib/api'

export interface WebsiteData {
  services: ServiceData[]
  skills: SkillData[]
  stats: StatData[]
}

export function useApiData() {
  const [data, setData] = useState<WebsiteData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await getWebsiteData()
        
        if (response.success) {
          // 新的API端点直接返回网站数据
          setData(response.data)
        } else {
          setError(response.message || '获取数据失败')
        }
      } catch (err) {
        console.error('API数据获取错误:', err)
        setError(err instanceof Error ? err.message : '未知错误')
        
        // 如果API调用失败，使用本地静态数据作为降级方案
        setData({
          services: [
            {
              title: 'Web开发',
              description: '专业的响应式网站开发，提供最佳的用户体验和性能优化',
              features: ['React/Next.js', 'TypeScript', '响应式设计'],
              gradient: 'from-blue-500 to-blue-600',
              color: 'blue',
              icon: '🌐'
            },
            {
              title: '移动应用',
              description: '跨平台移动应用开发，支持iOS和Android平台',
              features: ['React Native', 'Flutter', '原生开发'],
              gradient: 'from-green-500 to-green-600',
              color: 'green',
              icon: '📱'
            },
            {
              title: '云服务',
              description: '云端部署和运维服务，确保应用的高可用性和扩展性',
              features: ['AWS/Aliyun', 'Docker', 'Kubernetes'],
              gradient: 'from-purple-500 to-purple-600',
              color: 'purple',
              icon: '☁️'
            },
            {
              title: '数据库设计',
              description: '专业的数据库架构设计和优化，保障数据安全与性能',
              features: ['MySQL', 'MongoDB', 'Redis'],
              gradient: 'from-orange-500 to-orange-600',
              color: 'orange',
              icon: '🗄️'
            },
            {
              title: 'API开发',
              description: 'RESTful API和GraphQL接口开发，支持微服务架构',
              features: ['Node.js', 'Python', 'Go'],
              gradient: 'from-red-500 to-red-600',
              color: 'red',
              icon: '🔌'
            },
            {
              title: '安全审计',
              description: '全面的安全检测和漏洞修复，保护您的业务安全',
              features: ['渗透测试', '代码审计', '安全加固'],
              gradient: 'from-indigo-500 to-indigo-600',
              color: 'indigo',
              icon: '🔒'
            }
          ],
          skills: [
            { name: '前端开发', percent: 95, color: '#1890ff', icon: '🚀' },
            { name: '后端开发', percent: 90, color: '#52c41a', icon: '⚡' },
            { name: '移动开发', percent: 85, color: '#faad14', icon: '📱' },
            { name: '云服务', percent: 88, color: '#722ed1', icon: '☁️' }
          ],
          stats: [
            { number: '2018', label: '成立年份', bg: 'bg-blue-100', color: 'text-blue-600', icon: '📅' },
            { number: '50+', label: '团队成员', bg: 'bg-green-100', color: 'text-green-600', icon: '👥' },
            { number: '500+', label: '完成项目', bg: 'bg-purple-100', color: 'text-purple-600', icon: '✅' },
            { number: '100+', label: '满意客户', bg: 'bg-orange-100', color: 'text-orange-600', icon: '😊' }
          ]
        })
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}

export function useServices() {
  const { data, loading, error } = useApiData()
  return { 
    services: data?.services || [], 
    loading, 
    error 
  }
}

export function useSkills() {
  const { data, loading, error } = useApiData()
  return { 
    skills: data?.skills || [], 
    loading, 
    error 
  }
}

export function useStats() {
  const { data, loading, error } = useApiData()
  return { 
    stats: data?.stats || [], 
    loading, 
    error 
  }
}