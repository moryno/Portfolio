import styled from "styled-components";

const Container = styled.div`
  width: 30%;
  height: 35vh;
  margin-top: 1.25rem;
  border: 2px solid rgb(243 242 242);
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;

const Browser = styled.div`
  height: 20px;
  background-color: rgb(243 242 242);
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;
`;

const Circle = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  margin: 3px;
  background-color: white;
`;

const Image = styled.img`
  width: 100%;
  transition: all 10s ease;

  &:hover {
    transform: translateY(-100%);
  }
`;

export const Product = ({ img, link }) => {
  return (
    <Container>
      <Browser>
        <Circle />
        <Circle />
        <Circle />
      </Browser>
      <a href={link} target="_blank" rel="noreferrer">
        <Image src={img} />
      </a>
    </Container>
  );
};
