// type HeaderMainProps = {
//     logo: string,
//     menu: string,
//     botton: string,

// }
const menuItems = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'A Empresa', path: '/empresa' },
  {
    id: 3,
    title: 'Produtos',
    path: '/produtos',
    submenu: [
      { title: 'Produtos Elétricos', path: '/produtos/eletricos' },
      {
        title: 'Borrachas Industriais',
        path: '/produtos/borrachasindustriais',
      },
      { title: 'Acessórios para Manutenção', path: '/produtos/acessorios' },
      { title: 'Automação', path: '/produtos/automacao' },
    ],
  },
  { id: 4, title: 'Trabalhe Conosco' },
];

import { Link } from 'react-router-dom';
import { useState } from 'react';

export const HeaderMain = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow-sm">
      {/* Logo */}
      <img src="/logo.png" alt="Logo" className="h-10" />

      {/* Menu */}
      <nav className="flex items-center gap-8">
        {menuItems.map((item, index) => (
          <div key={index} className="relative">
            {item.submenu ? (
              <>
                <button
                  onClick={() => toggleSubmenu(index)}
                  className="font-medium hover:text-amber-500"
                >
                  {item.title}
                </button>
                {openMenu === index && (
                  <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow-md">
                    {item.submenu.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.path}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link to={item.path} className="font-medium hover:text-amber-500">
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Botão de destaque */}
      <Link
        to="/contato"
        className="bg-amber-500 text-white font-semibold py-2 px-5 rounded-full hover:bg-amber-600 transition"
      >
        Entre em Contato
      </Link>
    </header>
  );
};
