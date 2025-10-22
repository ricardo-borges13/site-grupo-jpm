import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 34px;
  left: 0;
  width: 100%;

 background: rgba(255, 255, 255, 0.9); /* leve transparência */
  backdrop-filter: blur(10px); /* efeito vidro fosco */
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "0 2px 6px rgba(0, 0, 0, 0.05)"};
  transition: all 0.3s ease;

  z-index: 100; /* mantém o header acima do conteúdo */

  /* muda a altura ao rolar */
  height: ${({ $isScrolled }) => ($isScrolled ? "70px" : "110px")};

   @media (max-width: 900px) {
    height: ${({ $isScrolled }) => ($isScrolled ? "100px" : "110px")};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px; /* mesma largura da faixa superior */
  margin: 0 auto; /* centraliza o bloco */
  padding: 0.5rem 2rem; /* padding lateral igual à barra azul */
  /* flex-wrap: nowrap; */
width: 100%;
  @media (max-width: 900px) {
    justify-content: space-between;
    margin-top: 15px;
  }

  @media (max-width: 775px) {
    justify-content: space-between;
    margin-top: 35px;
  }
`;

export const ContactButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  gap: 10px;
  background: linear-gradient(32deg, rgb(237, 116, 50) 0%, rgb(254, 170, 18) 100%) !important;
  color: #FFFDFD;
  font-weight: 600;
  padding: 0.4rem 1.4rem;
  min-width: 120px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #F4C27B;
    color: #121212;
  }

  .arrow {
    transform: translateX(2px); /* empurra levemente a seta à direita */
    transition: transform 0.2s ease;
  }

  &:hover .arrow {
    transform: translateX(6px); /* anima a seta ao passar o mouse */
  }

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 1051px) {
    padding: 0.2rem 0.2rem;
    font-weight: normal;
    text-align: center;
    font-size: 14px;
    min-width: 180px;
    white-space: nowrap;
  }
`;

export const Image = styled.img<{ $isScrolled: boolean }>`
  height: ${({ $isScrolled }) => ($isScrolled ? "60px" : "100px")};
  margin-right: 40px;
  transition: height 0.3s ease;

  @media (max-width: 900px) {
   height: ${({ $isScrolled }) => ($isScrolled ? "45px" : "40px")};

  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 54px; /* <-- controle fino da distância entre menu e botão */

     @media (max-width: 900px) {
    gap: 1rem;
  }
`;

export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: #001837;
  cursor: pointer;

  @media (max-width: 775px) {
    display: block;
  }
`;

/* 🔹 Container do menu e botão */
export const MenuContainer = styled.div<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 54px;

  @media (max-width: 775px) {
    position: absolute;
    top: 100%;
    right: 0;
    background: #fff;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 1rem 0;
    gap: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    transform: ${({ $open }) => ($open ? "translateY(0)" : "translateY(-150%)")};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  }
`;
