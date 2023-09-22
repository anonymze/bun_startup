import { migrate } from "drizzle-orm/postgres-js/migrator";
import { dbInstance} from "./drizzle.config";
 
await migrate(dbInstance, { migrationsFolder: "server/db/migrations" });

