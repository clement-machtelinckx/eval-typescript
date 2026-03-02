import PostCard from "../../components/PostCard";
import { usePostContext } from "../../contexts/PostContext";

function PostDetailPage() {
  const { post } = usePostContext();

  if (!post) {
    return <p>Loading post...</p>;
  }

  return <PostCard post={post} />;
}

export default PostDetailPage;