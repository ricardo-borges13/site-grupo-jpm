import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1.5rem;
  margin: 3rem auto;
  max-width: 1100px;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  caret-color: transparent;

  header {
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: rgb(26, 26, 26);
      margin-bottom: 1rem;
      text-transform: capitalize;
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

  @media (max-width: 768px) {
    padding: 0 1rem;

    header h1 {
      font-size: 1.6rem;
    }
  }

  .map-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  color: #1a73e8;
}
`;


