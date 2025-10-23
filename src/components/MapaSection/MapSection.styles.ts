import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background-color: #00214d; /* azul escuro padrão */
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
