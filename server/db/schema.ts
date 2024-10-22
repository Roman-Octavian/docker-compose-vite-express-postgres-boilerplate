import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const calculationsTable = pgTable('calculations', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  input: varchar({ length: 255 }).notNull(),
  result: varchar({ length: 255 }).notNull(),
});
