import React from "react";
import { Contact } from "../models/contact.class";
import ContactComponent from "./ContactComponent";

const ContactContainerComponent = () => {
	const defaultContact = new Contact(
		"David",
		"Lee",
		"davidlee@email.com",
		false
	);

	return (
		<div>
			<h2>Info del contacto:</h2>
			<ContactComponent contact={defaultContact} />
		</div>
	);
};

export default ContactContainerComponent;
