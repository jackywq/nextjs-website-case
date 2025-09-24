import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // 启用更快的热更新
    optimisticClientCache: true,
    // 优化编译性能
    staleTimes: {
      dynamic: 0, // 动态页面立即更新
      static: 60, // 静态页面60秒缓存
    },
  },
  // 开发服务器配置
  devIndicators: {
    buildActivity: true, // 显示构建活动指示器
    buildActivityPosition: "bottom-right", // 构建指示器位置
  },
  // 启用详细的构建日志
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // 自定义Webpack热更新配置
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // 调整文件监听频率（解决某些系统检测不到文件变化的问题）
      config.watchOptions = {
        poll: 800, // 每800ms检查一次文件变化
        aggregateTimeout: 300, // 等待300ms再更新，避免频繁触发
        ignored: /node_modules/, // 忽略node_modules目录
      };
    }
    return config;
  },
};

export default nextConfig;
