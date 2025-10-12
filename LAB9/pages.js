function createPage(title, content) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <nav>
        <a href="/">Home</a>
        <a href="/posts">Posts</a>
      </nav>
      <hr />
      ${content}
    </body>
    </html>
  `;
}

function homePage() {
  const content = `<h1>Welcome to My Blog</h1><p>Explore my latest posts!</p>`;
  return createPage('Home', content);
}

function postsPage(posts) {
  const content = `
    <h1>Blog Posts</h1>
    ${posts.map(p => `
      <div class="post">
        <h2>${p.title}</h2>
        <p>${p.description}</p>
      </div>
    `).join('')}
  `;
  return createPage('Posts', content);
}

function notFoundPage() {
  const content = `<h1>404 - Page Not Found</h1><p>The page you requested does not exist.</p>`;
  return createPage('404', content);
}

module.exports = { homePage, postsPage, notFoundPage };