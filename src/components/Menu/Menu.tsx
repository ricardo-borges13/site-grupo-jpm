import { useLocation, useNavigate } from 'react-router-dom';
import { menuItems } from "./menuData";
import { Nav, MenuItem, MenuLink, Submenu, SubmenuItem } from "./Menu.styles";

export const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
  }

  return (
    <Nav>
      {menuItems.map((item) => (
        <MenuItem key={item.id}>
          {item.title === 'Produtos' ? (

            <MenuLink to={item.path ?? "#"} onClick={handleProdutosClick}>
              {item.title}
            </MenuLink>
          ) : (
           
            <MenuLink to={item.path ?? "#"}>{item.title}</MenuLink>
          )}

          {item.submenu && (
            <Submenu>
              {item.submenu.map((sub, index) => (
                <SubmenuItem key={index}>
                  <MenuLink to={sub.path}>{sub.title}</MenuLink>
                </SubmenuItem>
              ))}
            </Submenu>
          )}
        </MenuItem>
      ))}
    </Nav>
  );
};
