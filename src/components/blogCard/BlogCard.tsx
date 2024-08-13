import React from "react";
import { Card } from "react-bootstrap";
import "./blogCard.css";
import { BlogCardProps } from "./blogCard.props";

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  author,
  image,
  description,
}) => {
  return (
    <Card className="custom-card">
      <Card.Img variant="top" src={image} className="card-img" />
      <Card.Body>
        <div>
          <b>
            <Card.Title className="text-title">{title}</Card.Title>
          </b>
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center gap-2">
          <div className="text-date">{date}</div>
          <div className="text-name">{author}</div>
        </div>
        <Card.Text className="text-description">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
