import React, { useEffect, useState } from "react";
import Course from "./Course";
import { Button } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
function Allcourses() {
  useEffect(() => {
    document.title = "All Courses";
  }, []);

  //founction to call server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        console.log(response.data);
        toast.success("courses has been loaded");
        setCourses(response.data);
      },
      (error) => {
        console.log(error);
        toast.error("something went wrong");
      }
    );
  };

  //calling
  useEffect(() => {
    getAllCoursesFromServer();
  }, []);
  const [courses, setCourses] = useState([]);

  const updateCourses = (id) => {
    setCourses(courses.filter((c) => c.id != id));
  };
  return (
    <div>
      <h1>All courses</h1>
      {courses.length > 0
        ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses}/>)
        : "No couses"}
    </div>
  );
}

export default Allcourses;
