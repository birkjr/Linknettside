import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iglqmuqbolugyifhsrfh.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; // Ensure you're using VITE_ for frontend

if (!supabaseKey) {
  console.error('Supabase API Key is missing! Check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
