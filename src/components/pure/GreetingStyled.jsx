import React from "react";
import { useState } from "react";

//Estilo usuario logueado
const loggedStyle = {
	color: "white",
};

//Estilo usuario no logueado
const unloggedStyle = {
	color: "tomato",
	fontWeight: "bold",
};

const GreetingStyled = (props) => {
	const [logged, setLogged] = useState(false);

	return (
		<div style={logged ? loggedStyle : unloggedStyle}>
			{logged ? <h1>Hello, {props.name} </h1> : <h1>Login please</h1>}
			<button
				onClick={() => {
					console.log("Boton pulsado");
					setLogged(!logged);
				}}
			>
				{logged ? "Logout" : "Login"}
			</button>
		</div>
	);
};

export default GreetingStyled;
