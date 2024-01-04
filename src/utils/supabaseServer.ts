// src/utils/supabaseServer.ts
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import 'server-only';

import type { Database } from '@/types/supabase';

export const cookieStore = cookies();
export const createClient = () =>
  createServerComponentClient<Database>({ cookies: () => cookieStore });
