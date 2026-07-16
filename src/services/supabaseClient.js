import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Handle placeholders gracefully so the app does not crash if keys are missing
const isConfigured = 
  supabaseUrl && 
  supabaseUrl.startsWith('http') && 
  supabaseAnonKey && 
  !supabaseAnonKey.includes('your_supabase_anon_public_key');

export const supabase = isConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

if (!isConfigured) {
  console.warn(
    'Supabase — client is not configured yet. Form submissions will not be saved to DB. ' +
    'Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.'
  );
}
