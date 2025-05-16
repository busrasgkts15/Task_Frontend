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
  GetAllProducts,
  DeleteProductById,
  UpsertProductById,
  AddProduct,
} from "../../Services/ProductService";

const { Option } = Select;

const ProductModal = ({ onProductAdded }) => {
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
    AddProduct(values)
      .then(() => {
        onClose();
        if (onProductAdded) {
          onProductAdded(); // Listeyi yenile
        }
      })
      .catch((err) => {
        message.error("Ürün eklenemedi!");
        console.error(err);
      });
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Add New Product
      </Button>
      <Drawer
        title="Create a new Product"
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
                label="Category Id"
                key="categoryId"
                rules={[{ required: true, message: "Please enter Id" }]}
              >
                <Input placeholder="Please enter Id" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="prodName"
                label="Name"
                key="prodName"
                rules={[{ required: true, message: "Please enter name" }]}
              >
                <Input placeholder="Please enter name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="prodDescription"
                label="Description"
                key="prodDescription"
                rules={[{ message: "Please enter description" }]}
              >
                <Input placeholder="Please enter description" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="prodPrice"
                label="Price"
                key="prodPrice"
                rules={[{ message: "Please enter price" }]}
              >
                <Input placeholder="Please enter price" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="prodSertficate"
                label="Sertificate"
                key="prodSertficate"
                rules={[{ message: "Please enter sertificate" }]}
              >
                <Input placeholder="Please enter sertificate" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default ProductModal;
