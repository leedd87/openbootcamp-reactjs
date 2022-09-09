import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
	const [contador1, setContador1] = useState(0);
	const [contador2, setContador2] = useState(0);

	const miRef = useRef();

	function incrementar1() {
		setContador1(contador1 + 1);
	}

	function incrementar2() {
		setContador2(contador2 + 1);
	}

	//Caso 1: Ejecutar SIEMPRE un snippet de codigo
	//Cada vez que haya un cambio en el estado del componente se ejecuta
	//aquello que este dentro del useEffect
	// useEffect(() => {
	// 	console.log("Cambio en el estado del componente");
	// 	console.log("Mostrando referencia al elemento del DOM");
	// 	console.log(miRef);
	// }, []);

	//Caso 2: Ejecutar SOLO cuando cambie el CONTADOR1

	useEffect(() => {
		console.log(
			"Cambio en el estado del componente cuando se ejecuta el CONTADOR1"
			console.log("Mostrando referencia al elemento del DOM");
	// 	console.log(miRef);
		);
		console.log("Mostrando referencia al elemento del DOM");
		console.log(miRef);
	}, [contador1]);

	return (
		<div>
			<h1>****Ejemplo de useState(), useRef(),useEffect()****</h1>
			<h2>CONTADO 1: {contador1}</h2>
			<h2>CONTADO 1: {contador2}</h2>
			{/*Elemento referenciado*/}
			<h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
			<div>
				<button onClick={incrementar1}>Incrementar contador 1</button>
				<button onClick={incrementar2}>Incrementar contador 2</button>
			</div>
		</div>
	);
};

export default Ejemplo2;
