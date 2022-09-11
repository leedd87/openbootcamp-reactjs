import React from "react";

const Ejemplo4 = (props) => {
	console.log("Hello World");
	console.log("Plant base console log");
	console.log("Hello Kitty");
	return (
		<div>
			<h1>****Ejemplo de CHILDREN PROPS****</h1>
			<h2>Nombre: {props.nombre}</h2>
			{/*props.children pintara por defecto aquello que se encuentre entre las etiquetas de apertura y cierra de este componente desde componente de orden superior */}
			{props.children}
		</div>
	);
};

export default Ejemplo4;
