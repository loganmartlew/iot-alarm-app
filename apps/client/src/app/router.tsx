import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../features/layout/AppLayout';
import AlarmPage from '../features/alarm/AlarmPage';
import NewAlarmPage from '../features/alarm/NewAlarmPage';
import EditAlarmPage from '../features/alarm/EditAlarmPage';
import RestPeriodPage from '../features/restPeriod/RestPeriodPage';

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
      {
        path: '/alarms/:id',
        element: <EditAlarmPage />,
      },
      {
        path: '/restperiods',
        element: <RestPeriodPage />,
      },
    ],
  },
]);
