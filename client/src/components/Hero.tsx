'use client'

import { Button, Space } from 'antd'
import { PlayCircleOutlined, ArrowRightOutlined } from '@ant-design/icons'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 md:py-28" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🚀 专业的数字化解决方案提供商</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            创新技术
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              驱动业务增长
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
            我们为企业提供全方位的技术解决方案，从概念到上线，
            助力数字化转型和业务创新
          </p>

          <Space size="large" className="mb-16">
            <Button 
              type="primary" 
              size="large" 
              className="h-14 px-10 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              icon={<ArrowRightOutlined />}
            >
              开始合作
            </Button>
            
            <Button 
              size="large" 
              className="h-14 px-10 text-lg font-semibold rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:-translate-y-1"
              icon={<PlayCircleOutlined />}
            >
              观看介绍
            </Button>
          </Space>

          {/* Stats with improved design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '500+', label: '成功项目', color: 'from-yellow-400 to-orange-400' },
              { number: '100+', label: '合作客户', color: 'from-green-400 to-teal-400' },
              { number: '50+', label: '技术专家', color: 'from-purple-400 to-pink-400' },
              { number: '5+', label: '行业经验', color: 'from-blue-400 to-cyan-400' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full opacity-20 blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-400 rounded-full opacity-20 blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}