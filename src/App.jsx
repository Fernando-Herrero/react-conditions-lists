import "./App.css";
import { AddFruitForm } from "./components/AddFruitForm/AddFruitForm";
import { DynamicShoppingList } from "./components/DynamicShoppingList/DynamicShoppingList";
import { Editablelist } from "./components/EditableList/EditableList";
import { EmailCollector } from "./components/EmailCollector/EmailColector";
import { MovieFavorites } from "./components/MovieFavorites/MovieFavorites";
import { NameList } from "./components/NameList/NameList";
import { OrderManager } from "./components/OrderManager/OrderManager";
import { ProductList } from "./components/ProductList/ProductList";
import { RemoveItemList } from "./components/RemoveItemList/RemoveItemList";
import { ScoreBoard } from "./components/ScoreBoard/ScoreBoard";
import { TaskList } from "./components/TaskList/TaskList";
import { ToggleItemList } from "./components/ToggleItemList/ToggleItemList";
import { UserFilterList } from "./components/UserFilterlist/UserFilterList";

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
			<Editablelist />
			<OrderManager />
			<UserFilterList />
			<ScoreBoard />
			<MovieFavorites />
			<EmailCollector />
		</>
	);
}

export default App;
