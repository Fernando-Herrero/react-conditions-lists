import "./NameList.css";

const names = ["Ana", "Luis", "Clara", "Sergio", "Marta"];

export const NameList = () => {
	return (
		<ul className="names-list">
			{names.map((name, index) => (
				<li key={`${name}-~${index}`}>{name}</li>
			))}
		</ul>
	);
};
