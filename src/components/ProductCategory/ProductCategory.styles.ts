import styled from 'styled-components';


export const Card = styled.div`
  background-color: #f3f3f3;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }
`;
export const ImageWrapper = styled.div`
  background-color: #011c39;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  height: 150px;

  img {
    width: 100px;
    height: auto;
    filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.3));
  }
`;

export const Content = styled.div`
 padding: 1rem 0 0 1rem;



  h3 {
    font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #011c39;
  border-bottom: 2px solid #011c39;
  display: inline-block;
  padding-bottom: 0.3rem;
  }

  ul {
    list-style: disc;
    padding-left: 1.5rem;

  }

  li {
     font-size: 0.95rem;
  color: #333;
  margin-bottom: 0.4rem;
  }
`;
