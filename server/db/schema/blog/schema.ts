import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const blog = pgTable("blog", {
  id: serial("id"),
  // TODO
});
