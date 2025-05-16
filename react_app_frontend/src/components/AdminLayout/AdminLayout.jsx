import React, { useState } from "react";

import {
  Navbar,
  Nav,
  NavbarBrand,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  NavItem,
} from "reactstrap";

import { Link, Outlet } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Col, Menu, Row } from "antd";

const AdminLayout = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <Navbar color="white" light className="shadow-sm w-100 px-4">
        <div className="container-fluid d-flex justify-content-between align-items-center sm-4 md-6">
          <div className="d-flex align-items-center gap-2">
            <NavbarBrand href="/" className="fs-5 mb-0">
              Yönetim Paneli
            </NavbarBrand>
          </div>
          <Nav className="d-flex gap-4 sm-4 md-6 xs-2">
            <NavLink className="menu-title text-secondary" href="/admin">
              Raporlar
            </NavLink>
            <Dropdown
              nav
              inNavbar
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              isOpen={dropdownOpen}
            >
              <DropdownToggle
                nav
                className="menu-title text-secondary"
                tag={Link}
              >
                İşlemler
                <DownOutlined style={{ fontSize: "10px", marginLeft: "4px" }} />
              </DropdownToggle>
              <DropdownMenu className="shadow-sm mt-0 border-0 rounded-0">
                <DropdownItem>
                  <NavLink style={{ color: "gray" }} href="/admin/usersetting">
                    Kullanıcı İşlemleri
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    style={{ color: "gray" }}
                    href="/admin/categorysetting"
                  >
                    Kategori İşlemleri
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    style={{ color: "gray" }}
                    href="/admin/productsetting"
                  >
                    Ürün İşlemleri
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    style={{ color: "gray" }}
                    href="/admin/supportsetting"
                  >
                    Destek Talep İşlemleri
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavLink
              className="menu-title text-secondary"
              href="/admin/settings"
            >
              Ayarlar
            </NavLink>
          </Nav>
        </div>
      </Navbar>
      <Row>
        <Col sm={24}>
          <Outlet />
        </Col>
      </Row>
    </>
  );
};
export default AdminLayout;
