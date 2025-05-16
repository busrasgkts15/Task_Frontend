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
  GetAllCategories,
  GetCategoryById,
  DeleteCategoryById,
  UpsertCategoryById,
  AddCategory,
} from "../../Services/CategoryService";

const { Option } = Select;

const CategoryModal = ({ onCategoryAdded }) => {
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
    AddCategory(values)
      .then(() => {
        onClose();
        if (onCategoryAdded) {
          onCategoryAdded(); // Listeyi yenile
        }
      })
      .catch((err) => {
        message.error("Kategori eklenemedi!");
        console.error(err);
      });
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Add New Category
      </Button>
      <Drawer
        title="Create a new category"
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
                name="categoryId"
                label="Id"
                key="categoryId"
                rules={[{ required: true, message: "Please enter Id" }]}
              >
                <Input placeholder="Please enter Id" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="categoryName"
                label="Name"
                key="categoryName"
                rules={[{ required: true, message: "Please enter name" }]}
              >
                <Input placeholder="Please enter name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="totalProduct"
                label="Total Product"
                key="totalProduct"
                rules={[{ message: "Please enter total product" }]}
              >
                <Input placeholder="Please enter product" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default CategoryModal;
