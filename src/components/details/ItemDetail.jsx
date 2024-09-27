import React from "react";

function ItemDetail({item}) {
	return (
		<>
			<div className="flex items-center min-h-96">
				<div>
					<div className="flex h-64 w-64 items-center">
						<img src={item.image} alt={item.name} className="" />
					</div>
				</div>
				<div>
					<h2 className="text-2xl font-bold">{item.name}</h2>
					<h3 className="text-lg">{item.brand}</h3>
					<p>${item.price}</p>
					<p>Only {item.stock} remaining!</p>
					<div className="w-80">
						<p>{item.description}</p>
					</div>
					<button className="m-5 w-24 rounded-sm border border-solid border-black bg-light-green">
						Add to cart
					</button>
				</div>
			</div>
		</>
	);
}

export default ItemDetail;
