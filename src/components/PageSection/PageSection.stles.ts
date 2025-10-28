import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding-top: 145px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  min-height: 350px;
  caret-color: transparent;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 551px) {
    padding-top: 200px;
  }
`;

export const Left = styled.div<{ $bgColor: string }>`
  background-color: ${({ $bgColor }) => $bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    text-transform: uppercase;
    padding: 0 20px;
  }

  p {
    font-size: 1rem;
  }
`;

export const Right = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 60px auto;
  padding: 0 20px;
  line-height: 1.6;
`;
