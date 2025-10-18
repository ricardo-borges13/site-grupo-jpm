import * as S from './Footer.styles';
import { LiaPhoneAltSolid } from 'react-icons/lia';
import { AiOutlineMail } from 'react-icons/ai';
import logo from '../../assets/images/LogoJPMBranco.png';
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.LogoArea>
          <img src={logo} alt="Logo JPM" />
        </S.LogoArea>

        <S.FooterColumn>
          <h4>Menu</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/empresa">A Empresa</Link>
            </li>
            <li>
              <Link to="/trabalhe-conosco">Trabalhe Conosco</Link>
            </li>
            <li>
              <Link to="/contato">Entre em Contato</Link>
            </li>
          </ul>
        </S.FooterColumn>

        <S.FooterColumn>
          <h4>Contato</h4>
          <address>
            <span>
            <LiaPhoneAltSolid /> (31) 3292-4650
          </span>
          <span>
            <AiOutlineMail /> sac@grupojpm.com.br
          </span>
          </address>

        </S.FooterColumn>

        <S.FooterColumn>
          <h4>Empresa</h4>
          <address>
            <span>J.P.M. - Borrachas e Materiais Elétricos Ltda.</span>
            <span>CNPJ: 01.952.213/0001-86</span>
            <span>Rua Soares Nogueira, 10 Bairro Camargos</span>
            <span>Belo Horizonte - MG - CEP: 30.520-330</span>
          </address>
        </S.FooterColumn>
      </S.FooterContent>
      <S.FooterBottom>
        <span>JPM - Todos os direitos reservados | Desenvolvido por Invetec</span>
      </S.FooterBottom>
    </S.FooterContainer>
  );
};
