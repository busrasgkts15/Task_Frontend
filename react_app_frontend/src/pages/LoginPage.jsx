import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { Login, getToken } from "../Services/AuthService";
import { useNavigate } from "react-router-dom";
import { Card, Typography } from "antd";

const { Title } = Typography;

const LoginPage = () => {
  const [errormessage, seterrormessage] = useState("");

  const navigate = useNavigate();

  const onFinish = async (values) => {
    localStorage.setItem("token", null);

    await Login(values);

    const token = getToken();

    if (token) {
      navigate("/admin");
    } else {
      seterrormessage("Giriş başarısız! Token bulunamadı.");
      console.log(errormessage);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card
        title={<Title level={4}>Admin Panel Giriş</Title>}
        style={{ width: 400, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
      >
        <Form name="login" layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Kullanıcı Adı"
            name="name"
            rules={[
              { required: true, message: "Lütfen kullanıcı adınızı girin!" },
            ]}
          >
            <Input
              style={{ padding: 7 }}
              prefix={<UserOutlined />}
              placeholder="Kullanıcı Adı"
            />
          </Form.Item>

          <Form.Item
            label="Şifre"
            name="passwordHash"
            rules={[{ required: true, message: "Lütfen şifrenizi girin!" }]}
          >
            <Input.Password
              style={{ padding: 7 }}
              prefix={<LockOutlined />}
              placeholder="Şifre"
            />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Giriş Yap
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default LoginPage;
