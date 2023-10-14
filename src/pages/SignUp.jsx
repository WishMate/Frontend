import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SignUp() {
  return (
    <Container>
      <h1>Sign Up</h1>
      <FormContainer>
        <TextField
          variant="outlined"
          margin="normal"
          required
          // fullWidth
          id="id"
          label="User ID"
          name="id"
          autoComplete="id"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          // fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          // fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          // fullWidth
          name="password"
          label="Confirm Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
      </FormContainer>
      <ButtonContainer>
        <Link to="/">
          <Button variant="outlined">Sign in</Button>
        </Link>
        <Link to="/">
          <Button variant="outlined">Back</Button>
        </Link>
      </ButtonContainer>
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

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
