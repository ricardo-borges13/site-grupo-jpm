import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Layout } from '../components/Layout/Layout';
import { lazy } from 'react';

const NotFound = lazy(() => import('../pages/NotFound'));
const Empresa = lazy(() => import('../pages/Empresa'));
const TrabalheConosco = lazy(() => import('../pages/TrabalheConosco'));
const EntreEmContato = lazy(() => import('../pages/EntreEmContato'));
const MateriaisEletricos = lazy(() => import('../pages/MateriaisEletricos'));
const BorrachasIndustriais = lazy(() => import('../pages/BorrachasIndustriais'));
const AcessoriosManutencao = lazy(() => import('../pages/AcessoriosManutencao'));
const Automacao = lazy(() => import('../pages/Automacao'));
const Feira2025 = lazy(() => import('../pages/Eventos/Feira2025'));


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
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
      { path: '/eventos/expousipa-2025', element: <Feira2025 /> },
      { path: '/contato', element: <EntreEmContato /> },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
