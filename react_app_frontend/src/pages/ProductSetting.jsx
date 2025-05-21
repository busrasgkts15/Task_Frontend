import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { FaRegEdit } from "react-icons/fa";
import { Typography, Popconfirm } from "antd";

import {
  GetAllProducts,
  GetProductById,
  DeleteProductById,
  UpsertProductById,
  AddProduct,
} from "../Services/ProductService";
import ProductModal from "../components/Modals/ProductModal";

const ProductSetting = () => {
  const [data, setdata] = useState([]);

  const getData = () => {
    GetAllProducts().then((res) => {
      setdata(res);
    });
  };

  const DeleteData = (id) => {
    DeleteProductById(id);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    { title: "Id", dataIndex: "prodId", key: "categoryId" },
    { title: "Name", dataIndex: "prodName", key: "categoryName" },
    {
      title: "Description",
      dataIndex: "prodDescription",
      key: "prodDescription",
    },
    { title: "Price", dataIndex: "prodPrice", key: "prodDescription" },
    {
      title: "Sertificate",
      dataIndex: "prodSertficate",
      key: "prodDescription",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {/* Düzenle */}
          <Typography.Link

          //disabled={editingKey !== ""}
          >
            <FaRegEdit style={{ color: "#1890ff" }} />
          </Typography.Link>

          {/* Sil */}
          <Popconfirm
            title="Silmek istediğine emin misin?"
            onConfirm={() => DeleteData(record.prodId)}
          >
            <DeleteTwoTone twoToneColor="#ff4d4f" />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => <ProductModal onProductAdded={getData} />}
        style={{
          margin: "40px auto",
          width: "90%",
          maxWidth: "1000px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
        }}
      />
    </>
  );
};

export default ProductSetting;
