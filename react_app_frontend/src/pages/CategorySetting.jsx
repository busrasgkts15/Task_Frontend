import {
  GetAllCategories,
  GetCategoryById,
  AddCategory,
  UpsertCategoryById,
  DeleteCategoryById,
} from "../Services/CategoryService";
import React, { useEffect, useState } from "react";
import { Alert, Space, Table, Typography } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { FaRegEdit } from "react-icons/fa";
import CategoryModal from "../components/Modals/CategoryModal";

const CategorySetting = () => {
  const [data, setdata] = useState([]);
  const getData = () => {
    GetAllCategories().then((res) => {
      setdata(res);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  const columns = [
    { title: "Id", dataIndex: "categoryId", key: "categoryId" },
    { title: "Name", dataIndex: "categoryName", key: "categoryName" },
    { title: "Total Product", dataIndex: "totalProduct", key: "totalProduct" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <Space>
          <Typography.Link
            onClick={() =>
              DeleteCategoryById(record.categoryId).then(() => {
                getData();
              })
            }
          >
            <DeleteTwoTone twoToneColor="#ff4d4f" />
          </Typography.Link>
          <Typography.Link>
            <FaRegEdit style={{ color: "#1890ff" }} />
          </Typography.Link>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => <CategoryModal onCategoryAdded={getData}/>}
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

export default CategorySetting;
