import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from '../components/Layout/Layout';

// ⏳ Lazy loading das páginas
const Home = lazy(() => import('../pages/Home/Home'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const Empresa = lazy(() => import('../pages/Empresa/Empresa'));
const TrabalheConosco = lazy(() => import('../pages/TrabalheConosco/TrabalheConosco'));
const EntreEmContato = lazy(() => import('../pages/EntreEmContato/EntreEmContato'));
const MateriaisEletricos = lazy(() => import('../pages/MateriaisEletricos/MateriaisEletricos'));
const BorrachasIndustriais = lazy(() => import('../pages/BorrachasIndustriais/BorrachasIndustriais'));
const AcessoriosManutencao = lazy(() => import('../pages/AcessoriosManutencao/AcessoriosManutencao'));
const Automacao = lazy(() => import('../pages/Automacao/Automacao'));


// eslint-disable-next-line react-refresh/only-export-components
const Loading = () => <div style={{ textAlign: 'center', marginTop: '2rem' }}>Carregando...</div>;


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/produtos',
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/empresa',
        element: (
          <Suspense fallback={<Loading />}>
            <Empresa />
          </Suspense>
        ),
      },
      {
        path: '/produtos/eletricos',
        element: (
          <Suspense fallback={<Loading />}>
            <MateriaisEletricos />
          </Suspense>
        ),
      },
      {
        path: '/produtos/borrachas',
        element: (
          <Suspense fallback={<Loading />}>
            <BorrachasIndustriais />
          </Suspense>
        ),
      },
      {
        path: '/produtos/acessorios',
        element: (
          <Suspense fallback={<Loading />}>
            <AcessoriosManutencao />
          </Suspense>
        ),
      },
      {
        path: '/produtos/automacao',
        element: (
          <Suspense fallback={<Loading />}>
            <Automacao />
          </Suspense>
        ),
      },
      {
        path: '/trabalheconosco',
        element: (
          <Suspense fallback={<Loading />}>
            <TrabalheConosco />
          </Suspense>
        ),
      },
      {
        path: '/contato',
        element: (
          <Suspense fallback={<Loading />}>
            <EntreEmContato />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);
