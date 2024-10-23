import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const token = localStorage.getItem('accessToken');

  return token && token !== 'null' ? <Outlet /> : <Navigate to="/login" />;
}
