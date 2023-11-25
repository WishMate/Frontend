import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <h1>NavBar</h1>
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}
