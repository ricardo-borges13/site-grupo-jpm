import { Outlet } from 'react-router-dom';
import { HeaderTop, HeaderMain, headerInfo } from '../Header';
import { Footer } from '../Footer/Footer';
import { ScrollToTop } from '..//ScrollToTop/ScrollToTop';
import * as S from './Layout.styles';
import { WhatsAppButton } from '../WhatsApp/WhatsAppButton';
import { useState, useEffect } from 'react';
import { footerData } from '../Footer/footerData'

export const Layout = () => {
  const [whatsApp, setWhatsApp] = useState<{ phone?: string; message?: string }>({});

  useEffect(() => {
    fetch('/whatsApp.json')
      .then(res => res.json())
      .then(data => setWhatsApp(data))
      .catch(err => console.error('Erro ao carregar WhatsApp config:', err));
  }, []);

  return (
    <S.LayoutWrapper>
      <ScrollToTop />
      <HeaderTop {...headerInfo} />
      <HeaderMain />

      <S.MainContent>
        <Outlet />
      </S.MainContent>

       {whatsApp.phone && (
        <WhatsAppButton
          phone={whatsApp.phone}
          message={whatsApp.message || ''}
        />
      )}
      <Footer {...footerData} />
    </S.LayoutWrapper>
  );
};
