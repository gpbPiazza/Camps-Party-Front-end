import styled from "styled-components";

const Image = styled.img`
  height: ${(props) => (props.height ? props.height : `5rem`)};
  background-color: ${(props) =>
    props.background ? props.background : "none"};
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  color: ${(props) =>
    props.background ? props.background : "var(--color-light)"};
`;

export { Image, Title };
