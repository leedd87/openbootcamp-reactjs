import React, { useState } from "react";
import Child from "../pure/Child";

const Father = () => {
	const [name, setName] = useState("David");

	function showMessage(text) {
		alert(`Message received: ${text}`);
	}

	function updateName(newName) {
		setName(newName);
	}

	return (
		<div style={{ backgroundColor: "tomato", padding: "30px" }}>
			<Child name={name} send={showMessage} update={updateName} />
		</div>
	);
};

export default Father;
