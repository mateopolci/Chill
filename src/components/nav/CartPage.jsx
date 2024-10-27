import React from "react";
import {useCart} from "./CartContext";
import {Link} from "react-router-dom";

function CartPage() {
	const {cartItems, removeFromCart, updateQuantity, getCartTotal} = useCart();

	if (cartItems.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center p-8">
				<h2 className="mb-4 text-2xl">Your cart is empty</h2>
				<Link
					to="/"
					className="flex h-12 w-36 items-center justify-center rounded-xl border-2 border-solid border-black bg-light-green hover:bg-dark-green hover:text-white"
				>
					Continue Shopping
				</Link>
			</div>
		);
	}

	return (
		<div className="container mx-auto p-8">
			<h2 className="mb-6 text-2xl">Shopping Cart</h2>
			<div className="flex flex-col gap-4">
				{cartItems.map((item) => (
					<div
						key={item.id}
						className="flex items-center justify-between rounded border p-4"
					>
						<div className="flex items-center gap-4">
							<img
								src={item.image}
								alt={item.name}
								className="h-20 w-20 object-cover"
							/>
							<div>
								<h3 className="text-xl">{item.name}</h3>
								<p className="text-gray-600">${item.price}</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="flex items-center">
								<button
									onClick={() =>
										updateQuantity(
											item.id,
											item.quantity - 1
										)
									}
									className="h-8 w-8 rounded-full border-2 border-solid border-black bg-white text-xl font-bold hover:bg-gray-100"
									disabled={item.quantity <= 1}
								>
									-
								</button>
								<span className="w-12 text-center text-xl font-bold">
									{item.quantity}
								</span>
								<button
									onClick={() =>
										updateQuantity(
											item.id,
											item.quantity + 1
										)
									}
									className="h-8 w-8 rounded-full border-2 border-solid border-black bg-white text-xl font-bold hover:bg-gray-100"
									disabled={item.quantity >= item.stock}
								>
									+
								</button>
							</div>
							<button
								onClick={() => removeFromCart(item.id)}
								className="text-red-500 hover:text-red-700"
							>
								Remove
							</button>
						</div>
					</div>
				))}
				<div className="mt-6 flex justify-end">
					<div className="text-xl">
						Total: ${getCartTotal().toFixed(2)}
					</div>
				</div>
			</div>
			{cartItems.length > 0 && (
				<div className="flex justify-center">
					<Link
						className="flex justify-center items-center mt-5 h-8 w-36 rounded-xl border border-solid border-black bg-light-green hover:bg-dark-green hover:text-white"
						to="/checkout"
					>
						Finalizar compra
					</Link>
				</div>
			)}
		</div>
	);
}

export default CartPage;
