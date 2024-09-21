import "./App.css";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import Item from "./components/Item.jsx"

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer greetings="Welcome to my page!" />
			<Item></Item>
		</>
	);
}

export default App;
