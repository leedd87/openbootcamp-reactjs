import React, { useState } from "react";

const Ejemplo1 = () => {
	const valorInicial = 0;

	const personaInicial = {
		nombre: "David",
		email: "david@email.com",
	};

	const [counter, setCounter] = useState(valorInicial);
	const [persona, setPersona] = useState(personaInicial);

	const incrementador = () => {
		setCounter(counter + 1);
	};

	const actualizarPersona = () => {
		setPersona({
			nombre: "Pepe",
			email: "pepe@email.com",
		});
	};

	return (
		<div>
			<h1>Ejemplo de useState</h1>
			<h2>CONTADOR: {counter}</h2>
			<h2>DATOS DE LA PERSONA:</h2>
			<h3>NOMBRE: {persona.nombre}</h3>
			<h4>EMAIL: {persona.email}</h4>
			<button onClick={incrementador}>Incrementar contador</button>
			<button onClick={actualizarPersona}>Incrementar contador</button>
		</div>
	);
};

export default Ejemplo1;
