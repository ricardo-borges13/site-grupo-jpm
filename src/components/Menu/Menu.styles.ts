import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const MenuItem = styled.div`
  position: relative;
  display: inline-block;

  &:hover ul {
    display: block;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: #222;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #f59e0b; /* cor âmbar */
  }

    @media (max-width: 768px) {
    display: block;
    width: 100%;
    padding: 0.4rem 0;
  }

`;

export const Submenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0.5rem 0;
  min-width: 220px;
  z-index: 100;
`;

export const SubmenuItem = styled.li`
  padding: 0;

  a {
    display: block;
    padding: 0.6rem 1rem;
    color: #333;
    text-decoration: none;
    transition: background 0.3s;

    &:hover {
      background: #f9f9f9;
      color: #f59e0b;
    }
  }
`;
