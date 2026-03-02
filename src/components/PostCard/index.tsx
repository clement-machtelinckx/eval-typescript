import type { Post } from "../../hooks/api/jsonplaceholder/useGetPosts/data";
import classes from "./PostCard.module.css";

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  return (
    <div className={classes.root}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostCard;