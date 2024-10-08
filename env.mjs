import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    WORDPRESS_REVALIDATE_SECRET: z.string().min(1),
    WP_ENDPOINT: z.string().url(),
    // WORDPRESS_AUTH_REFRESH_TOKEN: z.string(),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client, 
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    WP_ENDPOINT: process.env.WP_ENDPOINT,
    WORDPRESS_REVALIDATE_SECRET: process.env.WORDPRESS_REVALIDATE_SECRET,
    // WORDPRESS_AUTH_REFRESH_TOKEN: process.env.WORDPRESS_AUTH_REFRESH_TOKEN,
  },
});