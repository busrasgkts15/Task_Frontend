import React, { useState, useEffect } from "react";

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

import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { GetAllCategories } from "../../Services/CategoryService";

const Headers = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [Category, setCategory] = useState([]);

  useEffect(() => {
    GetAllCategories().then((res) => {
      setCategory(res);
    });
  }, []);

  return (
    <Navbar color="white" light className="shadow-sm w-100 px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center sm-4 md-6">
        <div className="d-flex align-items-center gap-2">
          <NavbarBrand href="/">
            <img src="/vite.svg" style={{ height: 30, width: 30 }} alt="logo" />
          </NavbarBrand>
          <NavbarBrand href="/" className="fw-bold fs-5 mb-0">
            ZS
          </NavbarBrand>
        </div>

        <Nav className="d-flex gap-4 sm-4 md-6 xs-2">
          <NavLink className="menu-title text-secondary" href="/">
            Anasayfa
          </NavLink>
          <NavLink className="menu-title text-secondary" href="/about">
            Hakkımızda
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
              to="/products"
            >
              Ürünler
              <DownOutlined style={{ fontSize: "10px", marginLeft: "4px" }} />
            </DropdownToggle>
            <DropdownMenu className="shadow-sm mt-0 border-0 rounded-0">
              {Category.map((item) => (
                <DropdownItem key={item.categoryId}>
                  <NavLink href="/products" style={{color:"gray"}}>{item.categoryName}</NavLink>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <NavLink className="menu-title text-secondary" href="/contact">
            İLETİŞİM
          </NavLink>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Headers;
