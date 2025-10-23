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
  padding: 0.5rem 3rem 0rem 0;

  @media (max-width: 915px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 730px) {
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

    @media (max-width: 900px) {
      width: 150px;
    }

      @media (max-width: 730px) {
      width: 100px;
    }
  }
`;

export const FooterColumn = styled.div`
  h4 {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    position: relative;
    text-shadow: 2px 2px 2px black;

    &::after {
      content: '';
      display: block;

      width: 200px;
      height: 2px;
      background-color: #fff;
      margin-top: 4px;

      @media (max-width: 1050px) {
        width: 100px;
        justify-content: center;
      }
    }
  }

  address {
    display: flex;
    flex-direction: column;
    gap: 0.01rem;
    font-style: normal;
    line-height: 1.4;

    span {
      @media (max-width: 840px) {
        font-size: 12px;
      }

      span {
        @media (max-width: 725px) {
          font-size: 11px;
        }
      }
    }
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

        @media (max-width: 840px) {
          font-size: 12px;
        }
      }
    }
  }
  svg {
    font-size: 1rem;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  border-top: 2px solid #fff;
  font-size: 0.85rem;

   @media (max-width: 730px) {
      font-size: 0.75rem;
    }
`;

export const Icone = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    font-size: 1.2rem; /* ← aqui você controla o tamanho do ícone */
    color: #000; /* pode mudar a cor se quiser */

    @media (max-width: 840px) {
          font-size: 1rem;
        }

  }
`
