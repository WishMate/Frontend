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
          <h2>로그인</h2>
        </Link>
        <Link to="/signup">
          <h2>회원가입</h2>
        </Link>
      </SignContainer>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  ${({ theme }) => theme.flexRowSet()}
  font-size: ${({ theme }) => theme.calcRem(20)};
  color: ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.calcRem(20)};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  margin-right: ${({ theme }) => theme.calcRem(10)};
  img {
    width: ${({ theme }) => theme.calcRem(40)};
    height: auto;
  }
`;

const LogoTextContainer = styled.div`
  h2 {
    font-family: "Modak";
    margin: 0;
  }
`;

const SignContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    margin: 0 ${({ theme }) => theme.calcRem(10)};
    h2 {
      margin: 0;
      font-weight: bold;
      cursor: pointer;
      transition: color 0.3s ease;
      &:hover {
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }
`;
