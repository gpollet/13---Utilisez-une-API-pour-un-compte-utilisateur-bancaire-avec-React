import { useState } from "react";
import { updateUserProfile } from "../api/api";
import { userInfos } from "../store/userSlice";
import { NewUserInfos, useAppDispatch, useAppSelector } from "../types";
import { Navigate } from "react-router-dom";

const User = () => {
	const dispatch = useAppDispatch()
	const loginSelector = useAppSelector((state) => state.login);
	const userData = useAppSelector((state) => state.user).data;
	const userToken = useAppSelector((state) => state.user).token;
	const [nameEditIsVisible, setState] = useState(false);
	const changeEditNameDisplay = () => {
		setState(!nameEditIsVisible);
	};

	const updateUserName = async (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		const newUserInfos:NewUserInfos = {
			firstname: document.getElementById("firstname") as HTMLInputElement,
			lastname: document.getElementById("lastname") as HTMLInputElement,
		};
		// If user does not change a field, uses the original value, otherwise it would be changed to "undefined" in the database
		Object.values(newUserInfos).map((entry) => {
			if (entry.value.length) {
				newUserInfos[entry.id as keyof typeof newUserInfos] = entry.value;
			} else {
				newUserInfos[entry.id as keyof typeof newUserInfos] = entry.placeholder;
			}
		});

	// Updates user data in the store, and displays the new name chosen by user
		changeEditNameDisplay();
		const userData = await updateUserProfile(
			userToken,
			newUserInfos.firstname as string,
			newUserInfos.lastname as string
		);
		dispatch(userInfos(userData.data.body));
	};
	if (loginSelector.value === true) {
		return (
			<>
					<div className="header">
						<h1>
							Welcome back
							<br />
							{nameEditIsVisible === false
								? `${userData.firstName} ${userData.lastName}`
								: ""}
						</h1>
						{nameEditIsVisible === false ? (
							<button className="edit-button" onClick={changeEditNameDisplay}>
								Edit Name
							</button>
						) : (
							<form className="edit-name_form">
								<div className="edit-name_form-inputs">
									<div className="input-wrapper">
										<input
											type="text"
											placeholder={`${userData.firstName}`}
											id="firstname"></input>
									</div>
									<div className="input-wrapper">
										<input
											type="text"
											placeholder={`${userData.lastName}`}
											id="lastname"></input>
									</div>
								</div>
								<div className="edit-name_form-buttons">
									<button className="edit-form-button" onClick={updateUserName}>
										Save
									</button>
									<button
										className="edit-form-button"
										onClick={changeEditNameDisplay}>
										Cancel
									</button>
								</div>
							</form>
						)}
					</div>
					<h2 className="sr-only">Accounts</h2>
					<section className="account">
						<div className="account-content-wrapper">
							<h3 className="account-title">Argent Bank Checking (x8349)</h3>
							<p className="account-amount">$2,082.79</p>
							<p className="account-amount-description">Available Balance</p>
						</div>
						<div className="account-content-wrapper cta">
							<button className="transaction-button">View transactions</button>
						</div>
					</section>
					<section className="account">
						<div className="account-content-wrapper">
							<h3 className="account-title">Argent Bank Savings (x6712)</h3>
							<p className="account-amount">$10,928.42</p>
							<p className="account-amount-description">Available Balance</p>
						</div>
						<div className="account-content-wrapper cta">
							<button className="transaction-button">View transactions</button>
						</div>
					</section>
					<section className="account">
						<div className="account-content-wrapper">
							<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
							<p className="account-amount">$184.30</p>
							<p className="account-amount-description">Current Balance</p>
						</div>
						<div className="account-content-wrapper cta">
							<button className="transaction-button">View transactions</button>
						</div>
					</section>
			</>
		);
	} else {
		return <Navigate to={"/sign-in"} />
	}
};

export default User;
