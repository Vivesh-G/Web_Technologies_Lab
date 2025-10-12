import { Container } from 'react-bootstrap';
import BlogList from './BlogList';

function Home({ blogPosts }) {
  return (
    <Container className="mt-5">
      <div className="text-center mb-5">
        <h1>Welcome to My Blog</h1>
        <p className="lead">Discover amazing articles and insights from my blog posts.</p>
      </div>
      <BlogList posts={blogPosts} />
    </Container>
  );
}

export default Home;