import { Link } from "@material-ui/core";
import { GitHub, LinkOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.main`
  width: 60vw;
  padding: 50px 0;
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.article`
  margin-bottom: 5rem;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3rem;
  padding-bottom: 1rem;
`;

const SubTitle = styled.span``;

const Table = styled.table`
  width: 100%;
`;

const TableRow = styled.tr`
  &:hover {
    background-color: coral;
  }
`;

const TableHead = styled.th`
  padding: 1rem 0;
  text-align: left;
`;

const TableBody = styled.td`
  padding: 1rem 0;
`;

const Archive = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Archive</Title>
        <SubTitle>A big list of things I’ve worked on</SubTitle>
      </TitleContainer>
      <Table>
        <TableRow>
          <TableHead>Year</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Made at</TableHead>
          <TableHead>Build with</TableHead>
          <TableHead>Link</TableHead>
        </TableRow>
        <TableRow>
          <TableBody>2021</TableBody>
          <TableBody>Quote App</TableBody>
          <TableBody>Wiggles Tech</TableBody>
          <TableBody>JavaScript - Ract - Firebase</TableBody>
          <TableBody>
            <LinkOutlined /> <GitHub />
          </TableBody>
        </TableRow>
        <TableRow>
          <TableBody>2021</TableBody>
          <TableBody>Quote App</TableBody>
          <TableBody>Wiggles Tech</TableBody>
          <TableBody>JavaScript - Ract - Firebase</TableBody>
          <TableBody>
            <LinkOutlined /> <GitHub />
          </TableBody>
        </TableRow>
        <TableRow>
          <TableBody>2021</TableBody>
          <TableBody>Quote App</TableBody>
          <TableBody>Wiggles Tech</TableBody>
          <TableBody>JavaScript - Ract - Firebase</TableBody>
          <TableBody>
            <LinkOutlined /> <GitHub />
          </TableBody>
        </TableRow>
        <TableRow>
          <TableBody>2021</TableBody>
          <TableBody>Quote App</TableBody>
          <TableBody>Wiggles Tech</TableBody>
          <TableBody>JavaScript - Ract - Firebase</TableBody>
          <TableBody>
            <LinkOutlined /> <GitHub />
          </TableBody>
        </TableRow>
        <TableRow>
          <TableBody>2021</TableBody>
          <TableBody>Quote App</TableBody>
          <TableBody>Wiggles Tech</TableBody>
          <TableBody>JavaScript - Ract - Firebase</TableBody>
          <TableBody>
            <LinkOutlined /> <GitHub />
          </TableBody>
        </TableRow>
        <TableRow>
          <TableBody>2021</TableBody>
          <TableBody>Quote App</TableBody>
          <TableBody>Wiggles Tech</TableBody>
          <TableBody>JavaScript - Ract - Firebase</TableBody>
          <TableBody>
            <LinkOutlined /> <GitHub />
          </TableBody>
        </TableRow>
        <TableRow>
          <TableBody>2021</TableBody>
          <TableBody>Quote App</TableBody>
          <TableBody>Wiggles Tech</TableBody>
          <TableBody>JavaScript - Ract - Firebase</TableBody>
          <TableBody>
            <LinkOutlined /> <GitHub />
          </TableBody>
        </TableRow>
        <TableRow>
          <TableBody>2021</TableBody>
          <TableBody>Quote App</TableBody>
          <TableBody>Wiggles Tech</TableBody>
          <TableBody>JavaScript - Ract - Firebase</TableBody>
          <TableBody>
            <LinkOutlined /> <GitHub />
          </TableBody>
        </TableRow>
        <TableRow>
          <TableBody>2021</TableBody>
          <TableBody>Quote App</TableBody>
          <TableBody>Wiggles Tech</TableBody>
          <TableBody>JavaScript - Ract - Firebase</TableBody>
          <TableBody>
            <LinkOutlined /> <GitHub />
          </TableBody>
        </TableRow>
        <TableRow>
          <TableBody>2021</TableBody>
          <TableBody>Quote App</TableBody>
          <TableBody>Wiggles Tech</TableBody>
          <TableBody>JavaScript - Ract - Firebase</TableBody>
          <TableBody>
            <LinkOutlined /> <GitHub />
          </TableBody>
        </TableRow>
        <TableRow>
          <TableBody>2021</TableBody>
          <TableBody>Quote App</TableBody>
          <TableBody>Wiggles Tech</TableBody>
          <TableBody>JavaScript - Ract - Firebase</TableBody>
          <TableBody>
            <LinkOutlined /> <GitHub />
          </TableBody>
        </TableRow>
        <TableRow>
          <TableBody>2021</TableBody>
          <TableBody>Quote App</TableBody>
          <TableBody>Wiggles Tech</TableBody>
          <TableBody>JavaScript - Ract - Firebase</TableBody>
          <TableBody>
            <LinkOutlined /> <GitHub />
          </TableBody>
        </TableRow>
      </Table>
    </Container>
  );
};

export default Archive;
