import styled from "styled-components";

export const HeaderSection = styled.div`
  display: flex;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
  height: 80vh;
  font-size: 1.6rem;
  background-color: #f7f4f0;
  z-index: 10;
  @media screen and (max-width: 600px) {
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
    @media screen and (max-width: 700px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 900px) {
      font-size: 1.5rem;
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
    /* padding: 0; */
  }
`;

export const HeaderImg = styled.div`
  width: 50%;

  @media screen and (max-width: 978px) {
    width: 100%;
    /* margin-top: 1rem; */
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

export const FooterSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  margin-top: 1rem;
  background-color: #f2efe4;
  /* color: #fff; */
  padding: 1rem;
  .Col:nth-child(1) {
    ul {
      list-style-type: none;
      display: flex;
      padding: 0;
      li {
        margin-right: 1rem;
      }
    }
  }
  .Col:not(:nth-child(1)) {
    .links {
      display: flex;
      flex-direction: column;
      font-size: 1.2rem;
    }
    ul {
      list-style-type: none;
      justify-content: center;
      padding: 1rem;
      li {
        padding: 0.5rem 0;
      }
    }
  }
`;
