import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";

const ContactComponent = ({ contact }) => {
	return (
		<>
			{/* <h2>Nombre: {contact.name}</h2>
			<h2>Apellido: {contact.surname}</h2>
			<h2>Email: {contact.email}</h2>
			<h2>
				{contact.name} is:{" "}
				{contact.connected ? "Esta conectado" : "No esta conectado"}
			</h2> */}

			<tr className="fw-normal">
				<td className="align-middle">
					<span className="me-2">{contact.name}</span>
				</td>
				<td className="align-middle">
					<span className="me-2">{contact.surname}</span>
				</td>
				<td className="align-middle">
					<span className="me-2">{contact.email}</span>
				</td>
				<td className="align-middle">
					<span>
						{contact.connected ? "Esta conectado" : "No esta conectado"}
					</span>
				</td>
			</tr>
		</>
	);
};

ContactComponent.propTypes = {
	task: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
