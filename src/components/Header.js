import React, { useState, Component } from 'react'
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="warning" light expand="md">
                <NavbarBrand tag={Link} to="/">phirakon web</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/about">เกี่ยวกับเรา</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/contact">ติดต่อเรา</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/prodcuts">สินค้า</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/blogs">Blogs</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/users">สมาชิกทั้งหมด</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/profile">ข้อมูลส่วนตัว</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
