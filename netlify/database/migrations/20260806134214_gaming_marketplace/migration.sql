CREATE TYPE "order_status" AS ENUM('pending', 'paid', 'assigned', 'in_progress', 'review', 'completed', 'cancelled', 'refunded');--> statement-breakpoint
CREATE TYPE "ticket_status" AS ENUM('open', 'waiting', 'resolved');--> statement-breakpoint
CREATE TABLE "banners" (
	"id" serial PRIMARY KEY,
	"title" text NOT NULL,
	"image_url" text,
	"link_url" text,
	"active" boolean DEFAULT true NOT NULL,
	"starts_at" timestamp,
	"ends_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" serial PRIMARY KEY,
	"name" text NOT NULL,
	"slug" text NOT NULL UNIQUE,
	"description" text,
	"featured" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "coupons" (
	"id" serial PRIMARY KEY,
	"code" text NOT NULL UNIQUE,
	"percent_off" integer,
	"amount_off" numeric(10,2),
	"active" boolean DEFAULT true NOT NULL,
	"expires_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "games" (
	"id" serial PRIMARY KEY,
	"name" text NOT NULL,
	"slug" text NOT NULL UNIQUE,
	"accent" text,
	"active" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "order_items" (
	"id" serial PRIMARY KEY,
	"order_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	"quantity" integer DEFAULT 1 NOT NULL,
	"unit_price" numeric(10,2) NOT NULL,
	"configuration" text
);
--> statement-breakpoint
CREATE TABLE "orders" (
	"id" serial PRIMARY KEY,
	"order_number" text NOT NULL UNIQUE,
	"user_id" integer,
	"guest_email" text,
	"status" "order_status" DEFAULT 'pending'::"order_status" NOT NULL,
	"subtotal" numeric(10,2) NOT NULL,
	"tax" numeric(10,2) DEFAULT '0' NOT NULL,
	"total" numeric(10,2) NOT NULL,
	"payment_provider" text,
	"payment_reference" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" serial PRIMARY KEY,
	"game_id" integer,
	"category_id" integer,
	"name" text NOT NULL,
	"slug" text NOT NULL UNIQUE,
	"description" text NOT NULL,
	"price" numeric(10,2) NOT NULL,
	"compare_at_price" numeric(10,2),
	"delivery_estimate" text,
	"image_url" text,
	"featured" boolean DEFAULT false NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "reviews" (
	"id" serial PRIMARY KEY,
	"product_id" integer NOT NULL,
	"user_id" integer,
	"rating" integer NOT NULL,
	"title" text,
	"body" text,
	"approved" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "support_tickets" (
	"id" serial PRIMARY KEY,
	"user_id" integer,
	"order_id" integer,
	"subject" text NOT NULL,
	"message" text NOT NULL,
	"status" "ticket_status" DEFAULT 'open'::"ticket_status" NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY,
	"email" text NOT NULL UNIQUE,
	"name" text,
	"role" text DEFAULT 'customer' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "wishlists" (
	"id" serial PRIMARY KEY,
	"user_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_id_orders_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id");--> statement-breakpoint
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_product_id_products_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id");--> statement-breakpoint
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id");--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_game_id_games_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id");--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_categories_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id");--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_product_id_products_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id");--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id");--> statement-breakpoint
ALTER TABLE "support_tickets" ADD CONSTRAINT "support_tickets_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id");--> statement-breakpoint
ALTER TABLE "support_tickets" ADD CONSTRAINT "support_tickets_order_id_orders_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id");--> statement-breakpoint
ALTER TABLE "wishlists" ADD CONSTRAINT "wishlists_user_id_users_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id");--> statement-breakpoint
ALTER TABLE "wishlists" ADD CONSTRAINT "wishlists_product_id_products_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id");