import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { CreatePage } from '../pages/create/CreatePage';
import { Layout } from '../components/layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'create', element: <CreatePage /> },
    ],
  },
]);
