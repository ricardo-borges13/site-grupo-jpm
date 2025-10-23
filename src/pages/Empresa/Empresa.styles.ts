import styled from 'styled-components';

export const Container = styled.article`
  max-width: 1100px;
  margin: 3rem auto;
  padding: 0 1.5rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: #222;
  caret-color: transparent;

  header {
    margin-bottom: 2rem;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      color: #d49b09;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      color: #333;
    }
  }

  section {
    margin-bottom: 2.5rem;

    h2 {
      font-size: 1.4rem;
      font-weight: 600;
      color: #d49b09;
      border-left: 5px solid #d49b09;
      padding-left: 0.5rem;
      margin-bottom: 0.8rem;
    }

    p {
      margin-bottom: 0.8rem;
    }

    ul {
      list-style: disc inside;
      margin-left: 1rem;

      li {
        margin: 0.4rem 0;
      }
    }

    dl {
      margin-top: 1rem;

      dt {
        font-weight: 600;
        color: #000;
        margin-top: 0.6rem;
      }

      dd {
        margin-left: 1rem;
        color: #444;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;

    header h1 {
      font-size: 1.6rem;
    }

    section h2 {
      font-size: 1.2rem;
    }
  }
`;
