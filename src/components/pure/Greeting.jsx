//React Class component
import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			age: 29,
		};
	}

	render() {
		return (
			<div>
				<h1>Hola! {this.props.name}</h1>
				<h2>Tu edad es de: {this.state.age}</h2>
			</div>
		);
	}
}

Greeting.propTypes = {
	name: PropTypes.string,
};

export default Greeting;

// import React from "react";

// const Greeting = () => {
// 	return <div>Greeting</div>;
// };

// export default Greeting;
