import styled from 'styled-components';

export const Card = styled.div<{ side: 'left' | 'right' }>`
  position: relative;
  overflow: hidden;
  width: 70%;
  max-width: 500px;
  border-radius: ${({ side }) =>
  side === 'right' ? '100% 0 0 100%' : '0 100% 100% 0'};
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.55);
   transition: transform 0.3s ease, box-shadow 0.3s ease;
  
       &:hover {
      transform: scale(1.03);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
       }

  img {    
    height: 270px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  text-align: center;
  color: #fff;
 

  h3 {
    margin-bottom: 130px;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 15px;
  border-radius: 8px;
  }
`;
