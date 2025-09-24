"use client";

import { useState } from "react";
import { Form, Input, Button, Row, Col, message, Spin, Alert } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  SendOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { useContactInfo, useOfficeHours } from "@/hooks/useApiData";

const { TextArea } = Input;

// 图标映射
const iconMap = {
  '邮箱': <MailOutlined className="text-xl" />,
  '电话': <PhoneOutlined className="text-xl" />,
  '地址': <EnvironmentOutlined className="text-xl" />,
};

export default function Contact() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { contactInfo, loading: contactLoading, error: contactError } = useContactInfo();
  const { officeHours, loading: officeHoursLoading, error: officeHoursError } = useOfficeHours();

  const onFinish = async () => {
    setLoading(true);
    try {
      // 模拟表单提交
      await new Promise((resolve) => setTimeout(resolve, 1000));
      message.success("消息发送成功！我们会尽快回复您。");
      form.resetFields();
    } catch (error: unknown) {
      console.error('Form submission error:', error);
      message.error("发送失败，请稍后重试。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">📞 联系我们</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            让我们开始合作
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            有任何问题或合作意向？我们很乐意听到您的声音，让我们共同创造价值
          </p>
        </div>

        <Row gutter={[64, 32]}>
          <Col xs={24} lg={12}>
            {contactLoading || officeHoursLoading ? (
              <div className="space-y-8">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex items-start p-6 rounded-2xl bg-white border border-gray-200/50">
                    <Spin size="small" />
                    <div className="ml-4 text-gray-600">加载中...</div>
                  </div>
                ))}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white">
                  <Spin size="small" />
                  <div className="mt-2 text-blue-100">加载办公时间中...</div>
                </div>
              </div>
            ) : contactError || officeHoursError ? (
              <div className="space-y-8">
                <Alert
                  message="联系信息加载失败"
                  description={contactError || officeHoursError}
                  type="warning"
                  showIcon
                />
              </div>
            ) : (
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start group hover:shadow-lg transition-all duration-300 p-6 rounded-2xl bg-white border border-gray-200/50"
                  >
                    <div
                      className={`${info.bg} p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className={info.color}>
                        {iconMap[info.title as keyof typeof iconMap] || <MailOutlined className="text-xl" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.content.map((item, idx) => (
                          <p
                            key={idx}
                            className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Office Hours */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white">
                  <div className="flex items-center mb-4">
                    <div className="bg-white/20 p-2 rounded-lg mr-3">
                      <ClockCircleOutlined className="text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold">办公时间</h3>
                  </div>
                  <div className="space-y-2 text-blue-100">
                    {officeHours.map((hour, index) => (
                      <p key={index}>{hour}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Col>

          <Col xs={24} lg={12}>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200/50">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  发送消息
                </h3>
                <p className="text-gray-600">
                  填写以下表单，我们会尽快与您联系
                </p>
              </div>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="name"
                      label="姓名"
                      rules={[{ required: true, message: "请输入您的姓名" }]}
                    >
                      <Input
                        placeholder="请输入您的姓名"
                        className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-colors duration-300"
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      label="邮箱"
                      rules={[
                        { required: true, message: "请输入您的邮箱" },
                        { type: "email", message: "请输入有效的邮箱地址" },
                      ]}
                    >
                      <Input
                        placeholder="请输入您的邮箱"
                        className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-colors duration-300"
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="subject"
                  label="主题"
                  rules={[{ required: true, message: "请输入主题" }]}
                >
                  <Input
                    placeholder="请输入消息主题"
                    className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-colors duration-300"
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="消息内容"
                  rules={[{ required: true, message: "请输入消息内容" }]}
                >
                  <TextArea
                    rows={6}
                    placeholder="请详细描述您的需求或问题"
                    className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500 transition-colors duration-300"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    loading={loading}
                    icon={<SendOutlined />}
                    className="w-full h-12 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    发送消息
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
