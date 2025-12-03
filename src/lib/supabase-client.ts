// src/lib/supabase-client.ts
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// We rename the import so we can export our own function called createClient
export const createClient = () => createSupabaseClient(supabaseUrl, supabaseAnonKey);