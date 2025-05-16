import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Alert,
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
  message,
} from "antd";
import {
  GetAllSupport,
  DeleteSupport,
  AddSupport,
} from "../../Services/SupportService";

const { Option } = Select;

const SupportModal = ({ onSupportAdded }) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    form.resetFields();
  };

  const onFinish = (values) => {
    console.log(values);
    AddSupport(values)
      .then(() => {
        onClose();
        if (onSupportAdded) {
          onSupportAdded();
        }
      })
      .catch((err) => {
        message.error("Destek Mesajı eklenemedi!");
        console.error(err);
      });
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Add New Support
      </Button>
      <Drawer
        title="Create a new support"
        width={600}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={() => form.submit()} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          hideRequiredMark
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="messageId"
                label="Id"
                key="messageId"
                rules={[{ required: true, message: "Please enter Id" }]}
              >
                <Input placeholder="Please enter Id" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="userId"
                label="Support Id"
                key="userId"
                rules={[{ required: true, message: "Please enter Id" }]}
              >
                <Input placeholder="Please enter Id" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="message"
                label="Message"
                key="message"
                rules={[{ message: "Please enter message" }]}
              >
                <Input placeholder="Please enter message" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default SupportModal;
