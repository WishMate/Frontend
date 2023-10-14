import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SignUp() {
  return (
    <Container>
      <h1>Sign Up</h1>
      <Link to="/">
        <Button variant="outlined">Back</Button>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
