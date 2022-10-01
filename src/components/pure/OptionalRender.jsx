import React, { useState } from "react";

//Login / Logout buttons
const LoginButton = ({ loginAction }) => {
	return <button onClick={loginAction}>Login</button>;
};

const LogoutButton = ({ logoutAction }) => {
	return <button onClick={logoutAction}>Logout</button>;
};

const OptionalRender = () => {
	const [access, setAccess] = useState(true);
	const [nMessages, setNMessages] = useState(0);

	// const updateAccess = () => {
	// 	setAccess(!access);
	// };

	const loginAction = () => {
		setAccess(true);
	};

	const logoutAction = () => {
		setAccess(false);
	};

	let optionalButton;

	if (access) {
		optionalButton = (
			<LogoutButton logoutAction={logoutAction}></LogoutButton>
		);
	} else {
		optionalButton = <LoginButton loginAction={loginAction}></LoginButton>;
	}

	let addMessages = () => {
		setNMessages(nMessages + 1);
	};

	return (
		<div>
			{optionalButton}
			{nMessages > 0 && <p>You have {nMessages} new messages</p>}
			{nMessages === 0 && <p>There are no new messages</p>}
			<button onClick={addMessages}>Add new messages</button>
		</div>
	);
};

export default OptionalRender;
