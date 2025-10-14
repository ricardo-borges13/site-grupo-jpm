export const menuItems = [
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