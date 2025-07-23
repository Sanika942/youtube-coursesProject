import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
function AddCourse() {
  useEffect(() => {
    document.title = "Add Courses";
  }, []);

  const [course, setCourse] = useState({});
  //form handler function
  const handleForm = (e) => {
    console.log(course);
    postDataServer(course);
    e.preventDefault();
  };
  //creating dunction to post data on serverr
  const postDataServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("Course added sucessfully");
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Something has went wrong");
      }
    );
  };
  return (
    <div>
      <h1 className="text-center my-3">FillCourse Details</h1>
      <Form className="mx-3" onSubmit={handleForm}>
        <FormGroup>
          <label for="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userid"
            id="userid"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter title"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 200 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">
            Add Course
          </Button>
          <Button
            type="reset"
            color="warning"
            className="ms-3"
            onClick={() => {
              setCourse({});
            }}
          >
            Clear
          </Button>
        </Container>
      </Form>
    </div>
  );
}

export default AddCourse;
