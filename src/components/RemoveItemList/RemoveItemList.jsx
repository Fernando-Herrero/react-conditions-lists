import { useState } from "react";
import "./RemoveItemList.css";

const items = ["Mesa", "Silla", "Lámpara", "Sofá"];

export const RemoveItemList = () => {
	const [stateItems, setStateItems] = useState(items);

	const onDeleteItem = (index) => {
		const filterItems = stateItems.filter((_, i) => i !== index);

		setStateItems(filterItems);
	};

	return (
		<div className="remove-item-list">
			<h1>Remove Items</h1>

			{stateItems.length <= 0 && <span>There isn't any elements in the list</span>}

			{stateItems.map((item, index) => (
				<div className="item" key={`${item}-${index}`}>
					<p>{item}</p> <button onClick={() => onDeleteItem(index)}>Delete</button>
				</div>
			))}
		</div>
	);
};
