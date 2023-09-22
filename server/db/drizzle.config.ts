import type { Config } from "drizzle-kit";
import { ENV } from "env";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

 export default {
  // cant make relative paths because the script start from package.json i guess...
  schema: "server/db/schema/**/schema.ts",
  out: "server/db/migrations",
  driver: 'pg',
  dbCredentials: {
    connectionString: ENV.DATABASE_STRING,
  },
  
} satisfies Config;

export const dbInstance = drizzle(postgres({ max: 1 }));

