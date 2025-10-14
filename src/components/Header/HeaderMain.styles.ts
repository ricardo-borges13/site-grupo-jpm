import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem 4rem;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
   flex-wrap: wrap;
   paddi
`;

export const ContactButton = styled(Link)`
  background: #f59e0b;
  color: #fff;
  font-weight: bold;
  padding: 0.6rem 1.4rem;
  border-radius: 20px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: #d97706;
  }
    @media (max-width: 768px) {
    width: 80%;
    text-align: center;
  }
`;

export const Image = styled.img`
  height: 110px;
  display: block;
  
`;