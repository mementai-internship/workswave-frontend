import RootLayout from '@/layout/root';
import BoardSettingPage from '@/pages/basicSetting/BoardSettingPage';
import HomePage from '@/pages/home/HomePage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
        element: <BoardSettingPage />,
        children: [],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
