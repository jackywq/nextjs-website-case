// API客户端工具
import React from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp: string;
  count?: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
}

export interface Settings {
  siteName: string;
  theme: string;
  language: string;
  features: string[];
}

export interface ServiceData {
  title: string;
  description: string;
  icon?: React.ReactNode;
  features: string[];
  gradient: string;
  color: string;
}

export interface SkillData {
  name: string;
  percent: number;
  color: string;
  icon: string;
}

export interface StatData {
  number: string;
  label: string;
  icon?: React.ReactNode;
  bg: string;
  color: string;
}

// 统一的API请求函数
async function apiRequest<T>(endpoint: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API请求失败:", error);
    throw error;
  }
}

// 获取所有数据
export async function getAllData() {
  return apiRequest<any>("/api/data");
}

// 获取用户列表
export async function getUsers() {
  return apiRequest<User[]>("/api/users");
}

// 获取产品列表
export async function getProducts() {
  return apiRequest<Product[]>("/api/products");
}

// 获取文章列表
export async function getArticles() {
  return apiRequest<Article[]>("/api/articles");
}

// 获取设置信息
export async function getSettings() {
  return apiRequest<Settings>("/api/settings");
}

// 获取健康状态
export async function getHealth() {
  return apiRequest<any>("/api/health");
}

// 获取服务信息
export async function getServerInfo() {
  return apiRequest<any>("/api/info");
}

// 获取网站数据（专用端点）
export async function getWebsiteData() {
  return apiRequest<any>("/api/website-data");
}
