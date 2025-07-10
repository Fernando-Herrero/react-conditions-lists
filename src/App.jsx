import "./App.css";
import { NameList } from "./components/NameList/NameList";
import { ProductList } from "./components/ProductList/ProductList";
import { TaskList } from "./components/TaskList/TaskList";

function App() {
	return (
		<>
			<NameList />
			<ProductList />
			<TaskList />
		</>
	);
}

export default App;
