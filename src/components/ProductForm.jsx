import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Joi from "joi";
import { Routes, Route } from "react-router-dom";

function ProductForm({ onSubmit, counter }) {
  const [form, setForm] = useState({
    title: "",
    value: 0,
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: "",
    },
  });

  useEffect(() => {
    if (counter) {
      setForm(counter);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    onSubmit(form);
  };

  const [error, setError] = useState([{}]);

  const handleChange = ({ currentTarget: input }) => {
    setForm({
      ...form,
      [input.name]: input.value,
    });

    const result = schema
      .extract(input.name)
      .label(input.name)
      .validate(input.value);

    if (result.error) {
      setError({ ...error, [input.name]: result.error.details[0].message });
    } else {
      delete error[input.name];
      setError(error);
    }
  };

  const schema = Joi.object({
    title: Joi.string().min(2).max(100).required(),
    price: Joi.number().min(1).required(),
    value: Joi.exist(),
    description: Joi.string().optional().allow(""),
    category: Joi.string().required(),
    image: Joi.string().optional().allow(""),
    rating: Joi.exist(),
  });

  const isFormInvalid = () => {
    const result = schema.validate(form);
    return !!result.error;
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
                  isInvalid={error.title}
                />
                <Form.Control.Feedback type="invalid">
                  {error.title}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Price"
                  onChange={handleChange}
                  name="price"
                  value={form.price}
                  isInvalid={error.price}
                />

                <Form.Control.Feedback type="invalid">
                  {error.price}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="description"
                  placeholder="description"
                  onChange={handleChange}
                  name="description"
                  value={form.description}
                  isInvalid={error.description}
                />
                <Form.Control.Feedback type="invalid">
                  {error.description}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Category</Form.Label>
                {/* <Form.Control
                  type="description"
                  placeholder="description"
                  onChange={handleChange}
                  name="description"
                  value={form.description}
                  isInvalid={error.description}
                /> */}

                <Form.Select
                  onChange={handleChange}
                  name="category"
                  value={form.category}
                  isInvalid={error.category}
                >
                  <option value="">Select an option...</option>
                  <option value="men's clothing">men's clothing</option>
                  <option value="Mens Cotton Jacket">Mens Cotton Jacket</option>
                  <option value="Mens Casual Slim Fit">
                    Mens Casual Slim Fit
                  </option>
                  <option value="jewelery">jewelery</option>
                  <option value="electronics">electronics</option>
                  <option value="women's clothing">women's clothing</option>
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {error.category}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="image-link"
                  onChange={handleChange}
                  name="image"
                  value={form.image}
                  isInvalid={error.image}
                />
                <Form.Control.Feedback type="invalid">
                  {error.image}
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                disabled={isFormInvalid()}
              >
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
