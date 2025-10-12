import { Container } from 'react-bootstrap';
import BlogList from './BlogList';

function Posts({ blogPosts }) {
  return (
    <Container className="mt-4">
      <h2>Blog Posts</h2>
      <BlogList posts={blogPosts} />
    </Container>
  );
}

export default Posts;