import "./App.css";
import NavBar from "./components/nav/NavBar.jsx";
import ItemListContainer from "./components/shop/ItemListContainer.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer />
			<Footer />
		</>
	);
}

export default App;
