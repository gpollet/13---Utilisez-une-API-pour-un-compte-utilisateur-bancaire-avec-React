import { NavLink } from "react-router-dom";
import { loggedOut } from "../store/loginSlice";
import { useAppDispatch, useAppSelector } from "../types";

const TopNav = () => {
	const loginSelector = useAppSelector((state) => state.login);
	const userFirstName = useAppSelector((state) => state.user).data.firstName
	const dispatch = useAppDispatch()
	const logout = () => {
		dispatch(loggedOut());
	};
	// Displays a different top nav depending on whether the user is logged in or not
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
						<NavLink className="main-nav-item" to={"user"}>
						<i className="fa fa-user-circle"></i>
							{userFirstName}
						</NavLink>
						<NavLink className="main-nav-item" to={"sign-in"} onClick={logout}>
						<i className="fa fa-sign-out"></i>
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
