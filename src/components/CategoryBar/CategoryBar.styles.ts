import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; 
  padding: 15px 0;   
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 1300px; /* controla a largura máxima */
  background: #eef2f7;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),   
  0 8px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 30px;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 8px 12px;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    color: #444;
  }
`;

export const Icon = styled.div`
  font-size: 28px;
  color: #222;
  margin-bottom: 6px;
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #222;
`;

export const Divider = styled.div`
  width: 1px;
  height: 35px;
  background-color: #aaa;

  @media (max-width: 768px) {
    display: none; /* esconde divisores em telas pequenas */
  }
`;
