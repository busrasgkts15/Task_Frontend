import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Alert } from "antd";
import { AddSupport } from "../Services/SupportService";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Contact = () => {
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(false);

  const onFinish = (values) => {
    console.log(data);
    setData(values);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000); // mesajı 4 saniyede kaldır
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: "20px" }}>
      {success && (
        <Alert
          message="Success"
          description="Mesajınız İletildi."
          type="success"
          showIcon
          style={{ marginBottom: "20px" }}
        />
      )}
      <Form
        {...layout}
        name="contact-form"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ type: "email", required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "age"]}
          label="Age"
          rules={[{ type: "number", min: 0, max: 99 }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name={["user", "message"]} label="Message">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
