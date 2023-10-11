CREATE TABLE IF NOT EXISTS "blog" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"title" varchar(256) NOT NULL,
	"description" text,
	"visible" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "comment" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid,
	"blog_id" integer,
	"title" varchar(256) NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comment" ADD CONSTRAINT "comment_blog_id_blog_id_fk" FOREIGN KEY ("blog_id") REFERENCES "blog"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
