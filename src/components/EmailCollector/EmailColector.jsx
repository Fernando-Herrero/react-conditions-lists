import { useState } from "react";
import "./EmailCollector.css";

export const EmailCollector = () => {
	const [emails, setEmails] = useState([]);
	const [form, setForm] = useState({ username: "", email: "" });
	const [error, setError] = useState("");

	const onInputForm = ({ target: { name, value } }) => {
		setError("");
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const onSubmitForm = (event) => {
		event.preventDefault();

		if (!form.username) return setError("Username required");
		if (!form.email) return setError("Email required");

		const newUser = {
			id: Date.now(),
			username: form.username,
			email: form.email,
		};

		setEmails((prev) => [...prev, newUser]);
		setError("");
		setForm({ username: "", email: "" });
	};

	return (
		<div className="email-collector-container">
			<h1>Enter your details:</h1>
			<form className="email-collector-form" onSubmit={onSubmitForm}>
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					id="username"
					name="username"
					autoComplete="text"
					value={form.username}
					onChange={onInputForm}
				/>

				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					autoComplete="email"
					value={form.email}
					onChange={onInputForm}
				/>

				<button type="submit">Add</button>

				{error && <span className="error">{error}</span>}
			</form>

			<div className="email-collector-list-container"></div>
			<h1>Emails:</h1>
			{emails.length === 0 && <p>There isn't any email yet</p>}
			{emails.length > 0 && (
				<ul className="email-collector-list">
					{emails.map(({ id, username, email }) => (
						<li key={id}>
							<p>
								<strong>Username:</strong> {username}
							</p>
							<p>
								<strong>Email:</strong> {email}
							</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
