import React, { useState } from "react";
import ContactComponent from "./ContactComponent";

const ContactForm = () => {
	// function addTask(e) {
	// 	e.preventDefault();
	// 	const newTask = new Contact(
	// 		nameRef.current.value,
	// 		surNameRef.current.value,
	// 		emailRef.current.value,

	// 		connectedRef.current.value
	// 	);
	// 	add(newTask);
	// }

	const [name, setName] = useState("");
	const [surName, setSurName] = useState("");
	const [email, setEmail] = useState("");
	const [connected, setConnected] = useState();
	const [contactList, setContactList] = useState([]);

	function addContact(e) {
		e.preventDefault();

		const contact = {
			name: e.target[0].value,
			surName: e.target[1].value,
			email: e.target[2].value,
			connected: e.target[3].value,
		};

		contactList.push(contact);
		setContactList(contactList);
		console.log(contactList);
	}

	return (
		<>
			<form
				onSubmit={addContact}
				className="d-flex justify-content-center align-items-center mb-4"
			>
				<div className="form-outline flex-fill">
					<input
						//ref={nameRef}
						id="inputName"
						type="text"
						className="form-control form-control-lg"
						required
						autoFocus
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						//ref={surNameRef}
						id="inputSurName"
						type="text"
						className="form-control form-control-lg"
						required
						placeholder="Surname"
						value={surName}
						onChange={(e) => setSurName(e.target.value)}
					/>
					<input
						//ref={surNameRef}
						id="inputEmail"
						type="text"
						className="form-control form-control-lg"
						required
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label htmlFor="selectLevel" className="sr-only">
						Connected
					</label>
					<select
						id="selectConnected"
						value={connected}
						onChange={(e) => setConnected(e.target.value)}
					>
						<option>True</option>
						<option>False</option>
					</select>
				</div>
				<button type="submit" className="btn btn-success btn-lg ms-2">
					Add
				</button>
			</form>
		</>
	);
};

export default ContactForm;
