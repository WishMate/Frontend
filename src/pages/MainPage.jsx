import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <h1>Main Page</h1>
      <Link to="/signup">
        <Button variant="outlined">Sign UP</Button>
      </Link>
    </div>
  );
}
