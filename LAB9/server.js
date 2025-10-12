const http = require('http');
const handleRequest = require('./routes');

const PORT = 3000;

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});