import React, { useState } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // search
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/shop");
    }
  };
  return (
    <Form onSubmit={submitHandler}>
      <InputGroup className="mr-sm-2 ml-sm-5">
        <FormControl
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Product"
        />
        <InputGroup.Append>
          <Button type="submit" variant="outline-success" className="p-2">
            <i className="fas fa-search"></i>
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default SearchBox;
