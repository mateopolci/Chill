import "./App.css";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer greetings="Welcome to my page!" />
		</>
	);
}

export default App;
