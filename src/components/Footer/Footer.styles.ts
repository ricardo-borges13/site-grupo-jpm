import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #e3b021;
  color: #000;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  margin-top: 4rem;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1.2fr;
  align-items: start;
  padding: 0.5rem 1rem 0rem 4rem;


  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    text-align: center;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

export const FooterColumn = styled.div`
  h4 {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    position: relative;

    &::after {
      content: '';
      display: block;

      width: 200px;
      height: 2px;
      background-color: #fff;
      margin-top: 4px;
    }
  }

    address{
      display: flex;
      flex-direction: column;
      gap: 0.01rem;
      font-style: normal;
      line-height: 1.4;
    }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 0.3rem;

    li {
      margin: 0.1rem 0;

      a {
        color: #000;
        text-decoration: none;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  p {
    margin: 0.3rem 0;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  svg {
    font-size: 1rem;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  border-top: 2px solid #fff;
  font-size: 0.85rem;
`;

