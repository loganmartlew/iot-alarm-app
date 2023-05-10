import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../features/layout/AppLayout';
import AlarmPage from '../features/alarm/AlarmPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <div>hello world</div>,
      },
      {
        path: '/alarms',
        element: <AlarmPage />,
      },
    ],
  },
]);
