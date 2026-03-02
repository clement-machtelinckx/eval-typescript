import { useQuery } from "@tanstack/react-query";
import { JsonPlaceholderApiUtils } from "../../../hooks/api/jsonplaceholder";
import { postSchema } from "../../../hooks/api/jsonplaceholder/useGetPosts/data";

async function fetchPost(postId: number) {
  const response = await fetch(`${JsonPlaceholderApiUtils.postsUrl}/${postId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch post.");
  }

  const payload: unknown = await response.json();
  return postSchema.parse(payload);
}

export function useGetPost(postId: number) {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPost(postId),
    enabled: Number.isInteger(postId) && postId > 0,
  });
}