import React from "react";

const Child = ({ name }) => {
	function pressButton() {
		alert(`Default text`);
	}

	function pressButtonParams(text) {
		alert(`Text: ${text}`);
	}

	return (
		<div>
			<p onMouseOver={() => console.log("On mouse Over")}>Child component</p>
			<button onClick={() => console.log("Pressed Button 1")}>
				Button 1
			</button>
			<button onClick={pressButton}>Button 2</button>
			<button onClick={pressButtonParams("Hello")}>Button 3</button>
		</div>
	);
};

export default Child;
