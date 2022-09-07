import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({ contact }) => {
	return (
		<div>
			<h2>Nombre: {contact.name}</h2>
			<h2>Apellido: {contact.surname}</h2>
			<h2>Email: {contact.email}</h2>
			<h2>
				{contact.name} is:{" "}
				{contact.connected ? "Esta conectado" : "No esta conectado"}
			</h2>
		</div>
	);
};

ContactComponent.propTypes = {
	task: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
