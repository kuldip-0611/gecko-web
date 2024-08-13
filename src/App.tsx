import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "./components/navbar/HeaderNav";
import { Col, Container, Row } from "react-bootstrap";
import { blogPosts, services, testimonials } from "./constants/dummy";
import aboutImage from "./assets/about.png";
import ServiceCard from "./components/serviceCard/ServiceCard";
import BlogCard from "./components/blogCard/BlogCard";
import Testimonialscard from "./components/testimonialsCard/TestimonialsCard";
import ContactForm from "./components/contactForm/ContactForm";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Container fluid className="home-container">
        <HeaderNav />
        <div className="info-container">
          <b>
            <p className="save-text">How much could you save?</p>
          </b>
          <p className="description-text">{`Answer the questions below to get a fixed price quotation for us to take your accountancy hassles away from you.`}</p>
        </div>
        <div className="turnover-container">
          <p className="turnover-question">
            Is your turnover expected to be more than £85k?
          </p>

          <div className="d-flex flex-row justify-content-center align-items-center gap-3">
            <button className="decision-btn border-0 rounded-5">Yes</button>
            <button className="decision-btn border-0 rounded-5">No</button>
          </div>
        </div>
        <div className="time-container">
          <p className="time-text">Takes less than 30 seconds</p>
        </div>
      </Container>

      <p className="save-text ms-5 mt-5">Services</p>

      <Row className="g-3">
        {services.map((service, index) => (
          <Col key={index} md={4} className="d-flex">
            <ServiceCard
              title={service.title}
              description={service.description}
              image={service.imageUrl}
            />
          </Col>
        ))}
      </Row>
      <div className="about-us-container d-flex flex-row justify-content-between align-items-center ps-5 pe-5 mt-5">
        <div>
          <p className="save-text">About us</p> <br />
          <p className="description-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
            sadipscing elitr
          </p>
        </div>
        <img src={aboutImage} />
      </div>
      <div className="testomonials-bg ps-5 pe-5">
        <p className="save-text">Testomonials</p> <br />
        <div>
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {testimonials.map((testimonial, index) => (
              <Col key={index}>
                <Testimonialscard
                  title={testimonial.title}
                  description={testimonial.description}
                  image={testimonial.image}
                />
              </Col>
            ))}
          </Row>
        </div>
        <Container fluid className="ps-0 pt-5">
          <Row xs={1} sm={2} md={3}>
            {blogPosts.map((post, index) => (
              <Col key={index}>
                <BlogCard
                  title={post.title}
                  date={post.date}
                  author={post.author}
                  image={post.image}
                  description={post.description}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="ps-5 pe-5 ms-5 me-5">
        <p className="description-text text-center ">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua
        </p>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
