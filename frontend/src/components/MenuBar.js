import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import React, { Component } from 'react'

export default class MenuBar extends Component {
  render() {
    return (
      <div>
        <Navbar
          color="light"
          expand="md"
          fixed=""
          light
        >
          <NavbarBrand href="/">
            HRManager
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="./employee.js">
                  Employees
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./departments.js">
                  Departments
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
