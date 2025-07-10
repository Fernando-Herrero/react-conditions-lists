import { useState } from "react";
import "./EditableList.css";

export const Editablelist = () => {
	const [editableNames, setEditableNames] = useState(["Laura", "Pedro", "Isabel"]);
	const [editName, setEditName] = useState(null);
	const [inputName, setInputName] = useState("");

	const onEditeNameList = (index) => {
		setEditName(index);
		setInputName(editableNames[index]);
	};

	const onInputName = (event) => {
		setInputName(event.target.value);
	};

	const onSetName = () => {
		setEditableNames((prev) => prev.map((name, index) => (index === editName ? inputName : name)));
		setEditName(null);
	};

	const onKeyDone = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			onSetName();
		}
	};

	return (
		<div className="editable-list-container">
			<h1>Editable List</h1>
			<ul className="editable-list">
				{editableNames.map((name, index) => (
					<li key={`${name}-${index}`}>
						{editName !== index && <h4>{name}</h4>}
						{editName === index && (
							<div className="edit-names">
								<h4>{inputName}</h4>
								<label htmlFor="edit-name"></label>
								<input
									type="text"
									id="edit-name"
									name="edit-name"
									autoComplete="text"
									value={inputName}
									onChange={onInputName}
									onKeyDown={onKeyDone}
									autoFocus
								/>
								<button onClick={onSetName}>Set Name</button>
							</div>
						)}
						{editName !== index && <button onClick={() => onEditeNameList(index)}>Edit</button>}
					</li>
				))}
			</ul>
		</div>
	);
};
