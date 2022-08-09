import {connect} from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../store';
import * as AuthenticationActions from '../store/ducks/authentication/actions';
import { Authentication, LoginRequestPayload } from '../store/ducks/authentication/types';

interface StateProps {
	authentication: Authentication;
	loading: boolean;
	error: boolean;
}

interface DispatchProps {
	loginRequest(data: LoginRequestPayload): void;
	logoutRequest(): void;
}

interface OwnProps { }

type DashboardProps = StateProps & DispatchProps & OwnProps;

const Dashboard = ({authentication, logoutRequest}: DashboardProps):JSX.Element => {
	return (
		<div>
			<h1>Dashboard</h1>
			<h2>Olá, {authentication.user.name}</h2>
			<button onClick={logoutRequest}>Sair</button>
		</div>
	)
}

const mapStateToProps = ({authentication}:ApplicationState) => ({
	authentication: authentication.data,
	loading: authentication.loading,
	error: authentication.error,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(AuthenticationActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)