import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import PartTime from '@/components/WorkManagement/PartTime/PartTime';
import WorkManagementLayout from '@/components/WorkManagement/WorkManagementLayout';
import RootLayout from '@/layout/root';
import BoardPage from '@/pages/basicSetting/BoardPage';
import CalendarPage from '@/pages/basicSetting/CalendarPage';
import HolidayPage from '@/pages/basicSetting/HolidayPage';
import HourlyRangePage from '@/pages/basicSetting/HourlyRangePage';
import SalaryRangePage from '@/pages/basicSetting/SalaryRangePage';
import WagePage from '@/pages/basicSetting/WagePage';
import WorkingPage from '@/pages/basicSetting/WorkingPage';
import DayoffManagementPage from '@/pages/dayoffManagement/DayoffManagement';
import ApprovalHistory from '@/pages/dayoffManagement/approvalHistory/ApprovalHistory';
import ContractManagement from '@/pages/documentManagement/ContractManagement';
import HolidayManagement from '@/pages/documentManagement/HolidayManagement';
import CertificateManagement from '@/pages/documentManagement/certificationManagement/CertificateManagement';
import HolidayCalendarPage from '@/pages/holidayCalendar/HolidayCalendarPage';
import HomePage from '@/pages/home/HomePage';
import Login from '@/pages/login/Login';
import MemberInfoPage from '@/pages/memberManagement/MemberInfoPage';
import MemberManagementPage from '@/pages/memberManagement/MemberManagementPage';
import SuperManagerSetting from '@/pages/memberManagement/SuperManagerSetting';
import ManagementDeleteOfficePage from '@/pages/officeSetting/ManagementDeleteOfficePage';
import ManagementOfficePage from '@/pages/officeSetting/ManagementOfficePage';
import EntireHistoryPage from '@/pages/otManagement/EntireHistory/EntireHistoryPage';
import OtManagementPage from '@/pages/otManagement/OtManagementPage';
import SalarySettlementPage from '@/pages/salarySettlement/SalarySettlementPage';
import SimpleMenuPage from '@/pages/simpleMenu/SimpleMenuPage';
import CommuteManagementPage from '@/pages/workManagement/CommuteManagementPage';
import WorkManagementPage from '@/pages/workManagement/WorkManagementPage';

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
        path: '/holiday-calander',
        element: <HolidayCalendarPage />,
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
        children: [
          {
            index: true,
            element: <Navigate to="/office-setting/office" replace />,
          },
          {
            path: 'office',
            element: <ManagementOfficePage />,
          },
          {
            path: 'delete-office',
            element: <ManagementDeleteOfficePage />,
          },
        ],
      },
      {
        path: '/work-management',
        element: <WorkManagementLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/work-management/working" replace />,
          },
          {
            path: 'working',
            element: <WorkManagementPage />,
          },
          {
            path: 'partTime',
            element: <PartTime />,
          },
          {
            path: 'commute',
            element: <CommuteManagementPage />,
          },
        ],
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
      {
        path: '/member-management',
        element: <MemberManagementPage />,
      },
      {
        path: '/member-management/member-info',
        element: <MemberInfoPage />,
      },
      {
        path: '/dayoff-management',
        element: <DayoffManagementPage />,
      },
      {
        path: '/dayoff-management/approval-history',
        element: <ApprovalHistory />,
      },
      {
        path: '/member-management/supermanager-setting',
        element: <SuperManagerSetting />,
      },
      // {
      //   path: '/board',
      //   children: [
      //     {
      //       index: true,
      //       element: <Navigate to="/board/view" replace />,
      //     },
      //     {
      //       path: '/board/view',
      //       element: <BoardViewPage />,
      //     },
      //     {
      //       path: '/board/write',
      //       element: <BoardWritePage />,
      //     },
      //   ],
      // },
      {
        path: 'simple-menu',
        element: <SimpleMenuPage />,
      },
      {
        path: 'ot-management',
        element: <OtManagementPage />,
      },
      {
        path: 'ot-management/entire-history',
        element: <EntireHistoryPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
