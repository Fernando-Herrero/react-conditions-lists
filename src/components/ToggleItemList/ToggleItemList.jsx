import { useState } from "react";
import "./ToggleItemList.css";

const toggles = [
	{ id: 1, label: "Notificaciones", state: false },
	{ id: 2, label: "Modo oscuro", state: false },
	{ id: 3, label: "Sonido", state: false },
];

export const ToggleItemList = () => {
	const [toggleState, setToggleState] = useState(toggles);

	const onToggleButton = (id) => {
		setToggleState((prev) =>
			prev.map((toggle) => (toggle.id === id ? { ...toggle, state: !toggle.state } : toggle))
		);
	};

	return (
		<div className="container-toggle-item-list">
			<ul className="toggle-item-list">
				{toggleState.map((toggle) => (
					<li key={toggle.id} className={toggle.state ? `style-${toggle.id}` : "none"}>
						<h4>{toggle.label}</h4>
						<button onClick={() => onToggleButton(toggle.id)}>
							{toggle.state ? "Deasactivate" : "Activate"}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
