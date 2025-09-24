'use client'

import { Card, Row, Col } from 'antd'
import { 
  CodeOutlined, 
  MobileOutlined, 
  CloudOutlined, 
  DatabaseOutlined,
  ApiOutlined,
  SecurityScanOutlined
} from '@ant-design/icons'

const services = [
  {
    title: 'Web开发',
    description: '专业的响应式网站开发，提供最佳的用户体验和性能优化',
    icon: <CodeOutlined className="text-4xl" />,
    features: ['React/Next.js', 'TypeScript', '响应式设计'],
    gradient: 'from-blue-500 to-blue-600',
    color: 'blue'
  },
  {
    title: '移动应用',
    description: '跨平台移动应用开发，支持iOS和Android平台',
    icon: <MobileOutlined className="text-4xl" />,
    features: ['React Native', 'Flutter', '原生开发'],
    gradient: 'from-green-500 to-green-600',
    color: 'green'
  },
  {
    title: '云服务',
    description: '云端部署和运维服务，确保应用的高可用性和扩展性',
    icon: <CloudOutlined className="text-4xl" />,
    features: ['AWS/Aliyun', 'Docker', 'Kubernetes'],
    gradient: 'from-purple-500 to-purple-600',
    color: 'purple'
  },
  {
    title: '数据库设计',
    description: '专业的数据库架构设计和优化，保障数据安全与性能',
    icon: <DatabaseOutlined className="text-4xl" />,
    features: ['MySQL', 'MongoDB', 'Redis'],
    gradient: 'from-orange-500 to-orange-600',
    color: 'orange'
  },
  {
    title: 'API开发',
    description: 'RESTful API和GraphQL接口开发，支持微服务架构',
    icon: <ApiOutlined className="text-4xl" />,
    features: ['Node.js', 'Python', 'Go'],
    gradient: 'from-red-500 to-red-600',
    color: 'red'
  },
  {
    title: '安全审计',
    description: '全面的安全检测和漏洞修复，保护您的业务安全',
    icon: <SecurityScanOutlined className="text-4xl" />,
    features: ['渗透测试', '代码审计', '安全加固'],
    gradient: 'from-indigo-500 to-indigo-600',
    color: 'indigo'
  }
]

export default function Services() {
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
                    {service.icon}
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