// src/utils/supabaseClient.ts
import { Database } from '@/types/examples';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';

export const createClient = () => createPagesBrowserClient<Database>();
