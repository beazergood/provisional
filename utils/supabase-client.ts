import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL_CLOUD ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY_CLOUD ?? '',
)