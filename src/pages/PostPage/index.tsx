import { NavLink, Outlet } from "react-router-dom";
import { usePostContext } from "../../contexts/PostContext";
import classes from "./PostPage.module.css";

function PostPage() {
  const { post } = usePostContext();

  if (!post) {
    return <p>Loading post...</p>;
  }

  return (
    <section className={classes.root}>
      <nav aria-label="Post navigation">
        <ul className={classes.navigation}>
          <li>
            <NavLink
              to="detail"
              className={({ isActive }) =>
                isActive ? classes.activeLink : classes.link
              }
              end
            >
              Detail
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`owner/${post.userId}`}
              className={({ isActive }) =>
                isActive ? classes.activeLink : classes.link
              }
            >
              Owner
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={classes.content}>
        <Outlet />
      </div>
    </section>
  );
}

export default PostPage;