import RootLayout from '@/layout/root';
import HomePage from '@/pages/Home/HomePage';
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
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
