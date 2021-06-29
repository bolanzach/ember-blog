export default function (server) {
  const posts = server.createList('post', 10);

  // Assume there is a single user with a single blog-summary
  server.create('blog-summary', {
    posts,
    featuredPosts: server.createList('post', 6),
  });
}
