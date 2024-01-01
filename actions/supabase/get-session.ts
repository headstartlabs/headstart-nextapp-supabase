"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function getSession(): Promise<any> {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data } = await supabase.auth.getSession();
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}
