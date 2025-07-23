import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
function Menus() {
  return (
    <div>
      <ListGroup>
        <Link className="list-group-item list-grop-item-action" tag="a" to="/">
          Home
        </Link>
        <Link
          className="list-group-item list-grop-item-action"
          tag="a"
          to="/add-course"
        >
          Add Course
        </Link>
        <Link
          className="list-group-item list-grop-item-action"
          tag="a"
          to="/view-course"
        >
          View Courses
        </Link>
        <Link className="list-group-item list-grop-item-action" tag="a" to="#!">
          About Us
        </Link>
        <Link className="list-group-item list-grop-item-action" tag="a" to="#!">
          Contact
        </Link>
      </ListGroup>
    </div>
  );
}

export default Menus;
