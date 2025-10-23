import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 3rem auto;
  padding: 0 1.5rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: #222;

  header {
    margin-bottom: 2rem;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #e8b341;
      margin-bottom: 1rem;
      letter-spacing: 0.7px;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
    }

    h2::after {
      content: '';
      display: block;
      width: 60px;
      height: 4px;
      background-color: #e8b341;
      margin-top: 0.5rem;
    }

    p {
      font-size: rem;
      color: #333;
      margin-bottom: 1rem;
      line-height: 1.7;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    header h1 {
      font-size: 1.6rem;
    }
  }
`;

export const ContainerProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin: 4.5rem 0 7.5rem 0;
`;
