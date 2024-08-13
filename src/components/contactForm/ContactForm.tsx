import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contactForm.css";
import { contactValidationSchema } from "../../constants/validation";

const MyForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    description: "",
  };

  const onSubmit = (values: any) => {
    console.log("Form data", values);
  };

  return (
    <Container className="mt-5" style={{ borderBottom: "2px solid #000" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={contactValidationSchema}
        onSubmit={onSubmit}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form noValidate>
            <Row>
              <Col md={6}>
                <Form.Group controlId="firstName">
                  <Form.Label className="form-label">First Name</Form.Label>
                  <Field
                    name="firstName"
                    type="text"
                    className={`form-control custom-input-border ${
                      touched.firstName && errors.firstName ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="lastName">
                  <Form.Label className="form-label">Last Name</Form.Label>
                  <Field
                    name="lastName"
                    type="text"
                    className={`form-control custom-input-border ${
                      touched.lastName && errors.lastName ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="pt-3">
              <Col md={6}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Field
                    name="email"
                    type="email"
                    className={`form-control custom-input-border ${
                      touched.email && errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="phone">
                  <Form.Label className="form-label">Phone</Form.Label>
                  <Field
                    name="phone"
                    type="text"
                    className={`form-control custom-input-border ${
                      touched.phone && errors.phone ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="pt-3">
              <Col md={6}>
                <Form.Group controlId="budget">
                  <Form.Label className="form-label">Budget</Form.Label>
                  <Field
                    name="budget"
                    as="select"
                    className={`form-control custom-input-border ${
                      touched.budget && errors.budget ? "is-invalid" : ""
                    }`}
                  >
                    <option value="">Select your budget</option>
                    <option value="under_1000">Under 1000</option>
                    <option value="1000_5000">1000 - 5000</option>
                    <option value="5000_10000">5000 - 10,000</option>
                    <option value="above_10000">Above 10,000</option>
                  </Field>
                  <ErrorMessage
                    name="budget"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="description">
                  <Form.Label className="form-label">Description</Form.Label>
                  <Field
                    name="description"
                    type="text"
                    className={`form-control custom-input-border ${
                      touched.description && errors.description
                        ? "is-invalid"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="invalid-feedback"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-3 decision-btn m-auto"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default MyForm;
