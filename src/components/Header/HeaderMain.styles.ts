import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header` 

  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);     
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px; /* mesma largura da faixa superior */
  margin: 0 auto; /* centraliza o bloco */
  padding: 0.5rem 2rem; /* padding lateral igual à barra azul */
  flex-wrap: nowrap; 
`;

export const ContactButton = styled(Link)`
  background: #E89119;
  color: #FFFDFD;
  font-weight: bold;
  padding: 0.8rem 1.4rem;
  min-width: 120px;
  border-radius: 20px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: #F4C27B;
    color: #121212;
  }  
`;

export const Image = styled.img`
  height: 100px;
  margin-right: 40px;

  @media (max-width: 768px) {
   height: 40px;
   
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 54px; /* <-- controle fino da distância entre menu e botão */

    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  
`;