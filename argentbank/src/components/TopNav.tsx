import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loggedOut } from "../store/loginSlice";

const TopNav = () => {
	const loginSelector = useSelector((state: { login: boolean }) => state.login);
	const userFirstName = useSelector((state) => state.user).data.firstName
	const logout = () => {
		useDispatch(loggedOut());
	};
	if (loginSelector.value === true) {
		return (
			<>
				<nav className="main-nav">
					<NavLink className="main-nav-logo" to={"index"}>
						<img
							className="main-nav-logo-image"
							src="./img/argentBankLogo.png"
							alt="Argent Bank Logo"
						/>
						<h1 className="sr-only">Argent Bank</h1>
					</NavLink>
					<div>
						<NavLink to={"#"}>
							<svg className="top-nav_right-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
								{/*Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
								<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
							</svg>
							<span>{userFirstName}</span>
						</NavLink>
						<NavLink className="main-nav-item" to={"sign-in"} onClick={logout}>
							<svg
								className="top-nav_right-icons"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512">
								{/*Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}
								<path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
							</svg>
							Sign out
						</NavLink>
					</div>
				</nav>
			</>
		);
	} else {
		return (
			<>
				<nav className="main-nav">
					<NavLink className="main-nav-logo" to={"index"}>
						<img
							className="main-nav-logo-image"
							src="./img/argentBankLogo.png"
							alt="Argent Bank Logo"
						/>
						<h1 className="sr-only">Argent Bank</h1>
					</NavLink>
					<div>
						<NavLink className="main-nav-item" to={"sign-in"}>
							<i className="fa fa-user-circle"></i>
							Sign In
						</NavLink>
					</div>
				</nav>
			</>
		);
	}
};

export default TopNav;
