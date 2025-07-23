import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";

function CardComponent() {
  const [val, setVal] = useState([]);

  const fetch = () => {
    axios.get("https://dummyjson.com/users").then((res) => {
      setVal(res.data.users); // 👈 Extract the users array
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      {val.length > 0 ? (
        val.map((user, ind) => (
          <Card key={ind} className="mb-2">
            <CardBody>
              <h5>
                {user.firstName} {user.lastName}
              </h5>
              <p>Email: {user.email}</p>
              <p>Age: {user.age}</p>
            </CardBody>
          </Card>
        ))
      ) : (
        <p>Loading or No Data Found</p>
      )}
    </div>
  );
}

export default CardComponent;
