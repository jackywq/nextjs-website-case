'use client'

import { Card, Row, Col, Spin, Alert } from 'antd'
import { 
  CodeOutlined, 
  MobileOutlined, 
  CloudOutlined, 
  DatabaseOutlined,
  ApiOutlined,
  SecurityScanOutlined
} from '@ant-design/icons'
import { useServices } from '@/hooks/useApiData'

// 图标映射
const iconMap = {
  'Web开发': <CodeOutlined className="text-4xl" />,
  '移动应用': <MobileOutlined className="text-4xl" />,
  '云服务': <CloudOutlined className="text-4xl" />,
  '数据库设计': <DatabaseOutlined className="text-4xl" />,
  'API开发': <ApiOutlined className="text-4xl" />,
  '安全审计': <SecurityScanOutlined className="text-4xl" />
}

export default function Services() {
  const { services, loading, error } = useServices()

  if (loading) {
    return (
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Spin size="large" />
            <p className="mt-4 text-gray-600">加载服务数据中...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert
            message="数据加载失败"
            description={error}
            type="warning"
            showIcon
          />
        </div>
      </section>
    )
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">💼 我们的服务</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            全方位技术解决方案
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            从概念到上线，我们提供一站式的数字化服务，助力企业实现业务创新
          </p>
        </div>

        <Row gutter={[32, 32]}>
          {services.map((service, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card 
                className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
                styles={{
                  body: { 
                    padding: '40px 32px',
                    textAlign: 'center' as const
                  }
                }}
              >
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {iconMap[service.title as keyof typeof iconMap] || <CodeOutlined className="text-4xl" />}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className={`text-sm bg-${service.color}-50 text-${service.color}-600 px-4 py-2 rounded-full inline-block mx-1 group-hover:bg-${service.color}-100 group-hover:text-${service.color}-700 transition-colors duration-300`}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            查看所有服务 →
          </button>
        </div>
      </div>
    </section>
  )
}