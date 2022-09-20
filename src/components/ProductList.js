import styled from "styled-components";
import { Product } from "./Product";
import { products } from "../data";

const Container = styled.div`
  width: 60vw;
  padding: 50px 0;
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const ProductInfo = styled.div`
  width: 75%;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
`;

const Description = styled.p`
  margin: 20px 0;
`;

const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ProductList = () => {
  return (
    <Container>
      <ProductInfo>
        <Title>Create & inspire. It's Maurice</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat
          vulputate purus vitae placerat. Mauris aliquam mattis arcu at
          malesuada. Vestibulum blandit urna felis, pellentesque blandit nibh
          pretium non.
        </Description>
      </ProductInfo>
      <ProductsContainer>
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </ProductsContainer>
    </Container>
  );
};
