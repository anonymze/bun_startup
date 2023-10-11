import { migrate } from "drizzle-orm/postgres-js/migrator";
import { dbInstance } from "./drizzle.config";

// can't make relative paths because the script start from package.json i guess...
await migrate(dbInstance, { migrationsFolder: "server/db/migrations" });
process.exit(0);
