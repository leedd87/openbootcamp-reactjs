import React from "react";
import { useState } from "react";

const GreetingF = (props) => {
	const [age, setAge] = useState(29);

	const birthday = () => {
		setAge(age + 1);
	};
	return (
		<div>
			<h1>Hola David desde componente funcional!</h1>
			<h2>Tu edad es de: {age} anios</h2>
			<div>
				<button onClick={birthday}>Cumplir anios</button>
			</div>
		</div>
	);
};

export default GreetingF;
