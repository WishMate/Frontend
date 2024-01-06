import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

export default function NavBar() {
  return (
    <NavContainer>
      <LogoContainer>
        {/* 로고 이미지와 텍스트 */}
        <ImageContainer>
          <img src={logo} alt="Logo" />
        </ImageContainer>
        <LogoTextContainer>
          <h2>Wish Mate</h2>
        </LogoTextContainer>
      </LogoContainer>
      {/* 로그인 및 회원가입 */}
      <SignContainer>
        <Link to="/signin">
          <SignButton1>Sign In</SignButton1>
        </Link>
        <Link to="/signup">
          <SignButton2>Sign Up</SignButton2>
        </Link>
      </SignContainer>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  ${({ theme }) => theme.flexRowSet("space-between", "center")}
  font-size: ${({ theme }) => theme.calcRem(20)};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.calcRem(15)};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  margin-right: ${({ theme }) => theme.calcRem(10)};
  img {
    width: ${({ theme }) => theme.calcRem(50)};
    height: auto;
  }
`;

const LogoTextContainer = styled.div`
  h2 {
    font-family: "Modak";
    font-size: ${({ theme }) => theme.calcRem(35)};
    margin: 0;
  }
`;

const SignContainer = styled.div`
  ${({ theme }) => theme.flexRowSet()}
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const SignButton1 = styled.button`
  padding: ${({ theme }) => theme.calcRem(10)} ${({ theme }) => theme.calcRem(20)};
  font-size: ${({ theme }) => theme.calcRem(20)};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.white};
`;

const SignButton2 = styled.button`
  padding: ${({ theme }) => theme.calcRem(10)} ${({ theme }) => theme.calcRem(20)};
  font-size: ${({ theme }) => theme.calcRem(20)};
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.calcRem(30)};
`;
