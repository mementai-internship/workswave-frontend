import { Suspense, lazy } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import DocumentManagementLayout from '@/components/DocumentManagement/DocumentManagementLayout';
import WorkManagementLayout from '@/components/WorkManagement/WorkManagementLayout';
import RootLayout from '@/layout/root';
import BoardPage from '@/pages/basicSetting/BoardPage';
import CalendarPage from '@/pages/basicSetting/CalendarPage';
import DayOffPage from '@/pages/basicSetting/DayOffPage';
import HourlyRangePage from '@/pages/basicSetting/HourlyRangePage';
import HrManagementSettingPage from '@/pages/basicSetting/HrManagementPage';
import SalaryRangePage from '@/pages/basicSetting/SalaryRangePage';
import WagePage from '@/pages/basicSetting/WagePage';
import ContractManagement from '@/pages/documentManagement/ContractManagement';
import TimeoffManagement from '@/pages/documentManagement/TimeoffManagement';
import ManagementDeleteOfficePage from '@/pages/officeSetting/ManagementDeleteOfficePage';
import CommuteManagementPage from '@/pages/workManagement/CommuteManagementPage';
import PartManagementPage from '@/pages/workManagement/PartManagementPage';

const HomePage = lazy(() => import('@/pages/home/HomePage'));
const Login = lazy(() => import('@/pages/login/Login'));
const NotFound = lazy(() => import('@/routes/Notfound'));
const PrivateRoute = lazy(() => import('@/routes/PrivateRoute'));

const SalarySettlementPage = lazy(() => import('@/pages/salarySettlement/SalarySettlementPage'));
const HolidayCalendarPage = lazy(() => import('@/pages/holidayCalendar/HolidayCalendarPage'));
const DayoffManagementPage = lazy(() => import('@/pages/dayoffManagement/DayoffManagement'));
const WorkManagementPage = lazy(() => import('@/pages/workManagement/WorkManagementPage'));
const WorkingPage = lazy(() => import('@/pages/basicSetting/WorkingPage'));
const ManagementOfficePage = lazy(() => import('@/pages/officeSetting/ManagementOfficePage'));
const CertificateManagement = lazy(
  () => import('@/pages/documentManagement/certificationManagement/CertificateManagement')
);
const EntireHistoryPage = lazy(
  () => import('@/pages/otManagement/EntireHistory/EntireHistoryPage')
);
const OtManagementPage = lazy(() => import('@/pages/otManagement/OtManagementPage'));
const SimpleMenuPage = lazy(() => import('@/pages/simpleMenu/SimpleMenuPage'));
const SuperManagerSetting = lazy(() => import('@/pages/memberManagement/SuperManagerSetting'));
const ApprovalHistory = lazy(
  () => import('@/pages/dayoffManagement/approvalHistory/ApprovalHistory')
);
const MemberInfoPage = lazy(() => import('@/pages/memberManagement/MemberInfoPage'));
const MemberManagementPage = lazy(() => import('@/pages/memberManagement/MemberManagementPage'));

// TODO: lazy load, preload는 나중에 하겠습니둥.
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <RootLayout />
      </Suspense>
    ),
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: '/',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            ),
          },
          {
            path: 'salary-settlement',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <SalarySettlementPage />
              </Suspense>
            ),
          },
          {
            path: '/holiday-calander',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <HolidayCalendarPage />
              </Suspense>
            ),
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
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <WorkingPage />
                  </Suspense>
                ),
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
                path: 'day-off',
                element: <DayOffPage />,
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
              {
                path: 'hr',
                element: <HrManagementSettingPage />,
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
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <ManagementOfficePage />
                  </Suspense>
                ),
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
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <WorkManagementPage />
                  </Suspense>
                ),
              },
              {
                path: 'partTime',
                element: <PartManagementPage />,
              },
              {
                path: 'commute',
                element: <CommuteManagementPage />,
              },
            ],
          },
          {
            path: '/document-management',
            element: <DocumentManagementLayout />,
            children: [
              {
                index: true,
                element: <Navigate to="/document-management/certificate-management" replace />,
              },
              {
                path: 'certificate-management',
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <CertificateManagement />
                  </Suspense>
                ),
              },
              {
                path: 'contract-management',
                element: <ContractManagement />,
              },
              {
                path: 'timeoff-management',
                element: <TimeoffManagement />,
              },
            ],
          },
          {
            path: '/member-management',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <MemberManagementPage />
              </Suspense>
            ),
          },
          {
            path: '/member-management/member-info',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <MemberInfoPage />
              </Suspense>
            ),
          },
          {
            path: '/dayoff-management',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <DayoffManagementPage />
              </Suspense>
            ),
          },
          {
            path: '/dayoff-management/approval-history',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <ApprovalHistory />
              </Suspense>
            ),
          },
          {
            path: '/member-management/supermanager-setting',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <SuperManagerSetting />
              </Suspense>
            ),
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
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <SimpleMenuPage />
              </Suspense>
            ),
          },
          {
            path: 'ot-management',
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <OtManagementPage />
              </Suspense>
            ),
          },
          {
            path: 'ot-management/entire-history',
            element: <EntireHistoryPage />,
          },
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
