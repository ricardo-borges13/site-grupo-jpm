import styled from 'styled-components'

export const Container = styled.section`
 background-color: #002147;
  color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: visible; /* importante pra permitir que o form ultrapasse a borda */
  margin:40px 0 30px 0;
`
export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 2rem;
  padding-left: 80px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

export const InfoArea = styled.div`

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif ;
    margin-bottom: 0.9rem;
    }

  p {
    font-size: 1.5rem;
    line-height: 1.6;
    font-family: Arial, Helvetica, sans-serif ;
    margin-bottom: 0.5rem;
  }
.contact{
  margin-top: 10rem;
}
  .contact p {
    margin-bottom: 0.3rem;
    font-size: 1.2rem;
  }
`

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 2;

  /* Faz o formulário “sair” da área azul para baixo */
  transform: translateY(30px);

  @media (max-width: 900px) {
    transform: translateY(40px);
  }
`
