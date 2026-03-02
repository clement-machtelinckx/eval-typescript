import { useQuery } from "@tanstack/react-query";
import { JsonPlaceholderApiUtils } from "..";
import { postsSchema } from "./data";

async function fetchPosts() {
  const response = await fetch(JsonPlaceholderApiUtils.postsUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch posts.");
  }

  const payload: unknown = await response.json();
  return postsSchema.parse(payload);
}

export function useGetPosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
}