//React Class component
import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
	render() {
		return (
			<div>
				<h1>Hola!</h1>
			</div>
		);
	}
}

Greeting.propTypes = {};

export default Greeting;

// import React from "react";

// const Greeting = () => {
// 	return <div>Greeting</div>;
// };

// export default Greeting;
