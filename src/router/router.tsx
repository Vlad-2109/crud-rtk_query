import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Home } from '../pages/home/Home';
import { CreatePage } from '../pages/create/CreatePage';
import { EditPage } from '../pages/edit/EditPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'create', element: <CreatePage /> },
      { path: 'edit/:id', element: <EditPage /> },
    ],
  },
]);
