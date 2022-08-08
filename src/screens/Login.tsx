import { FormEvent, useCallback, useState } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as AuthenticationActions from '../store/ducks/authentication/actions';
import { Authentication, LoginRequestPayload } from '../store/ducks/authentication/types';

interface StateProps {
	authentication: Authentication;
	loading: boolean;
	error: boolean;
}

interface DispatchProps {
	loadRequest(data: LoginRequestPayload): void;
	logoutRequest(): void;
}

interface OwnProps { }

type LoginProps = StateProps & DispatchProps & OwnProps;

const Login = ({loadRequest, logoutRequest, authentication, error, loading }:LoginProps): JSX.Element => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmitLogin = useCallback((e:FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		loadRequest({
			username,
			password,
		});

		setUsername('');
		setPassword('');

	},[loadRequest, username, password]);

	return (
		<main>
			<form onSubmit={handleSubmitLogin}>
				<h1>Login</h1>
				<label htmlFor="">username</label>
				<input type="text" value={username} onChange={e => setUsername(e.target.value)} />
				<br />
				<label htmlFor="">password</label>
				<input type="text" value={password} onChange={e => setPassword(e.target.value)} />
				<br />
		
				{!authentication.user && (
					<button type='submit'>
						{loading ? 'Carregando' : 'Login'}
					</button>
				)}

				{error && String(error)}

				{authentication.user && authentication.user.name}

			</form>

			{authentication.user && <button onClick={logoutRequest}>Logout</button>}

		</main>
	)
}

const mapStateToProps = ({authentication}:ApplicationState) => ({
	authentication: authentication.data,
	loading: authentication.loading,
	error: authentication.error,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(AuthenticationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);