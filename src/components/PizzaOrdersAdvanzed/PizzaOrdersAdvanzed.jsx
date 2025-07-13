import { useState } from "react";
import "./PizzaOrdersAdvanzed.css";
import { PizzaList } from "./PizzaList/PizzaList";
import { PizzaOrderForm } from "./PizzaOrderForm/PizzaOrderForm";
import { PizzaOrdersList } from "./PizzaOrdersList/PizzaOrdersList";

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
	const [orders, setOrders] = useState([]);
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
	const onSubmitForm = (event) => {
		event.preventDefault();

		if (!order.name) return setError("Pizza is required");

		const newPendingOrder = {
			id: order.id,
			name: order.name,
			price: order.price,
			status: "Pending",
		};
		setOrders((prev) => [...prev, newPendingOrder]);
		setInputValue("");
		setOrder({ id: "", name: "", price: "" });
	};

	const onCompleteBtn = (id) => {
		setOrders((prev) => prev.map((order) => (order.id === id ? { ...order, status: "Complete" } : order)));
	};

	const pendingOrders = orders.filter((order) => order.status === "Pending");
	const completeOrders = orders.filter((order) => order.status === "Complete");

	const totalAmount = () => {
		return completeOrders.reduce((accumulator, order) => accumulator + order.price, 0);
	};

	const pendindOrderList = pendingOrders.map(({ id, name, price, status }) => (
		<li key={id}>
			<div>
				<div className="pizza-orders-main">
					<h4>{name}</h4>
					<p>{price}€</p>
				</div>
				<span className="status-message">{status}...</span>
			</div>
			<button className="pending-pizza-orders-btn" onClick={() => onCompleteBtn(id)}>
				Complete
			</button>
		</li>
	));

	const completeOrderList = completeOrders.map(({ id, name, price, status }) => (
		<li key={id}>
			<div className="pizza-orders-complete">
				<div className="pizza-orders-main">
					<h4>{name}</h4>
					<p>{price}€</p>
				</div>
				<span className="status-message">{status}</span>
			</div>
		</li>
	));

	return (
		<div className="pizza-orders-advanzed-container">
			<PizzaList pizzas={pizzas} />
			<PizzaOrderForm
				onSubmitForm={onSubmitForm}
				onInputOrder={onInputOrder}
				inputValue={inputValue}
				order={order}
				error={error}
			/>
			<PizzaOrdersList
				pendingOrders={pendingOrders}
				pendindOrderList={pendindOrderList}
				completeOrders={completeOrders}
				completeOrderList={completeOrderList}
				totalAmount={totalAmount()}
			/>
		</div>
	);
};
