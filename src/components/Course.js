import axios from "axios";
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
function Course({ course, update }) {
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("Deleted");
        update(id);
      },
      (error) => {
        toast.error("Error");
      }
    );
  };
  return (
    <div>
      <Card className="text-center">
        <CardBody>
          <CardSubtitle className="font-weight-bold">
            {course.title}
          </CardSubtitle>
          <CardText>{course.description}</CardText>
          <Container>
            <Button
              color="danger"
              onClick={() => {
                deleteCourse(course.id);
              }}
            >
              Delete
            </Button>
            <Button color="warning" className="ms-3">
              Update
            </Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
}

export default Course;
