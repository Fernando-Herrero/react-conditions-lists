import { useState } from "react";
import "./AddFruitForm.css";

export const AddFruitForm = () => {
	const [fruits, setFruits] = useState([]);
	const [addFruit, setAddFruit] = useState("");
	const [error, setError] = useState("");

	const onAddFruit = (event) => {
		setError("");
		setAddFruit(event.target.value);
	};

	const onSubmitForm = (event) => {
		event.preventDefault();

		if (!addFruit.trim()) return setError("Introduce a fruit");

		if (addFruit) {
			setFruits([...fruits, addFruit.trim()]);
			setAddFruit("");
			setError("");
		}
	};

	return (
		<div className="container-fruits-form">
			<form className="-fruits-form" onSubmit={onSubmitForm}>
				<label htmlFor="fruit"></label>
				<input type="text" id="fruit" autoComplete="text" name="fruit" value={addFruit} onChange={onAddFruit} />
				<button type="submit">Add</button>
			</form>

			<div className="fruits-list">
				<h1>Fruits List</h1>
				{fruits.length === 0 && <span>There isn't any fruit yet</span>}
				{fruits.length > 0 && (
					<div>
						<ul>
							{fruits.map((fruit, index) => (
								<li key={`${fruit}-${index}`}>{fruit}</li>
							))}
						</ul>
					</div>
				)}
			</div>

			{error && <span className="error">{error}</span>}
		</div>
	);
};
