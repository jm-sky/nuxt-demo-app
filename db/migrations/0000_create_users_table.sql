CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
  `password` text NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);
--> statement-breakpoint
INSERT INTO `users` VALUES(
  `user@example.com`,
  '$2y$12$lhruRGtlKEIJFeSt8Ay1ZuNSw9vhhURCp817AtUjEXtJSocL3hDXu',
  'John',
  'Doe',
);
