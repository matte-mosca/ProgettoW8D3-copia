import React from "react";
import singleBook from "./SingleBook"
import fantasyBooks from "./fantasy.json";

function BookList(Array) {
    return (
      <Container className="mt-5">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {Array.map(() => {
          return (
            <singleBook></singleBook>
          );
        })}
      </Row>
      </Container>
    );
  }
  
  export default BookList;