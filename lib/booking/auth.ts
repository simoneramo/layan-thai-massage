import { cookies } from "next/headers";
import { createHash } from "crypto";

const COOKIE = "layan_admin";

function expectedToken(): string {
  const pw = process.env.ADMIN_PASSWORD ?? "";
  return createHash("sha256").update(`layan::${pw}`).digest("hex");
}

export function checkPassword(input: string): boolean {
  const pw = process.env.ADMIN_PASSWORD ?? "";
  return pw.length > 0 && input === pw;
}

export async function isAdmin(): Promise<boolean> {
  const jar = await cookies();
  return jar.get(COOKIE)?.value === expectedToken();
}

export async function setAdminCookie(): Promise<void> {
  const jar = await cookies();
  jar.set(COOKIE, expectedToken(), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });
}

export async function clearAdminCookie(): Promise<void> {
  const jar = await cookies();
  jar.delete(COOKIE);
}
