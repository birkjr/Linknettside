import type { inferAsyncReturnType } from '@trpc/server';
import { supabaseAdmin } from '../supabaseAdmin';

export const createContext = async () => ({
  supabase: supabaseAdmin,
});

export type Context = inferAsyncReturnType<typeof createContext>;
