import React, { useRef } from "react";

const Child = ({ name, send, update }) => {
	const messageRef = useRef("");
	const nameRef = useRef("");
	console.log("hello universo");
	console.log("hola mundo");
	function pressButton() {
		const text = messageRef.current.value;
		alert(`Text in input: ${text}`);
	}

	function pressButtonParams(text) {
		alert(`Text: ${text}`);
	}

	function submitName(e) {
		e.preventDefault();
		update(nameRef.current.value);
	}

	return (
		<div style={{ backgroundColor: "green", padding: "10px" }}>
			<p onMouseOver={() => console.log("On mouse Over")}>Hello {name}</p>
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
			<div style={{ marginTop: "20px" }}>
				<form onSubmit={submitName}>
					<input placeholder="New Name" ref={nameRef} />
					<button type="submit">Update Name</button>
				</form>
			</div>
		</div>
	);
};

export default Child;
