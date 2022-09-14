import React, { useRef } from "react";

const Child = ({ name, send }) => {
	const messageRef = useRef("");

	function pressButton() {
		const text = messageRef.current.value;
		alert(`Text in input: ${text}`);
	}

	function pressButtonParams(text) {
		alert(`Text: ${text}`);
	}

	return (
		<div style={{ backgroundColor: "green", padding: "10px" }}>
			<p onMouseOver={() => console.log("On mouse Over")}>Child component</p>
			<button onClick={() => console.log("Pressed Button 1")}>
				Button 1
			</button>
			<button onClick={pressButton}>Button 2</button>
			<button onClick={() => pressButtonParams("Hello")}>Button 3</button>
			<input
				placeholder="Send a text to your father"
				onFocus={() => console.log("Input focused")}
				onChange={(e) => console.log("Input changed:", e.target.value)}
				onCopy={() => console.log("Copied text from Input")}
				ref={messageRef}
			/>
			<button onClick={() => send(messageRef.current.value)}>
				Send message
			</button>
		</div>
	);
};

export default Child;
