import React, { useState } from "react";

let red = 0;
let green = 200;
let blue = 150;

//Estilo usuario logueado
const loggedStyle = {
	backgroundColor: `rgb(${red},${green},${blue})`,
	color: "white",
};

//Estilo usuario no logueado
const unloggedStyle = {
	backgroundColor: "tomato",
	color: "white",
	fontWeight: "bold",
};

//Login / Logout buttons
const LoginButton = ({ loginAction, propStyle }) => {
	return (
		<button style={propStyle} onClick={loginAction}>
			Login
		</button>
	);
};

const LogoutButton = ({ logoutAction, propStyle }) => {
	return (
		<button style={propStyle} onClick={logoutAction}>
			Logout
		</button>
	);
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
			<LogoutButton
				propStyle={loggedStyle}
				logoutAction={logoutAction}
			></LogoutButton>
		);
	} else {
		optionalButton = (
			<LoginButton
				propStyle={unloggedStyle}
				loginAction={loginAction}
			></LoginButton>
		);
	}

	let addMessages = () => {
		setNMessages(nMessages + 1);
	};

	return (
		<div>
			{optionalButton}
			{/* {nMessages > 0 && <p>You have {nMessages} new messages</p>}
			{nMessages === 0 && <p>There are no new messages</p>} */}
			{/*Operador ternario */}
			{access ? (
				<div>
					{nMessages > 0 ? (
						<p>
							You have {nMessages} new messages{" "}
							{nMessages > 1 ? "s" : null}...
						</p>
					) : (
						<p>There are no new messages</p>
					)}
				</div>
			) : null}
			<button onClick={addMessages}>
				{nMessages === 0 ? "Add your first message" : "Add new messages"}
			</button>
		</div>
	);
};

export default OptionalRender;
