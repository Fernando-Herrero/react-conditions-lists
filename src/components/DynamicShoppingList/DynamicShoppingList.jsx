import { useState, useTransition } from "react";
import "./DynamicShoppingList.css";

export const DynamicShoppingList = () => {
	const [list, setList] = useState([]);
	const [products, setProducts] = useState({ product: "", quantity: "" });
	const [error, setError] = useState("");

	const onInputProduct = ({ target: { name, value } }) => {
		setError("");
		setProducts((prev) => ({ ...prev, [name]: value }));
	};

	const onSubmitForm = (event) => {
		event.preventDefault();

		if (!products.product) return setError("A product is required");
		if (!products.quantity) return setError("Quantity is required");

		const newProduct = {
			id: Date.now(),
			product: products.product,
			quantity: products.quantity,
		};

		setList((prev) => [...prev, newProduct]);
		setProducts({ product: "", quantity: "" });
		setError("");
	};

	return (
		<div className="container-dynamic-shopping-list">
			<form className="dynamic-shopping-list-form" onSubmit={onSubmitForm}>
				<label htmlFor="product">Product:</label>
				<input
					type="text"
					id="product"
					name="product"
					autoComplete="text"
					value={products.product}
					onChange={onInputProduct}
				/>

				<label htmlFor="quantity">Quantity:</label>
				<input
					type="number"
					id="quantity"
					name="quantity"
					value={products.quantity}
					onChange={onInputProduct}
				/>

				<button type="submit">Add</button>
				{error && <span className="error">{error}</span>}
			</form>

			<div className="added-products">
				<h1>Products</h1>
				{list.length <= 0 && <span className="no-products-message">There isn't products yet</span>}
				{list.length > 0 && (
					<ul className="products-list">
						{list.map((product) => (
							<li key={product.id}>
								<h3>{product.product}</h3>
								<span>{product.quantity}</span>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
