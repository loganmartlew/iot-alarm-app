import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../features/layout/AppLayout';
import AlarmPage from '../features/alarm/AlarmPage';
import NewAlarmPage from '../features/alarm/NewAlarmPage';

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
      {
        path: '/alarms/new',
        element: <NewAlarmPage />,
      },
    ],
  },
]);
