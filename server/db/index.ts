import { drizzle } from 'drizzle-orm/node-postgres';
import { getConnectionString } from './connection-string';

const db = drizzle(getConnectionString('docker'));

export { db };
