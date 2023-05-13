import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateUserProfile } from "../api/api";
import { userInfos } from "../store/userSlice";

const User = () => {
	const dispatch = useDispatch();
	const userData = useSelector((state) => state.user).data;
	const userToken = useSelector((state) => state.user).token;
	const [nameEditIsVisible, setState] = useState(false);
	const changeEditNameDisplay = () => {
		setState(!nameEditIsVisible);
	};
	const updateUserName = async (event) => {
		event.preventDefault();
		const newUserInfos = {
			firstname: document.getElementById("firstname"),
			lastname: document.getElementById("lastname"),
		};
		// If user does not change a field, uses the original value, otherwise it would be changed to "undefined" in the database
		Object.values(newUserInfos).map((entry) => {
			if (entry.value.length) {
				newUserInfos[entry.id] = entry.value;
			} else {
				newUserInfos[entry.id] = entry.placeholder;
			}
		});
		changeEditNameDisplay();
		const userData = await updateUserProfile(
			userToken,
			newUserInfos.firstname,
			newUserInfos.lastname
		);
		dispatch(userInfos(userData.data.body));
	};
	return (
		<>
			<main className="main bg-dark">
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
			</main>
		</>
	);
};

export default User;
