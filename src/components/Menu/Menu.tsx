import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { menuItems } from './menuData';
import { Nav, MenuItem, MenuLink, Submenu, SubmenuItem } from './Menu.styles';

type MenuProps = {
  onLinkClick?: () => void; // ✅ função opcional
};

export const Menu = ({ onLinkClick }: MenuProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  // controla qual submenu está aberto

  function handleProdutosClick(e: React.MouseEvent) {
    e.preventDefault(); // evita navegação padrão
    if (location.pathname === '/') {
      const section = document.getElementById('produtos');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: 'produtos' } });
    }
    onLinkClick?.(); // ✅ fecha menu
  }

  function handleMouseEnter(id: number) {
    setOpenMenu(id);
  }

  function handleMouseLeave() {
    setOpenMenu(null);
  }

  function handleSubmenuClick(path: string) {
    setOpenMenu(null); // fecha o submenu
    navigate(path); // navega pra página do item
    onLinkClick?.(); // ✅ fecha menu
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
            <MenuLink to={item.path ?? '#'} onClick={handleProdutosClick}>
              {item.title}
            </MenuLink>
          ) : (
            <MenuLink
              to={item.path ?? '#'}
              onClick={onLinkClick} // ✅ fecha menu ao clicar em qualquer link
            >
              {item.title}
            </MenuLink>
          )}

          {item.submenu && (
            <Submenu $isOpen={openMenu === item.id}>
              {item.submenu.map((sub, index) => (
                <SubmenuItem key={index}>
                  <MenuLink
                    to={sub.path} // navegação correta
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
