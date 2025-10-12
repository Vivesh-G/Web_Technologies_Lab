const posts = require('./posts');
const { homePage, postsPage, notFoundPage } = require('./pages');

function handleRequest(req, res) {
  const { url, method } = req;

  if (method === 'GET' && url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(homePage());

  } else if (method === 'GET' && url === '/posts') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(postsPage(posts));

  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(notFoundPage());
  }
}

module.exports = handleRequest;