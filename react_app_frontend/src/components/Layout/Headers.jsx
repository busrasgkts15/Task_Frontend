import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { GetAllCategories } from "../../Services/CategoryService";
import { DownOutlined } from "@ant-design/icons";

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    GetAllCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" className="shadow-sm px-3">
      <div className="container d-flex justify-content-around">
        
        <NavbarBrand
          tag={Link}
          to="/"
          className="d-flex align-items-center gap-2"
        >
          <img src="/vite.svg" alt="Logo" style={{ width: 30, height: 30 }} />
          <span className="fw-bold fs-5 mb-0">ZS</span>
        </NavbarBrand>

        
        <NavbarToggler onClick={toggle} />

        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto d-flex align-items-center" navbar>
            
            <NavItem className="mx-2">
              <NavLink tag={Link} to="/" className="text-secondary">
                Anasayfa
              </NavLink>
            </NavItem>

            
            <NavItem className="mx-2">
              <NavLink tag={Link} to="/about" className="text-secondary">
                Hakkımızda
              </NavLink>
            </NavItem>

            
            <UncontrolledDropdown nav inNavbar className="mx-2">
              <DropdownToggle
                nav
                className="text-secondary d-flex align-items-center"
              >
                Ürünler <DownOutlined style={{ fontSize: 10, marginLeft: 4 }} />
              </DropdownToggle>
              <DropdownMenu end className="shadow-sm">
                {categories.map((item) => (
                  <DropdownItem key={item.categoryId}>
                    <Link
                      to={`/products`}
                      className="text-decoration-none text-dark"
                    >
                      {item.categoryName}
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>

            
            <NavItem className="mx-2">
              <NavLink tag={Link} to="/contact" className="text-secondary">
                İletişim
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Headers;
