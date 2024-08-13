import React from "react";
import { Card } from "react-bootstrap";
import { ServiceCardProps } from "./serviceCard.props";

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card className="border-0">
        <Card.Img
          variant="top"
          src={image || "https://via.placeholder.com/150"}
          style={{
            margin: "auto",
            height: "100px",
            width: "100px",
            objectFit: "cover",
          }}
        />
        <Card.Body className="text-center">
          <Card.Title className="card-title">{title || "title"}</Card.Title>
          <Card.Text className="card-desc ps-5 pe-5">
            {description ||
              " This is a brief description of the card content. It provides additional information about the card's purpose or subject."}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;
