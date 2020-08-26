import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import './navbar.css';
import { GlobalContext } from '../Context/GlobalState';

const Navigation = () => {
  const context = useContext(GlobalContext);
  let session = false;
  if (context.session[0]) {
    session = context.session[0].isLoggedIn;
  }

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">Website Generator</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link className={session ? 'hidden' : ''} href="/login">
            Login
          </Nav.Link>
          <Nav.Link className={session ? 'hidden' : ''} href="/get-started">
            Sign Up
          </Nav.Link>
          {session ? (
            <Form action="/logout" method="POST">
              <Button type="submit" className="logout">
                Logout
              </Button>
            </Form>
          ) : null}
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/* <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
