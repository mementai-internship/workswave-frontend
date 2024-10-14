import RootLayout from '@/layout/root';
import BoardPage from '@/pages/basicSetting/BoardPage';
import CalendarPage from '@/pages/basicSetting/CalendarPage';
import HolidayPage from '@/pages/basicSetting/HolidayPage';
import HourlyRangePage from '@/pages/basicSetting/HourlyRangePage';
import SalaryRangePage from '@/pages/basicSetting/SalaryRangePage';
import WagePage from '@/pages/basicSetting/WagePage';
import WorkingPage from '@/pages/basicSetting/WorkingPage';
import ContractManagement from '@/pages/documentManagement/ContractManagement';
import HolidayManagement from '@/pages/documentManagement/HolidayManagement';
import CertificateManagement from '@/pages/documentManagement/certificationManagement/CertificateManagement';
import HomePage from '@/pages/home/HomePage';
import Login from '@/pages/login/Login';
import ManagementOfficePage from '@/pages/officeSetting/ManagementOfficePage';
import SalarySettlementPage from '@/pages/salarySettlement/SalarySettlementPage';
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
        path: '/salary-settlement',
        element: <SalarySettlementPage />,
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
        path: '/document-management',
        children: [
          {
            index: true,
            element: <Navigate to="/document-management/certificate-management" replace />,
          },
          {
            path: 'certificate-management',
            element: <CertificateManagement />,
          },
          {
            path: 'contract-management',
            element: <ContractManagement />,
          },
          {
            path: 'holiday-management',
            element: <HolidayManagement />,
          },
        ],
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
