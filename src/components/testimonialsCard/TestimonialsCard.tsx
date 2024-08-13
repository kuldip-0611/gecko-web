import React from "react";
import { Card } from "react-bootstrap";
import "./testimonialsCard.css";
import cardTop from "../../assets/topCard.png";
import bottomCard from "../../assets/bottomCard.png";
import { TestomonialCardProps } from "./testomonialCard.props";

const Testimonialscard: React.FC<TestomonialCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <Card className="custom-card">
      <div className="position-relative">
        <Card.Img variant="top" src={cardTop} className="card-img-top-left" />
        <Card.Img
          variant="bottom"
          src={bottomCard}
          className="card-img-bottom-right"
        />
        <Card.Body className="p-4">
          <div className="d-flex align-items-center mb-3">
            <div className="me-3">
              <Card.Title className="text-title">{title}</Card.Title>
            </div>
            <Card.Img src={image} className="card-img-name" />
          </div>
          <Card.Text className="text-description">{description}</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
};

export default Testimonialscard;
