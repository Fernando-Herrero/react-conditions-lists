import "./App.css";
import { AddFruitForm } from "./components/AddFruitForm/AddFruitForm";
import { DynamicShoppingList } from "./components/DynamicShoppingList/DynamicShoppingList";
import { NameList } from "./components/NameList/NameList";
import { ProductList } from "./components/ProductList/ProductList";
import { RemoveItemList } from "./components/RemoveItemList/RemoveItemList";
import { TaskList } from "./components/TaskList/TaskList";
import { ToggleItemList } from "./components/ToggleItemList/ToggleItemList";

function App() {
	return (
		<>
			<NameList />
			<ProductList />
			<TaskList />
			<AddFruitForm />
			<RemoveItemList />
			<DynamicShoppingList />
			<ToggleItemList />
		</>
	);
}

export default App;
