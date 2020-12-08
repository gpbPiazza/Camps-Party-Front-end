import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 1rem 0;
  border-radius: 0.2rem;
  background-color: var(--color-primary);
`;
const Content = styled(Link)`
  display: block;
  padding: 1rem;
  text-decoration: none;
  color: var(--color-light);
  pointer-events: none;
`;
export { Container, Content };
