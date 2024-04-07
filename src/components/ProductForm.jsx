import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function ProductForm({ onSubmit }) {
  const [form, setForm] = useState({
    title: "",
    value: 0,
    price: "",
    description: "",
    category: "",
    image: "",
    ating: {
      rate: "",
      count: "",
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
  };
  const handleChange = ({ currentTarget: input }) => {
    setForm({
      ...form,
      [input.name]: input.value,
    });
  };

  return (
    <Col xs={12}>
      <Container style={{ justifyContent: "center", marginTop: "2%" }}>
        <Card style={{ padding: "10px" }}>
          <Card.Title>ADD CART</Card.Title>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  onChange={handleChange}
                  name="title"
                  value={form.title}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Price"
                  onChange={handleChange}
                  name="price"
                  value={form.price}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="description"
                  onChange={handleChange}
                  name="description"
                  value={form.description}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="category"
                  onChange={handleChange}
                  name="category"
                  value={form.category}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="image"
                  onChange={handleChange}
                  name="image"
                  value={`"${form.category}"`}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </Col>
  );
}

export default ProductForm;
