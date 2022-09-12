import React, { useState } from "react";

const LoginForm = () => {
	const initialCredentials = [
		{
			user: "",
			password: "",
		},
	];

	const [credentials, setCredentials] = useState(initialCredentials);

	return <div>LoginFo1rm</div>;
};

export default LoginForm;
