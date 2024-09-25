import React from "react";
import Item from "./Item";
import {useState, useEffect} from "react";
import {product} from "../../data/product";

function ItemList() {
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
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className="flex flex-col items-center">
				<h2 className="py-8 text-xl">All our products</h2>
				<div className="grid grid-cols-6 gap-20">
					{data.map((prod) => (
						<Item 
                        key={prod.id}
                        id={prod.id}
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
