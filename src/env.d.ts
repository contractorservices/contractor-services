/// <reference types="astro/client" />
/// <reference types="@cloudflare/workers-types" />
/// <reference path="../worker-configuration.d.ts" />

interface Env {
  RESEND_API_KEY: string;
  DISCORD_WEBHOOK_URL: string;
}
