import { serial, text, timestamp, pgTable, uuid, varchar, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const blogSchema = pgTable("blog", {
  id: serial("id").primaryKey(),
  user_id: uuid("user_id").defaultRandom(),
  title: varchar("title", { length: 256  }).notNull(),
  description: text("description"),
  visible: boolean("visible").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

const insertBlogSchema = createInsertSchema(blogSchema);
 
const selectBlogSchema = createSelectSchema(blogSchema);
 
// Refining the fields - useful if you want to change the fields before they become nullable/optional in the final schema
// const insertUserSchema = createInsertSchema(blogSchema, {
//   id: (schema) => schema.id.positive(),
//   visible: z.boolean(),
// });
 
// Usage 
// const blog = insertBlogSchema.parse({
//   title: 'John Doe',
//   description: 'johndoe@test.com',
// });
