import { useState } from "react";
import "./OrderManager.css";

export const OrderManager = () => {
	const [completeOrders, setCompleteOrders] = useState([]);
	const [orders, setOrders] = useState([]);
	const [form, setForm] = useState({ name: "", price: "" });
	const [error, setError] = useState("");

	const onInputForm = ({ target: { name, value } }) => {
		setError("");
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const onSubmitForm = (event) => {
		event.preventDefault();

		if (!form.name) return setError("Name required");
		if (!form.price) return setError("Price required");

		const newOrder = {
			id: Date.now(),
			name: form.name,
			price: form.price,
			completed: false,
		};

		setOrders((prev) => [...prev, newOrder]);
		setError("");
		setForm({ name: "", price: "" });
	};

	const onClickOrders = (id) => {
		const completedOrder = orders.find((order) => order.id === id);

		if (!completedOrder) return setError("Order not found");

		const updateOrder = { ...completedOrder, completed: true };

		const filterOrders = orders.filter((order) => order.id !== id);

		setOrders(filterOrders);
		setCompleteOrders((prev) => [...prev, updateOrder]);
		setError("");
	};

	const getTotalAmount = () => {
		return completeOrders.reduce((accumulator, order) => accumulator + Number(order.price), 0);
	};

	return (
		<div className="container-order-manager">
			<form className="order-manager-form" onSubmit={onSubmitForm}>
				<h1>Make an Order:</h1>

				<label htmlFor="name"></label>
				<input type="text" id="name" name="name" autoComplete="text" value={form.name} onChange={onInputForm} />

				<label htmlFor="price"></label>
				<input type="number" id="price" name="price" value={form.price} onChange={onInputForm} />

				<button type="submit">Add</button>
			</form>

			{error && <span className="error">{error}</span>}

			<section className="orders-to-complete">
				<h1>Orders:</h1>
				{orders.length <= 0 && <p className="no-orders-message">There isn't any order yet</p>}
				{orders.length > 0 && (
					<ul className="orders-to-complete-list">
						{orders.map(({ id, name, price }) => (
							<li key={id}>
								<div>
									<h4>{name}</h4>
									<span>{price}$</span>
								</div>
								<button onClick={() => onClickOrders(id)}>Complete ✅</button>
							</li>
						))}
					</ul>
				)}
			</section>

			{(orders.length > 0 || completeOrders.length > 0) && (
				<section className="orders-completed">
					<h1>Orders Completed:</h1>
					{completeOrders.length === 0 && <p className="no-orders-message">There isn't any order yet</p>}
					{completeOrders.length > 0 && (
						<>
							<ul className="orders-completed-list">
								{completeOrders.map(({ id, name, price }) => (
									<li key={id}>
										<h4>{name}</h4>
										<span>{price}$</span>
									</li>
								))}
							</ul>
							<span>Total Amount: {getTotalAmount()}$</span>
						</>
					)}
				</section>
			)}
		</div>
	);
};
