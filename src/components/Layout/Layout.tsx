import { Outlet } from 'react-router-dom';
import { HeaderTop } from '../Header/HeaderTop';
import { headerInfo } from '../Header/headerInfo';
import { HeaderMain } from '../Header/HeaderMain';
import { Footer } from '../Footer/Footer';
import { ScrollToTop } from "..//ScrollToTop/ScrollToTop"; 
import * as S from './Layout.styles';


export const Layout = () => {


  return (
    <S.LayoutWrapper>
      <ScrollToTop />
      <HeaderTop {...headerInfo} />
      <HeaderMain />

      <S.MainContent>

            <Outlet />


      </S.MainContent>

      <Footer />
    </S.LayoutWrapper>
  );
};
