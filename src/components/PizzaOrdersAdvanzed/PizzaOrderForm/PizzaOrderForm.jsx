import "./PizzaOrderForm.css";

export const PizzaOrderForm = ({ onSubmitForm, inputValue, onInputOrder, order, error }) => {
	return (
		<form className="pizza-orders-advanzed-form" onSubmit={onSubmitForm}>
			<h2 className="title-list">Order your Pizza:</h2>

			{order.name && (
				<div className="order-state">
					<p>
						<strong>{order.name}</strong>
					</p>
					<span>
						<strong>{order.price}€</strong>
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

			{error && <span className="error">{error}</span>}
		</form>
	);
};
