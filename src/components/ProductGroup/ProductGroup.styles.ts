import styled from 'styled-components';

export const wrapper = styled.div`
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
`;

export const ImagesArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  justify-items: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
     }

  @media (max-width: 960px) {
    grid-template-columns: 1fr; /* No mobile, uma coluna só */
    img {
      max-width: 100%;
    }
  }
`;

