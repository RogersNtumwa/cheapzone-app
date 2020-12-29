import styled from "styled-components";

export const HeaderSection = styled.div`
  display: flex;
  clip-path: polygon(0 0, 100% 0, 100% 76%, 0% 100%);
  height: 80vh;
  font-size: 1.6rem;
  background-color: #f7f4f0;
  @media screen and (max-width: 978px) {
    flex-direction: column;
    height: 90vh;
  }
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  h2 {
    font-size: 3.5rem;
    @media screen and (max-width: 464px) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.2rem;
    @media screen and (max-width: 464px) {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 978px) {
    width: 100%;
  }
`;

export const HeaderImg = styled.div`
  width: 50%;

  @media screen and (max-width: 978px) {
    width: 100%;
    margin-top: 1rem;
  }
`;
