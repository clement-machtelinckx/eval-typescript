import { createContext, useContext } from "react";
import type { Post } from "../hooks/api/jsonplaceholder/useGetPosts/data";

export type PostContextType = {
  post: Post | null;
};

export const PostContext = createContext<PostContextType>({
  post: null,
});

export function usePostContext() {
  return useContext(PostContext);
}