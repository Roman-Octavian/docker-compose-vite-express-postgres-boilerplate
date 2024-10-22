import { defineConfig } from 'drizzle-kit';
import { getConnectionString } from './connection-string';

export default defineConfig({
  out: '/drizzle',
  schema: './db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: getConnectionString('docker'),
  },
});
