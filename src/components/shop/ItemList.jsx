import React from "react";
import Item from "./Item";
import { useState, useEffect } from "react";
import { product } from "../../data/product";
import "../../index.css"

function ItemList({ category }) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProduct = () => {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve(product);
				}, 2000);
			});
		};
		fetchProduct().then((response) => {
			setData(response);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return (
			<div className="flex h-screen items-center justify-center">
				<span class="loader"></span>
			</div>
		);
	}

	const filteredData = category ? data.filter((prod) => prod.category === category) : data;

	return (
		<>
			<div className="flex flex-col items-center">
				<h2 className="py-8 text-2xl">{category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : 'All our products'}</h2>
				<div className="grid grid-cols-6 gap-20">
					{filteredData.map((prod) => (
						<Item
							key={prod.id}
							image={prod.image}
							name={prod.name}
							brand={prod.brand}
							category={prod.category}
							price={prod.price}
							description={prod.description}
							stock={prod.stock}
							size={prod.size}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default ItemList;
