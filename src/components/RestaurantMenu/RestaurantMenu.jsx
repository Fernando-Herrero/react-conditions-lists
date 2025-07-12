import { useState } from "react";
import "./RestaurantMenu.css";

const menu = [
	{ name: "Tortilla de patatas", price: 6.5, category: "Entrante" },
	{ name: "Paella", price: 12.9, category: "Principal" },
	{ name: "Tarta de queso", price: 4.5, category: "Postre" },
];

export const RestaurantMenu = () => {
	const [showMenu, setShowMenu] = useState([]);
	const [select, setSelect] = useState("");

	const onSelectChange = (event) => {
		const inputValue = event.target.value;

		const filteredCategory = inputValue === "" ? [] : menu.filter((plate) => plate.category === inputValue);

		setSelect(inputValue);
		setShowMenu(filteredCategory);
	};

	return (
		<div className="restaurant-menu-container">
			<h1> Restaurant Menu</h1>
			<label htmlFor="restaurant-menu-selector"></label>
			<select name="restaurant-menu" id="restaurant-menu-selector" value={select} onChange={onSelectChange}>
				<option value="">-- Select an option --</option>
				<option value="Entrante">Entrante</option>
				<option value="Principal">Principal</option>
				<option value="Postre">Postre</option>
			</select>

			{showMenu.length === 0 && select === "" && <p>Please select a category to see the menu</p>}
			{showMenu.length > 0 && (
				<ul className="restaurant-menu-list">
					{showMenu.map(({ name, price }, index) => (
						<li key={`${name}-${index}`} className="restaurant-menu-list-category">
							<p>
								<strong>{name}</strong>
							</p>
							<span>{price}€</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
