import styled from "styled-components";

export const HeaderSection = styled.div`
  display: flex;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
  height: 80vh;
  font-size: 1.6rem;
  background-color: #f7f4f0;
  z-index: 10;
  @media screen and (max-width: 978px) {
    flex-direction: column;
    height: 90vh;
  }
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
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

export const Logodiv = styled.div`
  height: 5rem;
  transform: translateY(-3.5rem);
  width: 70%;
  float: right;

  @media screen and (max-width: 978px) {
    width: 100%;
    transform: translateY(0);
  }
  .slide {
    height: 5rem;
    margin-right: 1rem;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
`;

export const BestCollection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  height: 40rem;
  width: 100%;

  .sectionheader {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    height: 20%;
    .h2 {
      font-size: 1.8rem;
      margin-bottom: 0;
    }
    p {
      font-size: 1.2rem;
    }
  }
  .sectionbody {
    display: flex;
    height: 80%;
    .photo {
      width: 50%;
      @media screen and (max-width: 978px) {
        width: 100%;
      }
    }
    .text {
      width: 50%;
      padding: 1rem 2rem;

      p {
        font-size: 1rem;
        ul {
          list-style-type: none;
          padding:0;
        }
      }
      button {
        margin-right: 1rem;
      }
      @media screen and (max-width: 978px) {
        width: 100%;
      }
    }
    @media screen and (max-width: 978px) {
      flex-direction: column;
      padding: 0;
    }
  }
  @media screen and (max-width: 978px) {
    padding: 0;
  }
`;
