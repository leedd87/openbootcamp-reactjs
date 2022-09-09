import React, { useState, useContext } from "react";

//Componente  1
//Dispone de un contexto que va a tener un valor que recibe desde el padre

const miContexto = React.createContext(null);

const Componente1 = () => {
	//Inicializamos un estado vacio que va a rellenarse con los datos del contexto del padre
	const state = useContext(miContexto);
	return (
		<div>
			<h1>El token es: {state.token}</h1>
			{/*Pintamos el componente 2 */}
			<Componente2 />
		</div>
	);
};

const Componente2 = () => {
	const state = useContext(miContexto);

	return (
		<div>
			<h2>LA sesion es: {state.sesion}</h2>
		</div>
	);
};

const MiComponenteConContexto = () => {
	const estadoInicial = {
		token: "1234567",
		sesion: 1,
	};

	//Creamos el estado de este componente
	const [sessionData, setsessionData] = useState(estadoInicial);

	function actualizarSesion() {
		setsessionData({
			token: "JWT123456789",
			sesion: sessionData.sesion + 1,
		});
	}

	return (
		<miContexto.Provider value={sessionData}>
			{/*Todolo que este aqui dentro puede leer los datos de sessionData */}
			{/*Ademas, si se actualiza, los componentes de aqui, tambien se actualizan */}
			<h1>****Ejemplo de useState() y useContext()****</h1>
			<Componente1 />
			<button onClick={actualizarSesion}>Actualizar Sesion</button>
		</miContexto.Provider>
	);
};

export default MiComponenteConContexto;
