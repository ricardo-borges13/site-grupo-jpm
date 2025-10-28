import * as S from './Footer.styles';
import { BiSolidPhoneOutgoing } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import logo from '../../assets/images/Logo-JPM-Branco.png';
import { Link } from 'react-router-dom';
import { APP_VERSION } from '../../version';
import type { ContactInfo } from '../../types/contact';
import { menuItems } from '../Menu/menuData';

export const Footer = ({ phone, email }: ContactInfo) => {
  const footerItems = menuItems.filter(item => item.showInFooter);
 
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.LogoArea>
          <Link to="/">
            <img src={logo} alt="Logo JPM" />
          </Link>
        </S.LogoArea>

        <S.FooterColumn>
          <h4>Menu</h4>
          <ul>
            {footerItems.map(item => (
              <li key={item.id}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
            <li>
              <Link to="/contato">Entre em Contato</Link>
            </li>
          </ul>
        </S.FooterColumn>

        <S.FooterColumn>
          <h4>Contato</h4>
          <address>
            <span>
              <S.Icone>
                <BiSolidPhoneOutgoing />
                <a href="tel:+553132924650"> {phone} </a>
              </S.Icone>
            </span>
            <span>
              <S.Icone>
                {' '}
                <MdEmail />
                <a href="mailto:sac@grupojpm.com.br">{email}</a>
              </S.Icone>
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
        <span>
          © {new Date().getFullYear()} Grupo JPM Borrachas e Materiais
          Elétricos – Todos os direitos reservados. | Desenvolvido por Invetec
        </span>
        <br />
        <small>Versão {APP_VERSION}</small>
      </S.FooterBottom>
    </S.FooterContainer>
  );
};
