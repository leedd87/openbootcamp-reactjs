import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";

const ContactComponent = ({ contact }) => {
	console.log(contact);
	return (
		<>
			{contact &&
				contact.map((e) => {
					console.log(e);
					return (
						<tr className="fw-normal">
							<td className="align-middle">
								<span className="me-2">{e.name}</span>
							</td>
							<td className="align-middle">
								<span className="me-2">{e.surname}</span>
							</td>
							<td className="align-middle">
								<span className="me-2">{e.email}</span>
							</td>
							<td className="align-middle">
								<span>
									{e.connected
										? "Esta conectado"
										: "No esta conectado"}
								</span>
							</td>
						</tr>
					);
				})}
		</>
	);
};

ContactComponent.propTypes = {
	task: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
