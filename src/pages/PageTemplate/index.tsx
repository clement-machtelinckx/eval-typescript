import { NavLink, Outlet } from "react-router-dom";
import classes from "./PageTemplate.module.css";

function PageTemplate() {
  return (
    <div className={classes.root}>
      <header>
        <nav className={classes.nav}>
          <NavLink to="/">Home</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>
          Par <i>Clément MACHTELINCKX</i> le <time dateTime="2026-02-13">13/02/2026</time>
        </p>
      </footer>
    </div>
  );
}

export default PageTemplate;