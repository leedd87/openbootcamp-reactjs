import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const LoginFormik = () => {
	const initialCredentials = {
		email: "",
		password: "",
	};

	return (
		<div>
			<h4>Login Formik</h4>
			<Formik
				initialValues={initialCredentials}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				<Form>
					<label htmlFor="email">Email Address</label>
					<Field
						id="email"
						type="email"
						name="email"
						placeholder="example@email.com"
					/>
					<label htmlFor="password">Email Address</label>
					<Field
						id="password"
						type="password"
						name="password"
						placeholder="password"
					/>
					<button type="submit">Login</button>
				</Form>
			</Formik>
		</div>
	);
};

export default LoginFormik;
