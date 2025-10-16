import { menuItems } from "./menuData";
import { Nav, MenuItem, MenuLink, Submenu, SubmenuItem } from "./Menu.styles";

export const Menu = () => {
  return (
    <Nav>
      {menuItems.map((item) => (
        <MenuItem key={item.id}>
          <MenuLink to={item.path ?? "#"}>{item.title}</MenuLink>

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
  