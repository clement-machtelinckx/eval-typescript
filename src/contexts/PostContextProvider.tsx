import type { PropsWithChildren } from "react";
import { Navigate, useParams } from "react-router-dom";
import { PostContext } from "./PostContext";
import { useGetPost } from "../hooks/api/jsonplaceholder/useGetPost";
import { parsePositiveInt } from "../utils/parsePositiveInt";

function PostContextProvider({ children }: PropsWithChildren) {
  const { postId } = useParams();

  let parsedPostId: number;

  try {
    parsedPostId = parsePositiveInt(postId);
  } catch {
    return <Navigate to="/not-found" replace />;
  }

  const { data: post, isLoading, isError } = useGetPost(parsedPostId);

  if (isLoading) {
    return <p>Loading post...</p>;
  }

  if (isError || !post) {
    return <Navigate to="/not-found" replace />;
  }

  return <PostContext.Provider value={{ post }}>{children}</PostContext.Provider>;
}

export default PostContextProvider;