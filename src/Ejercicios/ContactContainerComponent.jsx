import React, { useState } from "react";
import { Contact } from "../models/contact.class";
import ContactComponent from "./ContactComponent";
import ContactForm from "./ContactForm";

const ContactContainerComponent = () => {
	const defaultContact = new Contact(
		"David",
		"Lee",
		"davidlee@email.com",
		false
	);

	const [contact, setContact] = useState();

	return (
		<div>
			<h2>Info del contacto:</h2>
			{/* <ContactComponent contact={defaultContact} /> */}
			<ContactForm />
		</div>
	);
};

export default ContactContainerComponent;
