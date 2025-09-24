import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import StoreProvider from "@/lib/StoreProvider"
import { ConfigProvider } from "antd"
import zhCN from "antd/locale/zh_CN"
import { PageErrorBoundary } from "@/components/ErrorBoundary"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "公司官网 - 专业的数字化解决方案",
  description: "我们致力于为客户提供最优质的软件开发服务，帮助企业实现数字化转型和业务增长",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ConfigProvider locale={zhCN}>
          <StoreProvider>
            <PageErrorBoundary>
              {children}
            </PageErrorBoundary>
          </StoreProvider>
        </ConfigProvider>
      </body>
    </html>
  )
}
