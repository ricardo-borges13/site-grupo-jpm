import { Menu } from '../Menu/Menu';
import * as S from './HeaderMain.styles';
import logo from '../../assets/images/LogoJPM.png';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const HeaderMain = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
   const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); // muda o estado ao rolar
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <S.HeaderContainer $isScrolled={isScrolled}>
      <S.HeaderContent>
        <S.Image src={logo} alt="Logo" $isScrolled={isScrolled} />
        <S.MenuWrapper>
          <S.MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </S.MenuToggle>

          <S.MenuContainer $open={menuOpen}>
            <Menu />
          </S.MenuContainer>
          <S.ContactButton onClick={() => navigate('/contato')}>
            Entre em Contato
            {<FaAngleRight  size={16}  className='arrow' />}
          </S.ContactButton>
        </S.MenuWrapper>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
