import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../features/layout/AppLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <div>hello world</div>,
      },
    ],
  },
]);
