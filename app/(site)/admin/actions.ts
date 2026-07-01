"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { checkPassword, setAdminCookie, clearAdminCookie, isAdmin } from "@/lib/booking/auth";
import { cancelById } from "@/lib/booking/store";

export async function loginAction(formData: FormData) {
  const pw = String(formData.get("password") ?? "");
  if (!checkPassword(pw)) {
    redirect("/admin?error=1");
  }
  await setAdminCookie();
  redirect("/admin");
}

export async function logoutAction() {
  await clearAdminCookie();
  redirect("/admin");
}

export async function adminCancelAction(formData: FormData) {
  if (!(await isAdmin())) redirect("/admin");
  const id = String(formData.get("id") ?? "");
  if (id) await cancelById(id);
  revalidatePath("/admin");
}
