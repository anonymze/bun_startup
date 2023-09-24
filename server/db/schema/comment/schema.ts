import { serial, text, timestamp, pgTable, uuid, varchar, integer } from "drizzle-orm/pg-core";
import { blogSchema as blog } from "../blog/schema";

export const commentSchema = pgTable("comment", {
  id: serial("id").primaryKey(),
  userId: uuid("user_id"),
  blogId: integer("blog_id").references(() => blog.id),
  title: varchar("title", { length: 256  }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
