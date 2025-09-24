'use client'

import { Row, Col, Progress, Button, Spin, Alert } from 'antd'
import { ArrowRightOutlined, TrophyOutlined, TeamOutlined, ProjectOutlined, StarOutlined } from '@ant-design/icons'
import { useSkills, useStats } from '@/hooks/useApiData'

// 图标映射
const iconMap = {
  '成立年份': <TrophyOutlined className="text-2xl" />,
  '团队成员': <TeamOutlined className="text-2xl" />,
  '完成项目': <ProjectOutlined className="text-2xl" />,
  '满意客户': <StarOutlined className="text-2xl" />
}

export default function About() {
  const { skills, loading: skillsLoading, error: skillsError } = useSkills()
  const { stats, loading: statsLoading, error: statsError } = useStats()

  const loading = skillsLoading || statsLoading
  const error = skillsError || statsError

  if (loading) {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Spin size="large" />
            <p className="mt-4 text-gray-600">加载关于我们数据中...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="about" className="py-20 bg-white">
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Row gutter={[64, 32]} align="middle">
          <Col xs={24} lg={12}>
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-50 text-blue-600 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">🌟 关于我们</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                技术创新
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  驱动业务未来
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                我们是一家专注于数字化转型的技术公司，拥有多年的行业经验和专业的技术团队。
                致力于为客户提供最优质的技术解决方案，帮助企业实现业务增长和创新。
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                我们的团队由资深的全栈工程师、架构师和设计师组成，
                精通各种现代技术栈，能够为客户提供从概念到上线的全方位服务。
              </p>

              <div className="space-y-6 mb-8">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <span className="text-xl mr-3">{skill.icon}</span>
                        <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-blue-600 font-semibold">{skill.percent}%</span>
                    </div>
                    <Progress 
                      percent={skill.percent} 
                      strokeColor={skill.color}
                      showInfo={false}
                      className="mb-0 group-hover:shadow-md transition-all duration-300"
                      trailColor="#f3f4f6"
                    />
                  </div>
                ))}
              </div>

              <Button 
                type="primary" 
                size="large" 
                icon={<ArrowRightOutlined />}
                className="h-12 px-8 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                了解更多
              </Button>
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className={`${stat.bg} p-6 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`${stat.color} p-2 rounded-lg`}>
                        {iconMap[stat.label as keyof typeof iconMap] || <TrophyOutlined className="text-2xl" />}
                      </div>
                    </div>
                    
                    <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    
                    <div className="text-sm font-medium text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-bounce animation-delay-2000"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-400/20 rounded-full blur-2xl animate-bounce animation-delay-4000"></div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}