import { Suspense, lazy } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import DocumentManagementLayout from '@/components/DocumentManagement/DocumentManagementLayout';
import WorkManagementLayout from '@/components/WorkManagement/WorkManagementLayout';
import RootLayout from '@/layout/root';
import WorkingPage from '@/pages/basicSetting/WorkingPage';
import DayoffManagementPage from '@/pages/dayoffManagement/DayoffManagement';
import ApprovalHistory from '@/pages/dayoffManagement/approvalHistory/ApprovalHistory';
import CertificateManagement from '@/pages/documentManagement/certificationManagement/CertificateManagement';
import HolidayCalendarPage from '@/pages/holidayCalendar/HolidayCalendarPage';
import HomePage from '@/pages/home/HomePage';
import Login from '@/pages/login/Login';
import MemberInfoPage from '@/pages/memberManagement/MemberInfoPage';
import MemberManagementPage from '@/pages/memberManagement/MemberManagementPage';
import SuperManagerSetting from '@/pages/memberManagement/SuperManagerSetting';
import ManagementOfficePage from '@/pages/officeSetting/ManagementOfficePage';
import EntireHistoryPage from '@/pages/otManagement/EntireHistory/EntireHistoryPage';
import OtManagementPage from '@/pages/otManagement/OtManagementPage';
import SalarySettlementPage from '@/pages/salarySettlement/SalarySettlementPage';
import SimpleMenuPage from '@/pages/simpleMenu/SimpleMenuPage';
import WorkManagementPage from '@/pages/workManagement/WorkManagementPage';
import Loading from '@/routes/loading';

const NotFound = lazy(() => import('@/routes/Notfound'));
const PrivateRoute = lazy(() => import('@/routes/PrivateRoute'));

const ContractPage = lazy(() => import('@/pages/basicSetting/ContractPage'));
const BoardPage = lazy(() => import('@/pages/basicSetting/BoardPage'));
const CalendarPage = lazy(() => import('@/pages/basicSetting/CalendarPage'));
const DayOffPage = lazy(() => import('@/pages/basicSetting/DayOffPage'));
const HourlyRangePage = lazy(() => import('@/pages/basicSetting/HourlyRangePage'));
const HrManagementSettingPage = lazy(() => import('@/pages/basicSetting/HrManagementPage'));
const SalaryRangePage = lazy(() => import('@/pages/basicSetting/SalaryRangePage'));
const WagePage = lazy(() => import('@/pages/basicSetting/WagePage'));
const ContractManagement = lazy(() => import('@/pages/documentManagement/ContractManagement'));
const TimeoffManagement = lazy(() => import('@/pages/documentManagement/TimeoffManagement'));
const ManagementDeleteOfficePage = lazy(
  () => import('@/pages/officeSetting/ManagementDeleteOfficePage')
);
const CommuteManagementPage = lazy(() => import('@/pages/workManagement/CommuteManagementPage'));
const PartManagementPage = lazy(() => import('@/pages/workManagement/PartManagementPage'));

// TODO: lazy load, preload는 나중에 하겠습니둥.
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loading />}>
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
        path: 'loading',
        element: <Loading />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: '/',
            element: (
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            ),
          },
          {
            path: 'salary-settlement',
            element: (
              <Suspense fallback={<Loading />}>
                <SalarySettlementPage />
              </Suspense>
            ),
          },
          {
            path: '/holiday-calander',
            element: (
              <Suspense fallback={<Loading />}>
                <HolidayCalendarPage />
              </Suspense>
            ),
          },
          {
            path: 'basic-setting',
            children: [
              {
                index: true,
                element: <Navigate to="/basic-setting/working" replace />,
              },
              {
                path: 'working',
                element: (
                  <Suspense fallback={<Loading />}>
                    <WorkingPage />
                  </Suspense>
                ),
              },
              {
                path: 'wage',
                element: (
                  <Suspense fallback={<Loading />}>
                    <WagePage />
                  </Suspense>
                ),
              },
              {
                path: 'hourly-range',
                element: (
                  <Suspense fallback={<Loading />}>
                    <HourlyRangePage />
                  </Suspense>
                ),
              },
              {
                path: 'day-off',
                element: (
                  <Suspense fallback={<Loading />}>
                    <DayOffPage />
                  </Suspense>
                ),
              },
              {
                path: 'calendar',
                element: (
                  <Suspense fallback={<Loading />}>
                    <CalendarPage />
                  </Suspense>
                ),
              },
              {
                path: 'board',
                element: (
                  <Suspense fallback={<Loading />}>
                    <BoardPage />
                  </Suspense>
                ),
              },
              {
                path: 'salary-range',
                element: (
                  <Suspense fallback={<Loading />}>
                    <SalaryRangePage />
                  </Suspense>
                ),
              },
              {
                path: 'hr',
                element: (
                  <Suspense fallback={<Loading />}>
                    <HrManagementSettingPage />
                  </Suspense>
                ),
              },
              {
                path: 'contract',
                element: (
                  <Suspense fallback={<Loading />}>
                    <ContractPage />
                  </Suspense>
                ),
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
                  <Suspense fallback={<Loading />}>
                    <ManagementOfficePage />
                  </Suspense>
                ),
              },
              {
                path: 'delete-office',
                element: (
                  <Suspense fallback={<Loading />}>
                    <ManagementDeleteOfficePage />
                  </Suspense>
                ),
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
                  <Suspense fallback={<Loading />}>
                    <WorkManagementPage />
                  </Suspense>
                ),
              },
              {
                path: 'partTime',
                element: (
                  <Suspense fallback={<Loading />}>
                    <PartManagementPage />
                  </Suspense>
                ),
              },
              {
                path: 'commute',
                element: (
                  <Suspense fallback={<Loading />}>
                    <CommuteManagementPage />
                  </Suspense>
                ),
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
                  <Suspense fallback={<Loading />}>
                    <CertificateManagement />
                  </Suspense>
                ),
              },
              {
                path: 'contract-management',
                element: (
                  <Suspense fallback={<Loading />}>
                    <ContractManagement />
                  </Suspense>
                ),
              },
              {
                path: 'timeoff-management',
                element: (
                  <Suspense fallback={<Loading />}>
                    <TimeoffManagement />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: '/member-management',
            element: (
              <Suspense fallback={<Loading />}>
                <MemberManagementPage />
              </Suspense>
            ),
          },
          {
            path: '/member-management/member-info',
            element: (
              <Suspense fallback={<Loading />}>
                <MemberInfoPage />
              </Suspense>
            ),
          },
          {
            path: '/dayoff-management',
            element: (
              <Suspense fallback={<Loading />}>
                <DayoffManagementPage />
              </Suspense>
            ),
          },
          {
            path: '/dayoff-management/approval-history',
            element: (
              <Suspense fallback={<Loading />}>
                <ApprovalHistory />
              </Suspense>
            ),
          },
          {
            path: '/member-management/supermanager-setting',
            element: (
              <Suspense fallback={<Loading />}>
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
              <Suspense fallback={<Loading />}>
                <SimpleMenuPage />
              </Suspense>
            ),
          },
          {
            path: 'ot-management',
            element: (
              <Suspense fallback={<Loading />}>
                <OtManagementPage />
              </Suspense>
            ),
          },
          {
            path: 'ot-management/entire-history',
            element: (
              <Suspense fallback={<Loading />}>
                <EntireHistoryPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
