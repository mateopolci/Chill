import "./App.css";
import NavBar from "./components/nav/NavBar.jsx";
import ItemListContainer from "./components/shop/ItemListContainer.jsx";
import Footer from "./components/footer/Footer.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/details/ItemDetailContainer.jsx";
import {CartProvider} from "./components/nav/CartContext";
import CartPage from "./components/nav/CartPage.jsx";

function App() {
	return (
		<div className="flex min-h-screen flex-col">
			<BrowserRouter>
				<CartProvider>
					<NavBar />
					<div className="flex-grow">
						<Routes>
							<Route path="/" element={<ItemListContainer />} />
							<Route
								path="/:category"
								element={<ItemListContainer />}
							/>
							<Route
								path="/product/:id"
								element={<ItemDetailContainer />}
							/>
							<Route path="/cart" element={<CartPage />} />
						</Routes>
					</div>
					<Footer />
				</CartProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
