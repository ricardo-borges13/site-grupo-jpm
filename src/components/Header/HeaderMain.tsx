import { Menu } from '../Menu/Menu';
import * as S from './HeaderMain.styles';
import logo from '../../assets/images/LogoJPM.png';

export const HeaderMain = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Image src={logo} alt="Logo" />
        <S.MenuWrapper>
          <Menu />
          <S.ContactButton to="/contato">Entre em Contato</S.ContactButton>
        </S.MenuWrapper>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
