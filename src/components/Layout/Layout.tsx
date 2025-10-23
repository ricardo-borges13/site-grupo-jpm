import { Outlet } from 'react-router-dom';
import { HeaderTop } from '../Header/HeaderTop';
import { headerInfo } from '../Header/headerInfo';
import { HeaderMain } from '../Header/HeaderMain';
import { Footer } from '../Footer/Footer';
import { ScrollToTop } from '..//ScrollToTop/ScrollToTop';
import * as S from './Layout.styles';
import { WhatsAppButton } from '../WhatsApp/WhatsAppButton';

export const Layout = () => {
  return (
    <S.LayoutWrapper>
      <ScrollToTop />
      <HeaderTop {...headerInfo} />
      <HeaderMain />

      <S.MainContent>
        <Outlet />
      </S.MainContent>

      <WhatsAppButton
        phone="5531998083231"
        message="Olá! Gostaria de mais informações."
      />
      <Footer />
    </S.LayoutWrapper>
  );
};
