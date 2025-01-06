import { DATABASE_URL } from '@/configs/env';
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL not defined.');
}

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url: DATABASE_URL,
  },
});
