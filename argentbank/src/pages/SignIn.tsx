import axios from "axios";
import { useDispatch } from 'react-redux'
import { loggedIn } from "../store/loginSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const checkCredentials = () => {
		const userEmail = document.getElementById("username")?.value;
		const userPassword = document.getElementById("password")?.value;
		axios({
			method: "post",
			url: "http://localhost:3001/api/v1/user/login",
			data: {
				email: userEmail,
				password: userPassword,
			},
		}).then((res) => {
			if (res.status === 200) {
				dispatch(loggedIn());
				navigate('/user')
			}
		});
	};

	return (
		<>
			<main className="main bg-dark">
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
						{/*<a href="./user">*/}
						<button
							type="button"
							onClick={checkCredentials}
							className="sign-in-button">
							Sign In
						</button>
						{/*</a>*/}
					</form>
				</section>
			</main>
		</>
	);
};

export default SignIn;
