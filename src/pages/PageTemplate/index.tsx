import {Link, NavLink, Outlet } from "react-router-dom";
import classes from "./PageTemplate.module.css";

function PageTemplate() {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <div className={classes.headerInner}>
          <Link to="/" className={classes.brand}>
            <h1>Exam Typescript React</h1>
          </Link>

          <nav aria-label="Main navigation">
            <ul className={classes.navigation}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.activeLink : classes.link
                  }
                >
                  Home
                </NavLink>
              </li>
            </ul>
        </nav>
        </div>
      </header>

      <main className={classes.main}>
        <Outlet />
      </main>

      <footer className={classes.footer}>
        <p>
          Created by <i>[FirstName LASTNAME]</i>
        </p>
        <p>
          <time dateTime="2026-02-13">13/02/2026</time>
        </p>
      </footer>
    </div>
  );
}

export default PageTemplate;