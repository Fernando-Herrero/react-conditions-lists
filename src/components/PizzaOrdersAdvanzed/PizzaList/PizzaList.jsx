import "./PizzaList.css";

export const PizzaList = ({ pizzas }) => {
	return (
		<div className="pizzas-list">
			<h1>Pizzas:</h1>
			<ul className="pizzas-orders-advanzed-list">
				{pizzas.map(({ id, name, price }) => (
					<li key={id}>
						<p>
							<strong>{name}</strong>
						</p>
						<span>
							<strong>{price}€</strong>
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};
