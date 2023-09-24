import { dbInstance } from "../db/drizzle.config";
import { blogSchema } from "../db/schema/blog/schema";

const blogs = await dbInstance.select().from(blogSchema);
console.log(dbInstance);
console.log(blogs);

const app = Bun.serve({
  port: process.env.PORT,
  fetch(req) {
    const url = new URL(req.url);
    return new Response(`Hello, ${url.pathname}!`);
  },
  error(error) {
    return new Response(`<pre>${error}\n${error.stack}</pre>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});

process.exit(0);
