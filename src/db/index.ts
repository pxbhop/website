import { DATABASE_URL } from '@/configs/env';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL not defined.');
}
// remove eslint rule when actually used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const db = drizzle(DATABASE_URL);
