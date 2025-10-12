import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Posts from './components/Posts';

function App() {
  const blogPosts = [
    { id: 1, title: 'Understanding React Hooks', description: 'A deep dive into useState and useEffect hooks with practical examples.' },
    { id: 2, title: 'A Guide to React Bootstrap', description: 'Learn how to build responsive layouts quickly with React Bootstrap components.' },
    { id: 3, title: 'State Management in React', description: 'Exploring different state management solutions like Context API and Redux.' },
    { id: 4, title: 'Building Responsive UIs', description: 'Best practices for creating mobile-first, responsive user interfaces with modern CSS frameworks.' },
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home blogPosts={blogPosts} />} />
          <Route path="/posts" element={<Posts blogPosts={blogPosts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;