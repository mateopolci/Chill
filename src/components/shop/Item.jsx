import React from "react";

function Item(id, image, name, brand, price) {
	return (
		<div className="h-44 w-36 border border-solid border-black flex flex-col items-center">
			<div>
				<img src={image} className="pb-3"></img>
				<h3>{name}</h3>
				<h4>{brand}</h4>
				<p>{price}</p>
			</div>
			<button className="border border-solid border-black w-24 bg-light-green rounded-sm">Details</button>
		</div>
	);
}

export default Item;
