import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { menuItems } from './menuData';
import { Nav, MenuItem, MenuLink, Submenu, SubmenuItem } from './Menu.styles';

type MenuProps = {
  onLinkClick?: () => void;
};

export const Menu = ({ onLinkClick }: MenuProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [openSubmenuMobile, setOpenSubmenuMobile] = useState(false);

  // Detecta se é mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 775);
    handleResize(); // roda uma vez ao iniciar
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleProdutosClick(e: React.MouseEvent) {
    e.preventDefault();

    if (isMobile) {
      // 👉 No celular, abre/fecha o submenu
      setOpenSubmenuMobile(prev => !prev);
    } else {
      // 👉 No desktop, rola até a seção
      if (location.pathname === '/') {
        const section = document.getElementById('produtos');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/', { state: { scrollTo: 'produtos' } });
      }
      onLinkClick?.();
    }
  }

  function handleMouseEnter(id: number) {
    if (!isMobile) setOpenMenu(id);
  }

  function handleMouseLeave() {
    if (!isMobile) setOpenMenu(null);
  }

  function handleSubmenuClick(path: string) {
    setOpenMenu(null);
    setOpenSubmenuMobile(false);
    navigate(path);
    onLinkClick?.();
  }

  return (
    <Nav>
      {menuItems.map(item => (
        <MenuItem
          key={item.id}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          {item.title === 'Produtos' ? (
            <MenuLink
              to={item.path ?? '#'}
              onClick={handleProdutosClick}
            >
              {item.title}
            </MenuLink>
          ) : (
            <MenuLink
              to={item.path ?? '#'}
              onClick={onLinkClick}
            >
              {item.title}
            </MenuLink>
          )}

          {item.submenu && (
            <Submenu
              $isOpen={
                (!isMobile && openMenu === item.id) ||
                (isMobile && openSubmenuMobile)
              }
            >
              {item.submenu.map((sub, index) => (
                <SubmenuItem key={index}>
                  <MenuLink
                    to={sub.path}
                    onClick={() => handleSubmenuClick(sub.path)}
                  >
                    {sub.title}
                  </MenuLink>
                </SubmenuItem>
              ))}
            </Submenu>
          )}
        </MenuItem>
      ))}
    </Nav>
  );
};
