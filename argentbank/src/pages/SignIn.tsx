import { loggedIn } from "../store/loginSlice";
import { useNavigate } from "react-router-dom";
import { userToken, userInfos } from "../store/userSlice";
import { checkCredentials, getUserData } from "../api/api";
import { useAppDispatch } from '../types';

const SignIn = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	
	const attemptToLog = async () => {
		const credentials = {
			email: (document.getElementById("username") as HTMLInputElement)?.value,
			password: (document.getElementById("password")  as HTMLInputElement)?.value
		}
		const loginResponse = await checkCredentials(credentials.email, credentials.password)
			if (loginResponse.status === 200) {
				const userData = await getUserData(loginResponse.data.body.token)
				dispatch(loggedIn());
				// Store token for other requests to the backend that needs it (getUserProfile, updateUserProfile)
				dispatch(userToken(loginResponse.data.body.token))
				// Store user data to be used accross the other components
				dispatch(userInfos(userData))
				navigate('/user')
			}
	};

	return (
		<>
				<section className="sign-in-content">
					<i className="fa fa-user-circle sign-in-icon"></i>
					<h1>Sign In</h1>
					<form>
						<div className="input-wrapper">
							<label htmlFor="username">Username</label>
							<input type="text" id="username" />
						</div>
						<div className="input-wrapper">
							<label htmlFor="password">Password</label>
							<input type="password" id="password" />
						</div>
						<div className="input-remember">
							<input type="checkbox" id="remember-me" />
							<label htmlFor="remember-me">Remember me</label>
						</div>
						<button
							type="button"
							onClick={attemptToLog}
							className="sign-in-button">
							Sign In
						</button>
					</form>
				</section>
		</>
	);
};

export default SignIn;