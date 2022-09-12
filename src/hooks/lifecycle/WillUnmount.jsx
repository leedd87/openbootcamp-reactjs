import React, { Component, useEffect } from "react";

export class WillUnmount extends Component {
	componentWillUnmount() {
		console.log("Comportamiento antes de que el componente desaparece");
	}
	render() {
		return (
			<div>
				<h1>Will Unmount</h1>
			</div>
		);
	}
}

export const WillUnmountHook = () => {
	useEffect(() => {
		console.log("Comportamiento antes de que el componente desaparece");
	}, []);
};
