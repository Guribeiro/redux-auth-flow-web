import { Routes as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import {Authentication} from '../store/ducks/authentication/types';
import PrivateRoute from './PrivateRoute';

import * as AuthenticationActions from '../store/ducks/authentication/actions';

import {ApplicationState} from '../store'
import { bindActionCreators, Dispatch } from 'redux';
import { useEffect } from 'react';

interface StateProps {
	authentication: Authentication;
}

interface DispatchProps {
}

interface OwnProps {}

type RoutesProps = StateProps & DispatchProps & OwnProps;

const Routes = ({authentication}:RoutesProps):JSX.Element => {
	return (
		<Router>
			<Route path='/' element={<Login />}  />
			<Route 
			element={<PrivateRoute authentication={authentication} />}
			>
				<Route path='/dashboard' element={<Dashboard />}  />
			</Route>
		</Router>
	)
}

const mapStateToProps = ({authentication}:ApplicationState) => ({
	authentication: authentication.data
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(AuthenticationActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Routes)