import { useState } from "react";
import "./TaskList.css";

const initialTasks = [
	{ id: 1, title: "Hacer la compra", completed: false },
	{ id: 2, title: "Llamar al médico", completed: false },
	{ id: 3, title: "Estudiar React", completed: false },
];

export const TaskList = () => {
	const [tasks, setTasks] = useState(initialTasks);

	const onCheckInput = (id) => {
		const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task));

		setTasks(updatedTasks);
	};

	return (
		<div className="task-list-container">
			{tasks.map((task) => (
				<div key={task.id} className="task-item">
					<h4>{task.title}</h4>
					<div className="task-list-check">
						<label htmlFor={`check-${task.id}`}>Mark as bought</label>
						<input
							type="checkbox"
							id={`check-${task.id}`}
							checked={task.completed}
							onChange={() => onCheckInput(task.id)}
						/>
						<span>{task.completed ? "Bought" : "Not bought"}</span>
					</div>
				</div>
			))}
		</div>
	);
};
