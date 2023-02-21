import { Outlet } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import classes from "../assets/css/Root.module.css";
import '../assets/scss/SideBar.scss'
import SideBar from "../components/UI/SideBar";
const RootLayout = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <SideBar />
          </Col>
          <Col xs={10} className="offset-md-2" id="page-content-wrapper">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default RootLayout;
