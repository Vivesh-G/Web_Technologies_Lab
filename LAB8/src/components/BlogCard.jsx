import { Card, Button, Col } from 'react-bootstrap';

function BlogCard({ title, description }) {
  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BlogCard;