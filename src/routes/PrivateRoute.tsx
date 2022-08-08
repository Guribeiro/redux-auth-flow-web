import { ReactNode, useEffect } from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import {Authentication} from '../store/ducks/authentication/types';

interface PrivateRouteProps {
	authentication: Authentication;
}

function PrivateRoute({authentication}:PrivateRouteProps): JSX.Element {
 
  const { state } = useLocation();

  if (!authentication.token) {
    return <Navigate to="/" state={state} replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;