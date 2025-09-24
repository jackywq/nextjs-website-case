'use client'

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { usePageLifecycle, usePagePerformance, usePageMetadata } from "@/hooks/usePageLifecycle";

export default function Home() {
  // 使用页面生命周期Hook
  usePageLifecycle({
    onPageLoad: () => {
      console.log('🏠 首页加载完成')
      // 可以在这里添加页面加载统计
    },
    onPageUnload: () => {
      console.log('🏠 首页卸载')
    },
    onRouteChange: (url) => {
      console.log('🔄 路由变化:', url)
    },
    onPageShow: () => {
      console.log('👀 页面可见')
    },
    onPageHide: () => {
      console.log('👻 页面隐藏')
    }
  })

  // 页面性能监控
  usePagePerformance()

  // 页面元数据设置
  usePageMetadata(
    'TechCorp - 专业的数字化解决方案提供商',
    '我们为企业提供全方位的技术解决方案，从概念到上线，助力数字化转型和业务创新'
  )

  return (
    <main className="min-h-screen">
      <PageLoader />
      <Header />
      <div>
        {/* Padding for fixed header */}
        <Hero />
        <Services />
        <About />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
