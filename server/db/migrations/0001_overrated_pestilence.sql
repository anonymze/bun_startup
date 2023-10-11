ALTER TABLE "blog" ALTER COLUMN "user_id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "comment" ALTER COLUMN "user_id" SET DEFAULT gen_random_uuid();