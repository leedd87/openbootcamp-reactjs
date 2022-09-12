import React, { Component, useEffect } from "react";

export class DidMount extends Component {
	componentDidMount() {
		console.log(
			"Comportamiento antes de que el componente sea aniadido al DOM(renderice)"
		);
	}
	render() {
		return (
			<div>
				<h1>DidMOunt</h1>
			</div>
		);
	}
}

export const DidmountHook = () => {
	useEffect(() => {
		console.log(
			"Comportamiento antes de que el componente sea aniadido al DOM (renderice)"
		);
	}, []);
};
