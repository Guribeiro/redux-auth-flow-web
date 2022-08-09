import { ReactNode } from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { Authentication } from '../store/ducks/authentication/types';

interface PrivateRouteProps {
  authentication: Authentication;
}

function PrivateRoute({ authentication }: PrivateRouteProps): JSX.Element {
  const location = useLocation();

  return authentication.token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

export default PrivateRoute;
