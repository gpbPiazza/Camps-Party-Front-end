import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 100%;

  border-radius: 0.2rem;
  background-color: var(--color-light);

  cursor: pointer;

  margin: 0.3rem 0;
`;

export const Text = styled.p`
  font-size: 1.15rem;
  color: var(--color-primary);
  line-height: 1.5rem;
`;

export const Title = styled.div`
  margin-bottom: 20px;
`;

export const TextContainer = styled.div`
  margin-top: 100px;
`;

export const LogoContainer = styled.div`
  background-color: var(--color-primary);
  position: fixed;
  top: 0px;
  padding: 1.5rem;
  left: 0px;
  width: 100%;
  @media (max-width: 600px) {
    padding: 0px;
  }
`;

export const Form = styled.form`
  background: var(--color-light);
`;
