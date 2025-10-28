import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1; /* empurra o footer para baixo */
  display: flex;
  flex-direction: column;
`;
