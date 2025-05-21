import React, { useState, useEffect } from "react";
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
import { AddUser, GetAllUser } from "../../Services/UserService";

const { Option } = Select;

const UserModal = ({onUserAdded}) => {
  useEffect(() => {}, []);

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
    AddUser(values)
      .then(() => {
        onClose();
        if (onUserAdded) {
          onUserAdded(); // Listeyi yenile
        }
      })
      .catch((err) => {
        message.error("Kullanıcı eklenemedi!");
        console.error(err);
      });
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Add New User
      </Button>
      <Drawer
        title="Create a new user"
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
            <Button onClick={() => form.submit()} type="primary" htmlType="submit">
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
            <Col span={24}>
              <Form.Item
                name="name"
                label="Name"
                key="name"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="surname"
                label="Surname"
                key="surname"
                rules={[{ required: true, message: "Please enter surname" }]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="Please enter surname"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="e_mail"
                label="Email"
                key="e_mail"
                rules={[{ required: true, message: "Please enter e_mail" }]}
              >
                <Input placeholder="Please enter e_mail" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="phone"
                label="Phone"
                key="phone"
                rules={[{ required: true, message: "Please enter phone" }]}
              >
                <Input placeholder="Please enter phone"></Input>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="passwordHash"
                label="Password"
                rules={[{ required: true, message: "Please enter password" }]}
              >
                <Input placeholder="Please enter password"></Input>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="role"
                label="Role Id"
                rules={[
                  {
                    required: true,
                    message: "Please enter rol Id '1-Admin , 2-Support'",
                  },
                ]}
              >
                <Input placeholder="Please enter rol Id '1-Admin , 2-Support'"></Input>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default UserModal;
