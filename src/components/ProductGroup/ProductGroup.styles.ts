import styled from 'styled-components';

export const wrapper = styled.div`
caret-color: transparent; 
  width: 80%;
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 20px; /* só nas laterais */

  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
`;

export const ImagesArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 40px;
  justify-items: center;

  > * {
    width: 80%;
  }

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
