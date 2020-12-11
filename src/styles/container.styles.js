import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.2rem;
  background-color: var(--color-light-transparent);
  cursor: pointer;

  margin: 0.3rem 0;
`;

export const LogoContainer = styled.div`
  background-color: var(--color-primary);
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  z-index: 9;

  & > img {
    margin: 0 0.5rem 0 1rem;
  }

  & > h2 {
    margin: 0 0.5rem 0 0;
  }

  @media (max-width: 39.9em) {
    & > img {
      height: 3rem;
    }

    & > h2 {
      font-size: 1.2rem;
    }
  }
`;

export const Title = styled.div`
  margin-bottom: 20px;
`;

export default MainContainer;
