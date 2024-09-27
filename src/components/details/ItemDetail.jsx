import React from "react";

function ItemDetail({item}) {
	return (
		<div className="flex flex-col items-center">
			<div className="flex h-64 w-64 items-center">
				<img src={item.image} alt={item.name} className="" />
			</div>
			<h2 className="text-2xl font-bold">{item.name}</h2>
			<h3 className="text-lg">{item.brand}</h3>
			<p>{item.description}</p>
			<p>Price: ${item.price}</p>
			<p>Stock: {item.stock}</p>
			<button className="m-5 w-24 rounded-sm border border-solid border-black bg-light-green">
				Add to cart
			</button>
		</div>
	);
}

export default ItemDetail;
