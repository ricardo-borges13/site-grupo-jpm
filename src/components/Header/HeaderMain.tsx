import { Menu } from "../Menu/Menu";
import * as S from "./HeaderMain.styles"
import logo from "../../assets/images/LogoJPM.png"

export const HeaderMain = () => {
  return (

    <S.HeaderContainer>
      <S.Image src={logo} alt="Logo" />
      <Menu />      
      <S.ContactButton to="/contato">Entre em Contato</S.ContactButton>
    </S.HeaderContainer>
    
    
  );
};