import { Container, Row } from 'react-bootstrap';
import BlogCard from './BlogCard';

function BlogList({ posts }) {
  return (
    <Container className="mt-4">
      <Row>
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
      </Row>
    </Container>
  );
}

export default BlogList;