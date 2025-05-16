import {
  GetAllUser,
  GetUserById,
  UpsertUserById,
  AddUser,
  DeleteUserById,
} from "../Services/UserService";
import React, { useEffect, useState } from "react";
import { Col, Row, Space, Table, Typography } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { FaRegEdit } from "react-icons/fa";
import UserModal from "../components/Modals/UserModal";

const UserSetting = () => {
  const [data, setdata] = useState([]);

  const getData = () => {
    GetAllUser().then((res) => {
      setdata(res);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  const columns = [
    { title: "Id", dataIndex: "userId", key: "userId" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Surname", dataIndex: "surname", key: "surname" },
    { title: "Email", dataIndex: "e_mail", key: "e_mail" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Password", dataIndex: "passwordHash", key: "passwordHash" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <Space>
          <Typography.Link
            onClick={() =>
              DeleteUserById(record.userId).then(() => {
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
      <Row>
        <Col sm={24}>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            title={() => <UserModal onUserAdded={getData}/>}
            style={{
              margin: "40px auto",
              width: "90%",
              maxWidth: "1000px",
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default UserSetting;
