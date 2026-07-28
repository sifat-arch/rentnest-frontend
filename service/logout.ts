import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const logout = async () => {
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
  revalidateTag("my-profile", "max");
};
