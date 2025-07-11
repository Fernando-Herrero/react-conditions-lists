import { useState } from "react";
import "./UserFilterList.css";

const users = [
	{ id: 1, name: "Antonio" },
	{ id: 2, name: "Beatriz" },
	{ id: 3, name: "Carmen" },
];

export const UserFilterList = () => {
	const [usersState, setUsersState] = useState(users);
	const [name, setName] = useState("");
	const [error, setError] = useState("");

	const onInputName = (event) => {
		const inputValue = event.target.value;
		setName(inputValue); //name es asincrono por lo tanto n lo puedo usar directamente en filteredUsers

		const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(inputValue.toLowerCase().trim()));

		if (filteredUsers.length === 0) return setError("No user matches your search");

		setUsersState(filteredUsers);
		setError("");
	};

	return (
		<div className="user-filter-list-container">
			<ul className="user-list">
				{usersState.map(({ id, name }) => (
					<li key={id}>{name}</li>
				))}
			</ul>

			<div className="user-filter">
				<label htmlFor="name">Search an user:</label>
				<input
					type="text"
					id="name"
					name="name"
					autoComplete="text"
					placeholder="Type a name..."
					value={name}
					onChange={onInputName}
				/>
			</div>

			{error && <span className="error">{error}</span>}
		</div>
	);
};
