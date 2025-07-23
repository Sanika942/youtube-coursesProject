import logo from "./logo.svg";
import "./App.css";
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import Allcourses from "./components/Allcourses";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";
import Menus from "./components/Menus";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./api/Card";

function App() {
  const btnHandle = () => {
    toast.success("done", {
      position: "top-center",
    });
  };
  return (
    <div>
      {/* <Card /> */}
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-course" element={<Allcourses />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
