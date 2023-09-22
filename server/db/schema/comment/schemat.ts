import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const comment = pgTable("comment", {
  id: serial("id"),
  // TODO
});
