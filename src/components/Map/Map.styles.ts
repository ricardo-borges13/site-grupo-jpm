import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background-color: #f4f4f4;

  border: 4px solid #00214d;
  padding: 1rem 1rem;
  display: flex;
  justify-content: center;
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  iframe {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;
