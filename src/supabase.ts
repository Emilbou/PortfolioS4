import { createClient } from '@supabase/supabase-js'
import {ref} from '@vue/reactivity'
//@ts-ignore
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
//@ts-ignore
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
console.log("affiche .env : ",supabaseUrl, supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

