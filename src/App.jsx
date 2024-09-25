import "./App.css";
import NavBar from "./components/nav/NavBar.jsx";
import ItemListContainer from "./components/shop/ItemListContainer.jsx";
import Footer from "./components/footer/Footer.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
