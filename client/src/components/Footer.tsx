"use client";

import { Layout, Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Footer: AntFooter } = Layout;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FacebookOutlined />, href: "#", color: "hover:text-blue-600" },
    { icon: <TwitterOutlined />, href: "#", color: "hover:text-blue-400" },
    { icon: <InstagramOutlined />, href: "#", color: "hover:text-pink-600" },
    { icon: <LinkedinOutlined />, href: "#", color: "hover:text-blue-700" },
    { icon: <GithubOutlined />, href: "#", color: "hover:text-gray-800" },
  ];

  const companyLinks = [
    { label: "关于我们", href: "#about" },
    { label: "服务项目", href: "#services" },
    { label: "团队介绍", href: "#" },
    { label: "成功案例", href: "#" },
    { label: "加入我们", href: "#" },
  ];

  const serviceLinks = [
    { label: "Web开发", href: "#" },
    { label: "移动应用", href: "#" },
    { label: "UI/UX设计", href: "#" },
    { label: "数据分析", href: "#" },
    { label: "云服务", href: "#" },
  ];

  const quickLinks = [
    { label: "隐私政策", href: "#" },
    { label: "服务条款", href: "#" },
    { label: "帮助中心", href: "#" },
    { label: "联系我们", href: "#contact" },
  ];

  return (
    <AntFooter
      className="text-white border-t border-gray-800/50"
      style={{ backgroundColor: "#000" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Row gutter={[48, 32]}>
          {/* Company Info */}
          <Col xs={24} md={12} lg={6}>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg mr-3">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">T</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  TechCorp
                </h3>
              </div>

              <p className="text-gray-400 leading-relaxed">
                专注于为企业提供创新的技术解决方案，
                助力数字化转型，创造卓越价值。
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <MailOutlined className="mr-3 text-blue-400" />
                  <span>info@techcorp.com</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <PhoneOutlined className="mr-3 text-green-400" />
                  <span>+86 400-123-4567</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <EnvironmentOutlined className="mr-3 text-purple-400" />
                  <span>北京市朝阳区科技园区</span>
                </div>
              </div>
            </div>
          </Col>

          {/* Services */}
          <Col xs={24} md={12} lg={6}>
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white border-l-4 border-blue-500 pl-3">
                服务项目
              </h4>
              <div className="space-y-3">
                {serviceLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col xs={24} md={12} lg={6}>
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white border-l-4 border-green-500 pl-3">
                快速链接
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-400 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </Col>

          {/* Company Links */}
          <Col xs={24} md={12} lg={6}>
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white border-l-4 border-purple-500 pl-3">
                公司信息
              </h4>
              <div className="space-y-3">
                {companyLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* Social Links and Copyright */}
        <div className="border-t border-gray-800/50 mt-12 pt-8">
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} md={12}>
              <div className="flex items-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-800 hover:scale-110 transform`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </Col>

            <Col xs={24} md={12}>
              <div className="text-center md:text-right">
                <p className="text-gray-500">
                  © {currentYear} TechCorp. 保留所有权利。
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  京ICP备12345678号-1
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </AntFooter>
  );
}
