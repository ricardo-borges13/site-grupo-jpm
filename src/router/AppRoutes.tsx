import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { NotFound } from '../pages/NotFound/NotFound';
import { Layout } from '../components/Layout/Layout';
import { Empresa } from '../pages/Empresa/Empresa';
import { TrabalheConosco } from '../pages/TrabalheConosco/TrabalheConosco';
import { EntreEmContato } from '../pages/EntreEmContato/EntreEmContato';
import { MateriaisEletricos } from '../pages/MateriaisEletricos/MateriaisEletricos';
import { BorrachasIndustriais } from '../pages/BorrachasIndustriais/BorrachasIndustriais';
import { AcessoriosManutencao } from '../pages/AcessoriosManutencao/AcessoriosManutencao';
import { Automacao } from '../pages/Automacao/Automacao';
import { Feira2025 } from '../pages/Eventos/Feira2025/Feira2025';


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/produtos',
        element: <Home />,
      },
      {
        path: '/empresa',
        element: <Empresa />,
      },
      { path: '/produtos/eletricos', element: <MateriaisEletricos /> },
      { path: '/produtos/borrachas', element: <BorrachasIndustriais /> },
      { path: '/produtos/acessorios', element: <AcessoriosManutencao /> },
      { path: '/produtos/automacao', element: <Automacao /> },
      { path: '/trabalheconosco', element: <TrabalheConosco /> },
      { path: '/eventos/feira2025', element: <Feira2025 /> },
      { path: '/contato', element: <EntreEmContato /> },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
