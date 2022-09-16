import styled from "styled-components";

const Container = styled.main`
  height: 10vh;
  width: 100%;
  background-color: #ca1b37;
  color: #fff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem;
`;
const Left = styled.article`
  flex: 2;
`;

const Right = styled.section`
  flex: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const MenuItems = styled.article`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.625rem 1rem;
`;

const Button = styled.button`
  border: none;
  padding: 0.625rem;
  font-weight: 600;
  margin-left: 1rem;
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <Container>
      <Left></Left>
      <Right>
        <MenuItems>About</MenuItems>
        <MenuItems>Work</MenuItems>
        <MenuItems>Contact</MenuItems>
        <MenuItems>Blog</MenuItems>
        <Button>Resume</Button>
      </Right>
    </Container>
  );
};

export default TopBar;
