import { Link } from "react-router-dom";
import { useGetPosts } from "../../hooks/api/jsonplaceholder/useGetPosts";
import classes from "./HomePage.module.css";

function HomePage() {
  const { data: posts, isLoading, isError } = useGetPosts();

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Failed to load posts.</p>;
  }

  if (!posts || posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <section className={classes.root}>
      <h2>Posts</h2>
      <ul className={classes.list}>
        {posts.map((post) => (
          <li key={post.id} className={classes.item}>
            <Link to={`/posts/${post.id}/detail`} className={classes.link}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HomePage;