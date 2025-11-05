import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 3rem auto;
  padding: 0 1.5rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: #222;
  caret-color: transparent;

  header {
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #e8b341;
      margin-bottom: 1rem;
      letter-spacing: 0.7px;
      text-transform: capitalize;
      margin-bottom: 1.5rem;
    }

    h2::after {
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      background-color: #d49b09;
      margin-top: 0.4rem;
    }

    p {
      font-size: 1rem;
      color: #333;
      line-height: 1.6;
      text-align: justify;
      margin-bottom: 1.5rem;
    }

    @media (max-width: 540px) {
      h2 {
        font-size: 1.4rem;
      }
    }
  }

  section {
    margin: 2.5rem 0 3rem 0;

    h3 {
      font-size: 1.4rem;
      color: #d49b09;
      border-left: 5px solid #d49b09;
      padding-left: 0.5rem;
    }

    ul {
      list-style: disc inside;
      margin-left: 1rem;

      li {
        line-height: 1.8;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;

    header h1 {
      font-size: 1.6rem;
    }
  }
`;

export const Divider = styled.hr`
  border: none;
  height: 4px;
  background: linear-gradient(to right, transparent, #d49b09, transparent);
  margin: 4rem auto;
  width: 80%;
  border-radius: 2px;
`;
