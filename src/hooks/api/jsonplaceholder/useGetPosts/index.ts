import { useQuery } from "@tanstack/react-query";
import { JsonPlaceholderApiUtils } from "..";
import { userSchema } from "./data";

async function fetchUser(userId: number) {
  const response = await fetch(`${JsonPlaceholderApiUtils.usersUrl}/${userId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch user.");
  }

  const payload: unknown = await response.json();
  return userSchema.parse(payload);
}

export function useGetUser(userId: number) {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
    enabled: Number.isInteger(userId) && userId > 0,
  });
}