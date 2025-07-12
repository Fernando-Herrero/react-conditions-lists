import { useState } from "react";
import "./PizzaOrdersAdvanzed.css";

const pizzas = [
	{ id: 1, name: "Margherita", price: 8.99 },
	{ id: 2, name: "Pepperoni", price: 10.5 },
	{ id: 3, name: "Four Cheese", price: 11.25 },
	{ id: 4, name: "Hawaiian", price: 9.75 },
	{ id: 5, name: "BBQ", price: 12.0 },
	{ id: 6, name: "Vegetarian", price: 9.5 },
	{ id: 7, name: "Carbonara", price: 11.0 },
	{ id: 8, name: "Mexican", price: 10.99 },
	{ id: 9, name: "Neapolitan", price: 9.25 },
	{ id: 10, name: "Marinara", price: 12.5 },
];

export const PizzaOrdersAdvanzed = () => {
	const [order, setOrder] = useState({ id: "", name: "", price: "" });
	const [inputValue, setInputValue] = useState("");
	const [error, setError] = useState("");

	const onInputOrder = (event) => {
		setError("");
		const value = event.target.value;
		setInputValue(value);

		if (value.trim() === "") return setOrder({ id: "", name: "", price: "" });

		const findPizza = pizzas.find((pizza) => pizza.name.toLowerCase().includes(value.toLowerCase().trim()));

		if (findPizza) {
			setOrder(findPizza);
		} else {
			setOrder({ id: "", name: "", price: "" });
			setError("No pizza found with that name");
		}
	};
	const onSubmitForm = (event) => {};
	return (
		<div className="pizza-orders-advanzed-container">
			<h1>Pizzas:</h1>
			<ul className="pizzas-orders-advanzed-list">
				{pizzas.map(({ id, name, price }) => (
					<li key={id}>
						<p>
							<strong>{name}</strong>
						</p>
						<span>
							<strong>{price}</strong>
						</span>
					</li>
				))}
			</ul>
			<form className="pizza-orders-advanzed-form" onSubmit={onSubmitForm}>
				<h2>Order your Pizza:</h2>

				{!order.name && <span className="no-order-message">{error ? error : "There isn't any order yet"}</span>}
				{order.name && (
					<div className="order-state">
						<p>
							<strong>{order.name}</strong>
						</p>
						<span>
							<strong>{order.price}</strong>
						</span>
					</div>
				)}

				<label className="name">Your selection:</label>
				<input
					type="text"
					id="name"
					name="name"
					autoComplete="off"
					value={inputValue}
					onChange={onInputOrder}
					placeholder="Type a Pizza..."
				/>

				<button type="submit">Order</button>
			</form>
		</div>
	);
};
