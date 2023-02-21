import React from "react";
import { Nav } from "react-bootstrap";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/scss/SideBar.scss";

const SideBar = (props) => {
  return (
    <>
      <Nav
        className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Container fluid>
            <Nav.Item>
                <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/lists-generator">Lists Generator</Link>
            </Nav.Item>
        </Container>
       
      </Nav>
    </>
  );
};
export default SideBar;
