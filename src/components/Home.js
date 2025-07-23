import React, { useEffect } from "react";
import { Button, Container } from "reactstrap";

const Home = () => {
  useEffect(() => {
    document.title = "Home||React Project";
  }, []);
  return (
    <Container className="mt-5 p-5 bg-light rounded text-center">
      <h1>Welcome to the Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos nisi
        sit facilis impedit aut optio consequuntur aspernatur officia
        laboriosam, veritatis, illum sapiente obcaecati tempora consectetur
        aliquid iusto magni corrupti.
      </p>
      <Button color="primary" outline>
        Start Learning
      </Button>
    </Container>
  );
};

export default Home;
