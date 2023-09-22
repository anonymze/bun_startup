import { migrate } from "drizzle-orm/postgres-js/migrator";
import { dbInstance} from "./drizzle.config";
 
// cant make relative paths because the script start froml package.json i guess...
await migrate(dbInstance, { migrationsFolder: "server/db/migrations" });

