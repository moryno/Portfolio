import { Instagram, LinkedIn, Reddit, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.main`
  flex: 0.5;
`;

const SocialIcon = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Vertical = styled.div`
  border-left: 1px solid black;
  height: 6.25rem;
`;

const Icon = styled.article`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftSideBar = () => {
  return (
    <Container>
      <SocialIcon>
        <Icon>
          <a
            href={`https://www.reddit.com/user/mngash`}
            target="_blank"
            rel={"noreferrer"}
          >
            <Reddit />
          </a>
        </Icon>

        <Icon>
          <a
            href={`https://twitter.com/MauriceNganga5`}
            target="_blank"
            rel={"noreferrer"}
          >
            <Twitter />
          </a>
        </Icon>

        <Icon>
          <Instagram />
        </Icon>

        <Icon>
          <a
            href={`https://www.linkedin.com/in/maurice-nganga-a6668b213/`}
            target="_blank"
            rel={"noreferrer"}
          >
            <LinkedIn />
          </a>
        </Icon>
        <Vertical />
      </SocialIcon>
    </Container>
  );
};

export default LeftSideBar;
