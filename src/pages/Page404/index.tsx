import { Link } from "react-router-dom";

function Page404() {
  return (
    <>
      <p>404 Page</p>
      <p>
        <Link to="/">Go back home</Link>
      </p>
    </>
  );
}

export default Page404;