import {
  GetAllSupport,
  DeleteSupport,
  SupportById,
  AddSupport,
} from "../Services/SupportService";
import React, { useEffect, useState } from "react";
import { Space, Table, Typography } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { FaRegEdit } from "react-icons/fa";
import SupportModal from "../components/Modals/SupportModal";

const SupportSetting = () => {
  const [data, setdata] = useState([]);

  const getData = () => {
    GetAllSupport().then((res) => {
      setdata(res);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  const columns = [
    { title: "Id", dataIndex: "messageId", key: "messageId" },
    { title: "Message", dataIndex: "message", key: "message" },
    { title: "isOpen", dataIndex: "isOpen", key: "isOpen" },
    { title: "Reply Message", dataIndex: "replyMessage", key: "replyMessage" },
    { title: "Message Date", dataIndex: "messageDate", key: "messageDate" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <Space>
          <Typography.Link
            onClick={() =>
              DeleteSupport(record.messageId).then(() => {
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
        title={() => <SupportModal onSupportAdded={getData} />}
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

export default SupportSetting;
