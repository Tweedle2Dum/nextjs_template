/* IMPORT ENV VARIABLES HERE */
import { z } from 'zod';

// Define the schema for required environment variables
const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(), // URL validation
  DATABASE_URL: z.string(), // Required string
  SECRET_KEY: z.string(), // Required string
});

// Validate the environment variables
const env = envSchema.safeParse(process.env);

if (!env.success) {
  // If validation fails, log the errors and exit the process
  console.error('Invalid environment variables:', env.error.format());
  process.exit(1); // Exit the process with a failure status
}

// If successful, use the validated environment variables
export const config = env.data; // Validated and typed environment variables


