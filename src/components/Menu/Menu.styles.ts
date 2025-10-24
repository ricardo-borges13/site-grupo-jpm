import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 1045px) {
    gap: 2.5rem;
  }

  @media (max-width: 960px) {
    gap: 1rem;
  }

  @media (max-width: 781px) {
    align-items: center;
    gap: 0.8rem;
  }
`;

export const MenuItem = styled.div`
  position: relative;
  display: inline-block;

  &:hover ul {
    display: block;
  }

  /* Quando eu passo o mouse no MenuItem, faço a linha do link filho crescer */
  &:hover > a::before {
    width: 100%;
  }
`;

export const MenuLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: #222;
  font-weight: 500;
  transition: color 0.3s;

  /* Linha superior invisível por padrão */
  &::before {
    content: '';
    position: absolute;
    top: -10px; /* controla a distância acima do texto */
    left: 0;
    width: 0%;
    height: 4px; /* espessura da linha */
    background-color: #e89119;
    transition: width 0.3s ease;
    border-radius: 2px;
  }

  &:hover {
    color: #e89119;
  }
`;

export const Submenu = styled.ul<{ $isOpen?: boolean }>`
 opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  transition:
    opacity 0.5s ease,
    transform 0.3s ease;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};

  position: absolute;
  top: 100%;
  left: 0;
  background: #dfdedeff;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  list-style: none;
  padding: 0.5rem 0;
  min-width: 220px;
  z-index: 1000;
`;

export const SubmenuItem = styled.li`
  padding: 0;

  a {
    display: block;
    padding: 0.6rem 1rem;
    color: #333;
    text-decoration: none;
    transition: background-color 0.4s ease;

    &:hover {
      background: #f9f9f9;
      color: #e89119;
    }
  }
`;
