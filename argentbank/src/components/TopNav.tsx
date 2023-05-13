import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loggedOut } from "../store/loginSlice";

const TopNav = () => {
	const loginSelector = useSelector((state: { login: boolean }) => state.login);
	const userFirstName = useSelector((state) => state.user).data.firstName
	const dispatch = useDispatch()
	const logout = () => {
		dispatch(loggedOut());
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
