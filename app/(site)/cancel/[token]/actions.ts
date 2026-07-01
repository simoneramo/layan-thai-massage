"use server";

import { cancelByToken } from "@/lib/booking/store";
import { revalidatePath } from "next/cache";

export async function cancelAction(token: string) {
  await cancelByToken(token);
  revalidatePath(`/cancel/${token}`);
}
