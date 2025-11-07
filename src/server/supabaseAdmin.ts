import { createClient } from '@supabase/supabase-js';

declare const Deno:
  | { env: { get(key: string): string | undefined } }
  | undefined;

const getEnv = (key: string) => {
  if (typeof process !== 'undefined' && process.env[key]) {
    return process.env[key] as string;
  }
  if (typeof Deno !== 'undefined' && typeof Deno.env !== 'undefined') {
    const value = Deno.env.get(key);
    if (value) return value;
  }
  return undefined;
};

const supabaseUrl = getEnv('SUPABASE_URL');
const supabaseServiceRoleKey = getEnv('SUPABASE_SERVICE_ROLE_KEY');

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error(
    'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables'
  );
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});
