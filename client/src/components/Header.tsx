"use client";

import { useState } from "react";
import { Layout, Button, Dropdown } from "antd";
import {
  MenuOutlined,
  CloseOutlined,
  GlobalOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { setTheme } from "@/lib/slices/appSlice";

const { Header: AntHeader } = Layout;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.app);

  const menuItems = [
    { key: "home", label: "首页", href: "#home" },
    { key: "services", label: "服务项目", href: "#services" },
    { key: "about", label: "关于我们", href: "#about" },
    { key: "contact", label: "联系我们", href: "#contact" },
    { key: "portfolio", label: "作品展示", href: "#" },
  ];

  const toggleTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };

  return (
    <AntHeader className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">T</span>
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TechCorp
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              type="text"
              icon={theme === "light" ? <MoonOutlined /> : <SunOutlined />}
              onClick={toggleTheme}
              className="text-gray-600 hover:text-blue-600 border-0 hover:bg-gray-100/50 rounded-lg transition-all duration-300"
            />

            {/* Get Started Button */}
            <Button
              type="primary"
              size="middle"
              className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 rounded-lg font-semibold"
            >
              开始合作
            </Button>

            {/* Mobile Menu Button */}
            <Button
              type="text"
              icon={mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-blue-600 border-0"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200/50 pt-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 rounded-lg transition-colors duration-300 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-4 border-t border-gray-200/50 mt-4">
                <div className="flex items-center space-x-3 px-4">
                  <Button
                    type="text"
                    icon={
                      theme === "light" ? <MoonOutlined /> : <SunOutlined />
                    }
                    onClick={toggleTheme}
                    className="text-gray-600 hover:text-blue-600 border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AntHeader>
  );
}
