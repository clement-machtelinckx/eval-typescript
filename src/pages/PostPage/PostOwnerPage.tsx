import { Navigate, useParams } from "react-router-dom";
import UserCard from "../../components/UserCard";
import { usePostContext } from "../../contexts/PostContext";
import { useGetUser } from "../../hooks/api/jsonplaceholder/useGetUser";
import { parsePositiveInt } from "../../utils/parsePositiveInt";

function PostOwnerPage() {
  const { post } = usePostContext();
  const { userId } = useParams();

  if (!post) {
    return <p>Loading post...</p>;
  }

  let parsedUserId: number;

  try {
    parsedUserId = parsePositiveInt(userId);
  } catch {
    return <Navigate to="/not-found" replace />;
  }

  if (parsedUserId !== post.userId) {
    return <Navigate to="/not-found" replace />;
  }

  const { data: user, isLoading, isError } = useGetUser(parsedUserId);

  if (isLoading) {
    return <p>Loading user...</p>;
  }

  if (isError || !user) {
    return <Navigate to="/not-found" replace />;
  }

  return <UserCard user={user} />;
}

export default PostOwnerPage;