import "./ProductList.css";

const products = [
	{ name: "Camiseta", price: 19.99 },
	{ name: "Pantalón", price: 29.99 },
	{ name: "Zapatillas", price: 49.99 },
];

export const ProductList = () => {
	return (
		<div className="card">
			<h1>Product's list</h1>
			{products.map((product, index) => (
				<div key={`${product.name}-${index}`}>
					<p>{product.name}</p>
					<span>{product.price}</span>
				</div>
			))}
		</div>
	);
};
