import "./App.css";
import NavBar from "./components/nav/NavBar.jsx";
import ItemListContainer from "./components/shop/ItemListContainer.jsx";
import Footer from "./components/footer/Footer.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
	return (
		<div className="flex min-h-screen flex-col">
			<BrowserRouter>
				<NavBar />
				<div className="flex-grow">
					<Routes>
						<Route path="/" element={<ItemListContainer />} />
						<Route path="/:category" element={<ItemListContainer />}
						/>
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
