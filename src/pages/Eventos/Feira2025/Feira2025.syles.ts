import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 0 auto;

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    text-align: justify;
    margin-bottom: 2rem;
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;

  img {
    width: 100%;
    height: clamp(160px, 22vw, 220px);
    object-fit: cover;
    border-radius: 12px;
    cursor: zoom-in;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }
  }
`;
