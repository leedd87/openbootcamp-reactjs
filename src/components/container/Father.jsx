import React from "react";
import Child from "../pure/Child";

const Father = () => {
	function showMessage(text) {
		alert(`Message received: ${text}`);
	}

	return (
		<div style={{ backgroundColor: "tomato", padding: "30px" }}>
			<Child name={"David"} send={showMessage} />
		</div>
	);
};

export default Father;
