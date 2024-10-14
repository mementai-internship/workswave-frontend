import RootLayout from '@/layout/root';
import BoardPage from '@/pages/basicSetting/BoardPage';
import CalendarPage from '@/pages/basicSetting/CalendarPage';
import HolidayPage from '@/pages/basicSetting/HolidayPage';
import HourlyRangePage from '@/pages/basicSetting/HourlyRangePage';
import SalaryRangePage from '@/pages/basicSetting/SalaryRangePage';
import WagePage from '@/pages/basicSetting/WagePage';
import WorkingPage from '@/pages/basicSetting/WorkingPage';
import HomePage from '@/pages/home/HomePage';
import ManagementOfficePage from '@/pages/officeSetting/ManagementOfficePage';
import BoardViewPage from '@/pages/userBoard/view/BoardViewPage';
import BoardWritePage from '@/pages/userBoard/write/BoardWritePage';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

// TODO: lazy load, preload는 나중에 하겠습니둥.
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        children: [],
      },
      {
        path: '/basic-setting',
        children: [
          {
            index: true,
            element: <Navigate to="/basic-setting/working" replace />,
          },
          {
            path: 'working',

            element: <WorkingPage />,
          },
          {
            path: 'wage',
            index: true,
            element: <WagePage />,
          },
          {
            path: 'hourly-range',
            element: <HourlyRangePage />,
          },
          {
            path: 'holiday',
            element: <HolidayPage />,
          },
          {
            path: 'calendar',
            element: <CalendarPage />,
          },
          {
            path: 'board',
            element: <BoardPage />,
          },
          {
            path: 'salary-range',
            element: <SalaryRangePage />,
          },
        ],
      },
      {
        path: '/office-setting',
        element: <ManagementOfficePage />,
      },
      {
        path: '/board/view',
        element: <BoardViewPage />,
      },
      {
        path: '/board/write',
        element: <BoardWritePage />,
      },

    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
